import ParameterType from '@/enums/parameter/parameterType';

const changeableDistributionTypes: ParameterType[] = [
  ParameterType.constant,
  ParameterType.uniform,
  ParameterType.pert,
  ParameterType.scaledBeta,
  ParameterType.truncatedNormal,
  ParameterType.truncatedLogNormal,
  ParameterType.logNormal,
  ParameterType.logUniform,
  ParameterType.truncatedLogNormal,
  ParameterType.weibull,
  ParameterType.bimodalTruncatedNormal,
];

const logDistributionTypes: ParameterType[] = [
  ParameterType.logNormal,
  ParameterType.truncatedLogNormal,
  ParameterType.logUniform,
  ParameterType.weibull,
];

/** Dstribution types that don't take the natural log of inputed values */
const nonLogDistributionTypes = changeableDistributionTypes.filter((type) => !logDistributionTypes.includes(type));

export { changeableDistributionTypes, nonLogDistributionTypes, logDistributionTypes };
