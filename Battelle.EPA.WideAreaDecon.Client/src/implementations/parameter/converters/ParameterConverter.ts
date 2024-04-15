/* eslint-disable class-methods-use-this */
import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterType';
import { nelderMead } from '@/mixin/solverMixin';
import { injectable } from 'inversify';
import { logDistributionTypes } from '@/mixin/parameterMixin';
import Uniform from '../distribution/Uniform';
import TruncatedNormal from '../distribution/TruncatedNormal';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import BetaPERT from '../distribution/BetaPERT';
import ScaledBeta from '../distribution/ScaledBeta';
import LogUniform from '../distribution/LogUniform';
import Constant from '../distribution/Constant';
import { isUnivariateDistribution } from '../distribution/UnivariateDistributionType';
import IUnivariateParameter from '../../../interfaces/parameter/IUnivariateParameter';
import BimodalTruncatedNormal from '../distribution/BimodalTruncatedNormal';
import LogNormal from '../distribution/LogNormal';
import NullParameter from '../NullParameter';
import UniformXDependent from '../distribution/UniformXDependent';
import Weibull from '../distribution/Weibull';
import TextValue from '../distribution/TextValue';
import FrequencyValue from '../distribution/FrequencyValue';
import ParameterMetaData from '../ParameterMetaData';
import EnumeratedFraction from '../list/enumeratedFraction';
import EnumeratedParameter from '../list/enumeratedParameter';
import FrequencyValueType from '@/enums/parameter/frequencyValueType';

@injectable()
export default class ParameterConverter implements IParameterConverter {
  convertToNewType(old: IParameter, newType: ParameterType): IParameter {
    if (old.type === newType) {
      return old;
    }
    return isUnivariateDistribution(old)
      ? this.convertFromUnivariate(<IUnivariateParameter>old, newType)
      : this.convertFromNonUnivariate(old, newType);
  }

  convertFromUnivariate(old: IUnivariateParameter, newType: ParameterType): IParameter {
    const { min, max, mean, stdDev, mode } = this.getValuesForDistribution(old, newType);
    switch (newType) {
      case ParameterType.bimodalTruncatedNormal:
        return new BimodalTruncatedNormal(old.metaData, mean, stdDev, mean, stdDev, min, max);
      case ParameterType.constant:
        return new Constant(old.metaData, mean);
      case ParameterType.logNormal:
        return new LogNormal(old.metaData, mean, stdDev);
      case ParameterType.logUniform:
        return new LogUniform(old.metaData, min, max);
      case ParameterType.null:
        return new NullParameter();
      case ParameterType.pert:
        return new BetaPERT(old.metaData, min, max, mode);
      case ParameterType.scaledBeta:
        return new ScaledBeta(old.metaData, min, max);
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(old.metaData, min, max, mean, stdDev);
      case ParameterType.truncatedNormal:
        return new TruncatedNormal(old.metaData, min, max, mean, stdDev);
      case ParameterType.uniform:
        return new Uniform(old.metaData, min, max);
      case ParameterType.uniformXDependent:
        return new UniformXDependent(old.metaData);
      case ParameterType.textValue:
        return new TextValue(old.metaData, old.text || 'null');
      case ParameterType.frequencyValue:
        return new FrequencyValue(old.metaData, old.frequency || FrequencyValueType.Never);
      case ParameterType.weibull: {
        if (old.mean === undefined || old.stdDev === undefined) {
          return new Weibull(old.metaData);
        }

        const actMean = old.mean;
        const actVar = old.stdDev ** 2;
        const minimize = (values: number[]): number => {
          const actual = new Weibull(new ParameterMetaData(), values[0], values[1]);

          if (!!actual.mean && !!actual.variance) {
            return Math.sqrt((actual.mean - actMean) ** 2 + (actual.variance - actVar ** 2) ** 2);
          }
          return Infinity;
        };
        const guess = [1, 1];

        // SUT
        const sln = nelderMead(minimize, guess);

        const { upperLimit, step } = old.metaData;
        let { lowerLimit } = old.metaData;
        lowerLimit = lowerLimit <= 1 ? 1 + step : lowerLimit;

        const k = this.determineValueWithBoundaries(lowerLimit, upperLimit, sln.Input[0]);
        const lambda = this.determineValueWithBoundaries(lowerLimit, upperLimit, sln.Input[1]);

        return new Weibull(old.metaData, k, lambda);
      }
      case ParameterType.enumeratedFraction:
      case ParameterType.enumeratedParameter:
      default:
        throw new Error('Cannot convert to requested type');
    }
  }

