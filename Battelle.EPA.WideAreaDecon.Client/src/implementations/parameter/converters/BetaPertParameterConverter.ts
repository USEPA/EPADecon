import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterTypes';
import BetaPERT from '../distribution/BetaPERT';
import Constant from '../distribution/Constant';
import LogUniform from '../distribution/LogUniform';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import TruncatedNormal from '../distribution/TruncatedNormal';
import Uniform from '../distribution/Uniform';
import ContaminatedBuildingType from '../scenario/ContaminatedBuildingType';
import ContaminatedBuildingTypes from '../scenario/ContaminatedBuildingTypes';
import SumFraction from '../list/sumFraction';
import NullParameter from '../NullParameter';

export default class BetaPertParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: BetaPERT, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.constant:
        return new Constant(old.name, old.mode);
      case ParameterType.logUniform:
        return new LogUniform(old.name, old.min, old.max);
      case ParameterType.pert:
        return old;
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(old.name, old.min, old.max, old.mean, old.stdDev);
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
