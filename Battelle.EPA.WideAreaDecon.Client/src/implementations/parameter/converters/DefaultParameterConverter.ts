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
        return new Constant(old.name, old.metaData);
      case ParameterType.logUniform:
        return new LogUniform(old.name, old.metaData);
      case ParameterType.pert:
        return new BetaPERT(old.name, old.metaData);
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(old.name, old.metaData);
      case ParameterType.truncatedNormal:
        return new TruncatedNormal(old.name, old.metaData);
      case ParameterType.uniform:
        return new Uniform(old.name, old.metaData);
      case ParameterType.contaminatedBuildingTypes:
        return new ContaminatedBuildingTypes(old.name, old.metaData);
      case ParameterType.contaminatedBuildingType:
        return new ContaminatedBuildingType(old.name, old.metaData);
      case ParameterType.sumFraction:
        return new SumFraction(old.name, old.metaData);
      case ParameterType.null:
        return new NullParameter();
      default:
        return old;
    }
  }
}
