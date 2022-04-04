/** Validate value is within the specified limits
 * @param {number} lower - The lower limit
 * @param {number} upper - The upper limit
 * @param {number} value - The value to validate
 * @param {boolean} inclusive - Whether the value can be equal to either limit. Defaults to true
 * @returns True if the value is valid in the given bounds or an error message if it is invalid
 */
const validateWithLimits = (lower: number, upper: number, value: number, inclusive = true): boolean | string => {
  if (inclusive) {
    if (value < lower) {
      return `Value must be greater than or equal to ${lower}`;
    }
    if (value > upper) {
      return `Value must be less than or equal to ${upper}`;
    }
    return true;
  }

  // non-inclusive
  if (value <= lower) {
    return `Value must be greater than ${lower}`;
  }
  if (value >= upper) {
    return `Value must be less than ${upper}`;
  }
  return true;
};

export { validateWithLimits };