  convertFromNonUnivariate(old: IParameter, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.bimodalTruncatedNormal:
        return new BimodalTruncatedNormal(old.metaData);
      case ParameterType.constant:
        return new Constant(old.metaData);
      case ParameterType.logNormal:
        return new LogNormal(old.metaData);
      case ParameterType.logUniform:
        return new LogUniform(old.metaData);
      case ParameterType.null:
        return new NullParameter();
      case ParameterType.pert:
        return new BetaPERT(old.metaData);
      case ParameterType.scaledBeta:
        return new ScaledBeta(old.metaData);
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(old.metaData);
      case ParameterType.truncatedNormal:
        return new TruncatedNormal(old.metaData);
      case ParameterType.uniform:
        return new Uniform(old.metaData);
      case ParameterType.uniformXDependent:
        return new UniformXDependent(old.metaData);
      case ParameterType.weibull:
        return new Weibull(old.metaData);
      case ParameterType.textValue:
        return new TextValue(old.metaData);
      case ParameterType.frequencyValue:
        return new FrequencyValue(old.metaData, FrequencyValueType.Never);
      case ParameterType.enumeratedFraction:
        return new EnumeratedFraction(old.metaData);
      case ParameterType.enumeratedParameter:
        return new EnumeratedParameter(old.metaData);
      default:
        throw new Error('New Type not recognized');
    }
  }

  /** Prevent invalid values from being used when switching distributions */
  private getValuesForDistribution(
    old: IUnivariateParameter,
    newType: ParameterType,
  ): {
    mean?: number;
    stdDev?: number;
    min?: number;
    max?: number;
    mode?: number;
  } {
    const isLogDist = logDistributionTypes.includes(newType);
    const { step, lowerLimit, upperLimit } = old.metaData;
    let { mean, stdDev, min, max, mode } = old;

    // Valid min and std dev differ b/n log distributions and other distributions
    if (isLogDist) {
      const minLowerLimit = lowerLimit <= 0 ? step : lowerLimit;
      min = this.determineValueWithBoundaries(minLowerLimit, upperLimit, min);

      const stdDevLowerLimit = lowerLimit <= 1 ? 1 + step : lowerLimit;
      stdDev = this.determineValueWithBoundaries(stdDevLowerLimit, upperLimit, stdDev);
    } else {
      min = this.determineValueWithBoundaries(lowerLimit, upperLimit, min);

      const stdDevLowerLimit = lowerLimit <= 0 ? step : lowerLimit;
      stdDev = this.determineValueWithBoundaries(stdDevLowerLimit, upperLimit, stdDev);
    }

    const maxLowerLimit = (min ?? step) + step;
    max = this.determineValueWithBoundaries(maxLowerLimit, upperLimit, max);

    mean = this.determineValueWithBoundaries(lowerLimit, upperLimit, mean);
    mode = this.determineValueWithBoundaries(min ?? lowerLimit, max ?? upperLimit, mode);

    return { min, max, stdDev, mean, mode };
  }

  private determineValueWithBoundaries(lower: number, upper: number, value?: number): number | undefined {
    if (value === undefined) {
      return undefined;
    }
    if (value < lower) {
      return lower;
    }
    if (value > upper) {
      return upper;
    }

    return value;
  }
}
