// eslint-disable-next-line no-shadow
enum ParameterType {
  constant = 'Constant',
  uniform = 'Uniform',
  uniformXDependent = 'Uniform X Dependent',
  pert = 'Beta PERT',
  scaledBeta = 'Scaled Beta',
  truncatedNormal = 'Truncated Normal',
  bimodalTruncatedNormal = 'Bimodal Truncated Normal',
  logUniform = 'Log Uniform',
  truncatedLogNormal = 'Truncated Log Normal',
  logNormal = 'Log Normal',
  weibull = 'Weibull',
  textValue = 'Text',
  enumeratedFraction = 'Enumerated Fraction',
  enumeratedParameter = 'Enumerated Parameter',
  contaminationDefinition = 'Contamination Definition',
  null = 'Null',
}

export default ParameterType;
