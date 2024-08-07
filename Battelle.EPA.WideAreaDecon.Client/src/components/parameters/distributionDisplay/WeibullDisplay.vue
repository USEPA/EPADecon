<template>
  <v-container>
    <v-row>
      <v-col>
        <v-slider v-model="sliderLambda" :max="max" :min="min" :step="step" thumb-label @change="onSliderLambdaStopped">
          <template v-slot:prepend>
            <p class="grey--text">{{ min }}</p>
          </template>
          <template v-slot:append>
            <p class="grey--text">{{ max }}</p>
          </template>
        </v-slider>
      </v-col>
      <v-col>
        <v-slider v-model="sliderK" :max="max" :min="min" :step="step" thumb-label @change="onSliderKStopped">
          <template v-slot:prepend>
            <p class="grey--text">{{ min }}</p>
          </template>
          <template v-slot:append>
            <p class="grey--text">{{ max }}</p>
          </template>
        </v-slider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="mr-auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="LambdaValue"
            @keyup.enter="updateOnTextLambdaChange"
            @blur="updateOnTextLambdaChange"
            v-model="textLambda"
            label="Lambda"
            :rules="[inputValidationRules.general]"
            hide-details="auto"
            type="number"
          >
            <template v-slot:append>
              <span class="grey--text" v-html="units" />
            </template>
          </v-text-field>
        </v-card>
      </v-col>
      <v-col cols="6" class="auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="KValue"
            @keyup.enter="updateOnTextKChange"
            @blur="updateOnTextKChange"
            v-model="textK"
            label="k"
            :rules="[inputValidationRules.general]"
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
import Weibull from '@/implementations/parameter/distribution/Weibull';
import BaseDistributionDisplay from '@/implementations/parameter/distribution/BaseDistributionDisplay';

@Component
export default class WeibullDisplay extends BaseDistributionDisplay {
  get castParameterValue(): Weibull {
    return this.parameterValue as Weibull;
  }

  sliderValue = [0, 0];

  sliderLambda = 0;

  sliderK = 0;

  textLambda = '';

  textK = '';

  ignoreNextValueSliderChange = false;

  ignoreNextLambdaSliderChange = false;

  ignoreNextKSliderChange = false;

  get min(): number {
    return super.min <= 1 ? 1 + this.step : super.min;
  }

  @Watch('sliderValue')
  onSliderValueChanged(newValue: number[]): void {
    if (this.ignoreNextValueSliderChange) {
      this.ignoreNextValueSliderChange = false;
      return;
    }
    if (newValue[0] > this.sliderLambda) {
      [this.sliderLambda] = newValue;
    }
    if (newValue[1] < this.sliderLambda) {
      [, this.sliderLambda] = newValue;
    }
  }

  @Watch('sliderLambda')
  onSliderLambdaChanged(newValue: number): void {
    if (this.ignoreNextLambdaSliderChange) {
      this.ignoreNextLambdaSliderChange = false;
      return;
    }

    this.textLambda = newValue.toString();
    this.$set(this.parameterValue, 'lambda', newValue);
    if (newValue < this.sliderValue[0]) {
      this.sliderValue = [newValue, this.sliderValue[1]];
    }
    if (newValue > this.sliderValue[1]) {
      this.sliderValue = [this.sliderValue[0], newValue];
    }
  }

  @Watch('sliderK')
  onSliderKChanged(newValue: number): void {
    if (this.ignoreNextKSliderChange) {
      this.ignoreNextKSliderChange = false;
      return;
    }

    this.textK = newValue.toString();
    this.$set(this.parameterValue, 'k', newValue);
  }

  updateOnTextLambdaChange(): void {
    const value = Number(this.textLambda);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.LambdaValue as any;
    if (this.textLambda === '') {
      this.castParameterValue.lambda = undefined;
    } else if (value === this.sliderLambda) {
      this.castParameterValue.lambda = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textLambda = '';
    } else if (castComponent.validate && castComponent.validate(true)) {
      if (value >= this.sliderValue[1]) {
        this.sliderValue = [this.sliderValue[0], value];
      } else if (value <= this.sliderValue[0]) {
        this.sliderValue = [value, this.sliderValue[1]];
      }
      this.sliderLambda = value;
    } else {
      this.textLambda = this.sliderLambda.toString();
    }
  }

  updateOnTextKChange(): void {
    const value = Number(this.textK);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.KValue as any;
    if (this.textK === '') {
      this.castParameterValue.k = undefined;
    } else if (value === this.sliderK) {
      this.castParameterValue.k = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textK = '';
    } else {
      this.textK = this.sliderK.toString();
    }
  }

  onSliderLambdaStopped(value: number): void {
    this.$set(this.parameterValue, 'lambda', value);
  }

  onSliderKStopped(value: number): void {
    this.$set(this.parameterValue, 'k', value);
  }

  @Watch('parameterValue')
  setValues(): void {
    this.sliderLambda = this.castParameterValue.lambda ?? 1;
    this.sliderK = this.castParameterValue.k ?? 1;

    this.textLambda = this.castParameterValue.lambda?.toString() ?? '';
    this.textK = this.castParameterValue.k?.toString() ?? '';
  }

  created(): void {
    this.ignoreNextLambdaSliderChange = this.anyValueIsUndefined(this.castParameterValue.lambda);
    this.ignoreNextKSliderChange = this.anyValueIsUndefined(this.castParameterValue.k);
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
