export default {
  /** Note: 'dist' is a UniformXDependent distribution, but importing it would cause a circular dependency */
  onSerialize: (values: (number | string)[], dist: { selectedVariableIndices: number[] }): (number | string)[] =>
    dist.selectedVariableIndices.map((i) => values[i]),
};
