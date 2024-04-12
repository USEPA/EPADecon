<template>
  <v-container>
    <v-row>
      <v-col>
        <v-range-slider
          @input="onSliderChanged('minMax')"
          v-model="minMax"
          :max="max"
          :min="min"
          :step="step"
          thumb-label
        >
          <template v-slot:prepend>
            <p class="grey--text">{{ min }}</p>
          </template>
          <template v-slot:append>
            <p class="grey--text">{{ max }}</p>
          </template>
        </v-range-slider>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-slider @input="onSliderChanged('alpha')" v-model="alpha" :max="max" :min="shapeMin" :step="step" thumb-label>
          <template v-slot:prepend>
            <p class="grey--text">{{ shapeMin }}</p>
          </template>
          <template v-slot:append>
            <p class="grey--text">{{ max }}</p>
          </template>
        </v-slider>
      </v-col>

      <v-col>
        <v-slider @input="onSliderChanged('beta')" v-model="beta" :max="max" :min="shapeMin" :step="step" thumb-label>
          <template v-slot:prepend>
            <p class="grey--text">{{ shapeMin }}</p>
          </template>
          <template v-slot:append>
            <p class="grey--text">{{ max }}</p>
          </template>
        </v-slider>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="min"
            @keyup.enter="onTextChanged($event, 'min')"
            @blur="onTextChanged($event, 'min')"
            v-model="textMin"
            label="Min"
            :rules="[inputValidationRules.general, inputValidationRules.minMax(textMin, textMax)]"
            hide-details="auto"
            type="number"
          >
            <template v-slot:append>
              <span class="grey--text" v-html="units" />
            </template>
          </v-text-field>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="max"
            @keyup.enter="onTextChanged($event, 'max')"
            @blur="onTextChanged($event, 'max')"
            v-model="textMax"
            label="Max"
            :rules="[inputValidationRules.general, inputValidationRules.minMax(textMin, textMax)]"
            hide-details="auto"
            type="number"
          >
            <template v-slot:append>
              <span class="grey--text" v-html="units" />
            </template>
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="alpha"
            @keyup.enter="onTextChanged($event, 'alpha')"
            @blur="onTextChanged($event, 'alpha')"
            v-model="textAlpha"
            label="α"
            :rules="[shapeValidation]"
            hide-details="auto"
            type="number"
          >
            <template v-slot:append>
              <span class="grey--text" v-html="units" />
            </template>
          </v-text-field>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="beta"
            @keyup.enter="onTextChanged($event, 'beta')"
            @blur="onTextChanged($event, 'beta')"
            v-model="textBeta"
            label="β"
            :rules="[shapeValidation]"
            hide-details="auto"
            type="number"
          >
            <template v-slot:append>
              <span class="grey--text" v-html="units" />
            </template>
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Watch } from 'vue-property-decorator';
import BaseParameterDisplay from '@/implementations/parameter/distribution/BaseDistributionDisplay';
import ScaledBeta from '@/implementations/parameter/distribution/ScaledBeta';

@Component
export default class ScaledBetaDisplay extends BaseParameterDisplay {
  get castParameterValue(): ScaledBeta {
    return this.parameterValue as ScaledBeta;
  }

  alpha = 0;

  beta = 0;

  minMax = [0, 0];

  textAlpha = '';

  textBeta = '';

  textMax = '';

  textMin = '';

  ignoreNextAlphaSliderChange = false;

  ignoreNextBetaSliderChange = false;

  ignoreNextMinMaxSliderChange = false;

  get shapeValidation(): (value: string) => boolean | string {
    return (value: string) => this.validateWithLimits(this.shapeMin, this.max, Number(value));
  }

  get shapeMin(): number {
    return this.min <= 0 ? this.step : this.min;
  }

  onSliderChanged(slider: 'minMax' | 'alpha' | 'beta'): void {
    const newValue = this[slider];

    if (slider === 'minMax') {
      if (this.ignoreNextMinMaxSliderChange) {
        this.ignoreNextMinMaxSliderChange = false;
        return;
      }

      this.setMinMax(newValue as number[]);
      return;
    }

    if (slider === 'alpha' && this.ignoreNextAlphaSliderChange) {
      this.ignoreNextAlphaSliderChange = false;
      return;
    }
    if (slider === 'beta' && this.ignoreNextBetaSliderChange) {
      this.ignoreNextBetaSliderChange = false;
      return;
    }

    this.setAlphaOrBeta(slider, newValue as number);
  }

  onTextChanged(event: KeyboardEvent, input: 'min' | 'max' | 'alpha' | 'beta'): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const component = this.$refs[input] as any;
    if (!component.validate()) {
      this.$set(this.castParameterValue, input, undefined);
      return;
    }

    const value = Number((event.target as HTMLInputElement).value);
    if (input === 'min' || input === 'max') {
      const [min, max] = this.minMax;
      if ((value < min && input === 'max') || (value > max && input === 'min')) {
        this.minMax = [value, value];
      } else if (input === 'min') {
        this.minMax = [value, max];
      } else if (input === 'max') {
        this.minMax = [min, value];
      }
      this.setMinMax(this.minMax);
      return;
    }

    this[input] = value;
    this.setAlphaOrBeta(input, value);
  }

  setAlphaOrBeta(shape: 'alpha' | 'beta', value?: number): void {
    const textShape: 'textAlpha' | 'textBeta' = shape === 'alpha' ? 'textAlpha' : 'textBeta';
    this[textShape] = value?.toString() ?? '';
    this.$set(this.castParameterValue, shape, value ?? (this.min + this.max) / 2);
  }

  setMinMax([min, max]: (number | undefined)[]): void {
    this.textMin = min?.toString() ?? '';
    this.textMax = max?.toString() ?? '';

    this.$set(this.castParameterValue, 'min', min ?? this.min);
    this.$set(this.castParameterValue, 'max', max ?? this.max);
  }

  @Watch('castParameterValue')
  setValues(): void {
    const { min, max, alpha, beta } = this.castParameterValue;
    const half = (this.min + this.max) / 2;

    this.minMax = [min ?? this.min, max ?? this.max];
    this.setMinMax(this.minMax);

    this.alpha = alpha ?? half;
    this.setAlphaOrBeta('alpha', this.alpha);

    this.beta = beta ?? half;
    this.setAlphaOrBeta('beta', this.beta);
  }

  created(): void {
    this.ignoreNextMinMaxSliderChange = this.anyValueIsUndefined(
      this.castParameterValue.min,
      this.castParameterValue.max,
    );
    this.ignoreNextAlphaSliderChange = this.anyValueIsUndefined(this.castParameterValue.alpha);
    this.ignoreNextBetaSliderChange = this.anyValueIsUndefined(this.castParameterValue.beta);
    this.setValues();
  }
}
</script>

<style lang="scss" scoped></style>
