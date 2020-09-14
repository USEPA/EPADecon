// eslint-disable-next-line no-shadow
enum ParameterType {
  constant = 'Constant',
  uniform = 'Uniform',
  uniformXDependent = 'Uniform X Dependent',
  pert = 'Beta PERT',
  truncatedNormal = 'Truncated Normal',
  bimodalTruncatedNormal = 'Bimodal Truncated Normal',
  logUniform = 'Log Uniform',
  truncatedLogNormal = 'Truncated Log Normal',
  logNormal = 'Log Normal',
  efficacy = 'Efficacy',
  weibull = 'Weibull',
  null = 'Null',
}

export default ParameterType;
