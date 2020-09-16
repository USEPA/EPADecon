import IParameter from '@/interfaces/parameter/IParameter';

export default interface IUnivariateParameter extends IParameter {
  min?: number;
  max?: number;
  mean?: number;
  mode?: number;
  stdDev?: number;
}
