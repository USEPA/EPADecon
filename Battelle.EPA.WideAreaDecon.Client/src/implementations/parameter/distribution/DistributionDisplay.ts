import Distribution, { DistributionDataGenerator } from 'battelle-common-typescript-statistics';
import IUnivariateParameter from '@/interfaces/parameter/IUnivariateParameter';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';

export default class DistributionDisplay {
  baseline: IUnivariateParameter;

  current: IUnivariateParameter;

  get chartData(): Distribution[] {
    const distributions: Distribution[] = [];

    if (this.baseline.distribution !== undefined) {
      distributions.push(this.baseline.distribution);
    }

    if (this.current.distribution !== undefined) {
      distributions.push(this.current.distribution);
    }

    return distributions;
  }

  get dataGenerator(): DistributionDataGenerator {
    // don't use baseline distribution if constant distribution
    const useBaseline = this.baseline.type !== ParameterType.constant;

    let min = useBaseline ? this.baseline.metaData.lowerLimit : this.current.metaData.lowerLimit;
    let max = useBaseline ? this.baseline.metaData.upperLimit : this.current.metaData.upperLimit;

    if (this.current.min !== undefined) {
      min =
        useBaseline && this.baseline.min !== undefined
          ? this.getMin(this.current.min, this.baseline.min)
          : this.current.min;
    }

    if (this.current.max !== undefined) {
      max =
        useBaseline && this.baseline.max !== undefined
          ? this.getMax(this.current.max, this.baseline.max)
          : this.current.max;
    }

    return new DistributionDataGenerator(1000, min, max);
  }

  get displayChart(): boolean {
    switch (this.current.type) {
      case ParameterType.uniform:
      case ParameterType.pert:
      case ParameterType.truncatedNormal:
      case ParameterType.bimodalTruncatedNormal:
      case ParameterType.logUniform:
      case ParameterType.truncatedLogNormal:
      case ParameterType.logNormal:
      case ParameterType.weibull:
        return this.chartData.length > 0;
      case ParameterType.constant:
      case ParameterType.enumeratedFraction:
      case ParameterType.enumeratedParameter:
      case ParameterType.uniformXDependent:
      case ParameterType.textValue:
      case ParameterType.null:
      default:
        return false;
    }
  }

  get distComponent(): string {
    switch (this.current.type) {
      case ParameterType.null:
        return 'null-display';
      case ParameterType.constant:
        return 'constant-display';
      case ParameterType.logUniform:
        return 'log-uniform-display';
      case ParameterType.pert:
        return 'beta-pert-display';
      case ParameterType.truncatedLogNormal:
        return 'truncated-log-normal-display';
      case ParameterType.truncatedNormal:
        return 'truncated-normal-display';
      case ParameterType.logNormal:
        return 'log-normal-display';
      case ParameterType.uniform:
        return 'uniform-display';
      case ParameterType.uniformXDependent:
        return 'uniform-x-dependent-display';
      case ParameterType.weibull:
        return 'weibull-display';
      case ParameterType.bimodalTruncatedNormal:
        return 'bimodal-truncated-normal-display';
      case ParameterType.enumeratedFraction:
        return 'enumerated-fraction-display';
      case ParameterType.enumeratedParameter:
        return 'enumerated-parameter-display';
      case ParameterType.textValue:
        return 'text-value-display';
      default:
        return 'unknown-display';
    }
  }

  get xAxisLabel(): string {
    return `${this.baseline.metaData.description} (${this.baseline.metaData.units})` ?? '';
  }

  constructor(baseline: IParameter, current: IParameter) {
    this.baseline = baseline as IUnivariateParameter;
    this.current = current as IUnivariateParameter;
  }

  /** Compares two numbers and returns the number with the lower value */
  // eslint-disable-next-line class-methods-use-this
  private getMin(first: number, second: number): number {
    const diff = first - second;
    return diff > 0 ? second : first;
  }

  /** Compares two numbers and returns the number with the larger value */
  // eslint-disable-next-line class-methods-use-this
  private getMax(first: number, second: number): number {
    const diff = first - second;
    return diff > 0 ? first : second;
  }
}
