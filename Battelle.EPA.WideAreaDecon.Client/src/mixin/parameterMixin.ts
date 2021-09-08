import ParameterType from '@/enums/parameter/parameterType';

const changeableDistributionTypes: ParameterType[] = [
  ParameterType.constant,
  ParameterType.uniform,
  ParameterType.pert,
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
  ParameterType.weibull,
];

/** Dstribution types that don't take the natural log of inputed values */
const nonLogDistributionTypes = changeableDistributionTypes.filter((type) => !logDistributionTypes.includes(type));

// eslint-disable-next-line import/prefer-default-export
export { changeableDistributionTypes, nonLogDistributionTypes, logDistributionTypes };
