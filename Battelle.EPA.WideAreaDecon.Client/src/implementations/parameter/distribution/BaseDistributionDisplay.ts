import Vue from 'vue';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import IParameter from '@/interfaces/parameter/IParameter';
import { logDistributionTypes } from '@/mixin/parameterMixin';
import { validateWithLimits } from '@/constants';

export default class BaseParameterDisplay extends Vue implements IParameterDisplay {
  parameterValue!: IParameter;

  inputValidationRules = {
    general: (value: string): boolean | string => validateWithLimits(this.min, this.max, Number(value)),
    minMax: (min: string, max: string): boolean | string => min !== max || 'Min and max cannot be the same',
    stdDev: (value: string): boolean | string => {
      if (this.stdDevMin === undefined || this.stdDevMax === undefined) {
        return true;
      }
      return validateWithLimits(this.stdDevMin, this.stdDevMax, Number(value));
    },
  };

  get isLogDist(): boolean {
    return logDistributionTypes.includes(this.parameterValue.type);
  }

  get hasStdDev(): boolean {
    return this.parameterHasProperty('stdDev') || this.parameterHasProperty('stdDev1');
  }

  get step(): number {
    return this.parameterValue.metaData.step;
  }

  get min(): number {
    const { lowerLimit, step } = this.parameterValue.metaData;

    if (this.isLogDist) {
      return lowerLimit <= 0 ? step : lowerLimit;
    }

    return lowerLimit;
  }

  get max(): number {
    return this.parameterValue.metaData.upperLimit;
  }

  get stdDevMax(): number | undefined {
    if (!this.hasStdDev) {
      return undefined;
    }

    const val = this.max - this.min;
    if (this.isLogDist) {
      return val <= 1 ? this.max : val;
    }

    return val >= this.max ? this.max : val;
  }

  get stdDevMin(): number | undefined {
    if (!this.hasStdDev) {
      return undefined;
    }

    let { lowerLimit } = this.parameterValue.metaData;
    lowerLimit = lowerLimit <= 0 ? this.step : lowerLimit;

    if (this.isLogDist) {
      lowerLimit = lowerLimit <= 1 ? 1 + this.step : lowerLimit;
    }

    const val = (this.stdDevMax ?? 1) / 1000;
    return val <= lowerLimit ? lowerLimit : val;
  }

  private parameterHasProperty(property: string): boolean {
    return Object.keys(this.parameterValue).includes(property);
  }
}
