import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterType';
import { injectable } from 'inversify';
import DefaultParameterConverter from './DefaultParameterConverter';
import Uniform from '../distribution/Uniform';
import TruncatedNormal from '../distribution/TruncatedNormal';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import BetaPERT from '../distribution/BetaPERT';
import LogUniform from '../distribution/LogUniform';
import Constant from '../distribution/Constant';
import ConstantParameterConverter from './ConstantParameterConverter';
import LogUniformParameterConverter from './LogUniformConverter';
import BetaPertParameterConverter from './BetaPertParameterConverter';
import TruncatedLogNormalParameterConverter from './TruncatedLogNormalConverter';
import TruncatedNormalParameterConverter from './TruncatedNormalConverter';
import UniformParameterConverter from './UniformParameterConverter';

@injectable()
export default class ParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: IParameter, newType: ParameterType): IParameter {
    switch (old.type) {
      case ParameterType.constant:
        return new ConstantParameterConverter().convertToNewType(old as Constant, newType);
      case ParameterType.logUniform:
        return new LogUniformParameterConverter().convertToNewType(old as LogUniform, newType);
      case ParameterType.pert:
        return new BetaPertParameterConverter().convertToNewType(old as BetaPERT, newType);
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormalParameterConverter().convertToNewType(old as TruncatedLogNormal, newType);
      case ParameterType.truncatedNormal:
        return new TruncatedNormalParameterConverter().convertToNewType(old as TruncatedNormal, newType);
      case ParameterType.uniform:
        return new UniformParameterConverter().convertToNewType(old as Uniform, newType);
      case ParameterType.null:
      default:
        return new DefaultParameterConverter().convertToNewType(old, newType);
    }
  }
}
