import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterTypes';
import TruncatedNormal from '../distribution/TruncatedNormal';
import Constant from '../distribution/Constant';
import LogUniform from '../distribution/LogUniform';
import BetaPERT from '../distribution/BetaPERT';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import Uniform from '../distribution/Uniform';
import ContaminatedBuildingTypes from '../scenario/ContaminatedBuildingTypes';
import ContaminatedBuildingType from '../scenario/ContaminatedBuildingType';
import SumFraction from '../list/sumFraction';
import NullParameter from '../NullParameter';

export default class TruncatedNormalParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: TruncatedNormal, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.constant:
        return new Constant(
          old.name,
          old.min !== undefined && old.max !== undefined ? (old.max + old.min) / 2 : undefined,
        );
      case ParameterType.logUniform:
        return new LogUniform(
          old.name,
          old.min !== undefined ? Math.log10(old.min) : undefined,
          old.max !== undefined ? Math.log10(old.max) : undefined,
        );
      case ParameterType.pert:
        return new BetaPERT(old.name, old.min, old.max, old.mean);
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(
          old.name,
          old.min !== undefined ? Math.log10(old.min) : undefined,
          old.max !== undefined ? Math.log10(old.max) : undefined,
          old.mean !== undefined ? Math.log10(old.mean) : undefined,
          old.stdDev !== undefined ? Math.log10(old.stdDev) : undefined,
        );
      case ParameterType.truncatedNormal:
        return old;
      case ParameterType.uniform:
        return new Uniform(old.name, old.min, old.max);
      case ParameterType.contaminatedBuildingTypes:
        return new ContaminatedBuildingTypes();
      case ParameterType.contaminatedBuildingType:
        return new ContaminatedBuildingType();
      case ParameterType.sumFraction:
        return new SumFraction();
      case ParameterType.null:
        return new NullParameter();
      default:
        return old;
    }
  }
}
