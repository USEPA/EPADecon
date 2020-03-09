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

export default class DefaultParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: IParameter, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.constant:
        return new Constant(old.name);
      case ParameterType.logUniform:
        return new LogUniform(old.name);
      case ParameterType.pert:
        return new BetaPERT(old.name);
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(old.name);
      case ParameterType.truncatedNormal:
        return new TruncatedNormal(old.name);
      case ParameterType.uniform:
        return new Uniform(old.name);
      case ParameterType.contaminatedBuildingTypes:
        return new ContaminatedBuildingTypes(old.name);
      case ParameterType.contaminatedBuildingType:
        return new ContaminatedBuildingType(old.name);
      case ParameterType.sumFraction:
        return new SumFraction(old.name);
      case ParameterType.null:
        return new NullParameter();
      default:
        return old;
    }
  }
}
