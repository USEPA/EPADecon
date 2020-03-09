import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterTypes';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import Constant from '../distribution/Constant';
import LogUniform from '../distribution/LogUniform';
import BetaPERT from '../distribution/BetaPERT';
import TruncatedNormal from '../distribution/TruncatedNormal';
import Uniform from '../distribution/Uniform';
import ContaminatedBuildingTypes from '../scenario/ContaminatedBuildingTypes';
import ContaminatedBuildingType from '../scenario/ContaminatedBuildingType';
import SumFraction from '../list/sumFraction';
import NullParameter from '../NullParameter';

export default class TruncatedLogNormalParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: TruncatedLogNormal, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.constant:
        return new Constant(old.name, old.mean);
      case ParameterType.logUniform:
        return new LogUniform(old.name, old.min, old.max);
      case ParameterType.pert:
        return new BetaPERT(old.name, old.min, old.max, old.mean);
      case ParameterType.truncatedLogNormal:
        return old;
      case ParameterType.truncatedNormal:
        return new TruncatedNormal(old.name, old.min, old.max, old.mean, old.stdDev);
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
