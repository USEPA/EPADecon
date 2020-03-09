import ParameterType from '@/enums/parameter/parameterTypes';

const parameterTypeNames = new Map<ParameterType, string>([
  [ParameterType.constant, 'Constant'],
  [ParameterType.contaminatedBuildingType, 'Contaminated Building Type'],
  [ParameterType.contaminatedBuildingTypes, 'Contaminated Building Types'],
  [ParameterType.logUniform, 'Log Uniform'],
  [ParameterType.null, 'Null'],
  [ParameterType.pert, 'BetaPERT'],
  [ParameterType.sumFraction, 'Sum Fraction'],
  [ParameterType.truncatedLogNormal, 'Truncated Log Normal'],
  [ParameterType.truncatedNormal, 'Truncated Normal'],
  [ParameterType.uniform, 'Uniform'],
]);

const changeableDistributionTypes = new Array<ParameterType>(
  ParameterType.constant,
  ParameterType.uniform,
  ParameterType.pert,
  ParameterType.truncatedNormal,
  ParameterType.logUniform,
  ParameterType.truncatedLogNormal,
);

export { parameterTypeNames, changeableDistributionTypes };
