import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterTypes';
import Constant from '../distribution/Constant';
import NullParameter from '../NullParameter';
import SumFraction from '../list/sumFraction';
import ContaminatedBuildingType from '../scenario/ContaminatedBuildingType';
import ContaminatedBuildingTypes from '../scenario/ContaminatedBuildingTypes';
import LogUniform from '../distribution/LogUniform';
import BetaPERT from '../distribution/BetaPERT';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import TruncatedNormal from '../distribution/TruncatedNormal';
import Uniform from '../distribution/Uniform';

export default class ConstantParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: Constant, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.constant:
        return old;
      case ParameterType.logUniform:
        return new LogUniform(old.name, old.value, old.value);
      case ParameterType.pert:
        return new BetaPERT(old.name, old.value, old.value, old.value);
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(old.name, old.value, old.value, old.value, old.value);
      case ParameterType.truncatedNormal:
        return new TruncatedNormal(old.name, old.value, old.value, old.value, old.value);
      case ParameterType.uniform:
        return new Uniform(old.name, old.value, old.value);
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
