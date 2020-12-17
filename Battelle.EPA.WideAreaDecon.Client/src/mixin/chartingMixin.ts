import IParameter from '@/interfaces/parameter/IParameter';
import IUnivariateParameter from '@/interfaces/parameter/IUnivariateParameter';
import Distribution, { DistributionDataGenerator } from 'battelle-common-typescript-statistics';
import ParameterType from '@/enums/parameter/parameterType';

function chartData(baseline: IUnivariateParameter, current: IUnivariateParameter): Distribution[] {
  const distributions: Distribution[] = [];

  if (baseline.distribution !== undefined) {
    distributions.push(baseline.distribution);
  }

  if (current.distribution !== undefined) {
    distributions.push(current.distribution);
  }

  return distributions;
}

function displayChart(type: ParameterType): boolean {
  switch (type) {
    case ParameterType.uniform:
    case ParameterType.pert:
    case ParameterType.truncatedNormal:
    case ParameterType.bimodalTruncatedNormal:
    case ParameterType.logUniform:
    case ParameterType.truncatedLogNormal:
    case ParameterType.logNormal:
    case ParameterType.weibull:
      return true;
    case ParameterType.constant:
    case ParameterType.enumeratedFraction:
    case ParameterType.enumeratedParameter:
    case ParameterType.uniformXDependent:
    case ParameterType.null:
    default:
      return false;
  }
}

function distGenerator(parameter: IParameter): DistributionDataGenerator {
  const gen = new DistributionDataGenerator(1000, parameter.metaData.lowerLimit, parameter.metaData.upperLimit);
  return gen;
}

function distComponent(type: ParameterType): string {
  switch (type) {
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
    default:
      return 'unknown-display';
  }
}

function xAxisLabel(parameter: IParameter): string {
  return parameter.metaData.description ?? '';
}

// eslint-disable-next-line import/prefer-default-export
export { chartData, displayChart, distComponent, distGenerator, xAxisLabel };
