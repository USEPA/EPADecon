import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterType';
import * as Utility from '@/mixin/mathUtilityMixin';
import { injectable } from 'inversify';
import Uniform from '../distribution/Uniform';
import TruncatedNormal from '../distribution/TruncatedNormal';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import BetaPERT from '../distribution/BetaPERT';
import LogUniform from '../distribution/LogUniform';
import Constant from '../distribution/Constant';
import { isUnivariateDistribution } from '../distribution/UnivariateDistributionType';
import IUnivariateParameter from '../distribution/IUnivariateParameter';
import BimodalTruncatedNormal from '../distribution/BimodalTruncatedNormal';
import LogNormal from '../distribution/LogNormal';
import NullParameter from '../NullParameter';
import UniformXDependent from '../distribution/UniformXDependent';
import Weibull from '../distribution/Weibull';

@injectable()
export default class ParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: IParameter, newType: ParameterType): IParameter {
    if (old.type === newType) {
      return old;
    }
    if (isUnivariateDistribution(old)) {
      const castParam = <IUnivariateParameter>old;
      switch (newType) {
        case ParameterType.bimodalTruncatedNormal:
          return new BimodalTruncatedNormal(
            old.metaData,
            castParam.mean,
            castParam.stdDev,
            castParam.mean,
            castParam.stdDev,
            castParam.min,
            castParam.max,
          );
        case ParameterType.constant:
          return new Constant(old.metaData, castParam.mean);
        case ParameterType.efficacy:
          throw new Error('Not implemented yet'); // TODO: fix upon implementation
        case ParameterType.logNormal:
          return new LogNormal(old.metaData, castParam.mean, castParam.stdDev);
        case ParameterType.logUniform:
          return new LogUniform(
            old.metaData,
            Utility.convertToLog10(castParam.min),
            Utility.convertToLog10(castParam.max),
          );
        case ParameterType.null:
          return new NullParameter();
        case ParameterType.pert:
          return new BetaPERT(old.metaData, castParam.min, castParam.max, castParam.mode);
        case ParameterType.truncatedLogNormal:
          return new TruncatedLogNormal(
            old.metaData,
            Utility.convertToLog10(castParam.min),
            Utility.convertToLog10(castParam.max),
            Utility.convertToLog10(castParam.mean),
            Utility.convertToLog10(castParam.stdDev),
          );
        case ParameterType.truncatedNormal:
          return new TruncatedNormal(old.metaData, castParam.min, castParam.max, castParam.mean, castParam.stdDev);
        case ParameterType.uniform:
          return new Uniform(old.metaData, castParam.min, castParam.max);
        case ParameterType.uniformXDependent:
          return new UniformXDependent(old.metaData);
        case ParameterType.weibull:
          return new Weibull(old.metaData);
        default:
          throw new Error('New type not recognized');
      }
    }

    switch (newType) {
      case ParameterType.bimodalTruncatedNormal:
        return new BimodalTruncatedNormal(old.metaData);
      case ParameterType.constant:
        return new Constant(old.metaData);
      case ParameterType.efficacy:
        throw new Error('Not implemented yet'); // TODO: fix upon implementation
      case ParameterType.logNormal:
        return new LogNormal(old.metaData);
      case ParameterType.logUniform:
        return new LogUniform(old.metaData);
      case ParameterType.null:
        return new NullParameter();
      case ParameterType.pert:
        return new BetaPERT(old.metaData);
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
      default:
        throw new Error('New Type not recognized');
    }
  }
}
