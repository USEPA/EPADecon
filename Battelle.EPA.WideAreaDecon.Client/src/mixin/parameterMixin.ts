import ParameterType from '@/enums/parameter/parameterType';

const changeableDistributionTypes = new Array<ParameterType>(
  ParameterType.constant,
  ParameterType.uniform,
  ParameterType.pert,
  ParameterType.truncatedNormal,
  ParameterType.logUniform,
  ParameterType.truncatedLogNormal,
);

// eslint-disable-next-line import/prefer-default-export
export { changeableDistributionTypes };
