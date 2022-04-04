<template>
  <v-container>
    <v-row>
      <v-col>
        <v-range-slider v-model="sliderValue" :max="max" :min="min" :step="step" thumb-label @change="onSliderStopped">
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
      <v-col cols="4" class="mr-auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="minValue"
            @keyup.enter="updateOnTextMinChange"
            @blur="updateOnTextMinChange"
            v-model="textMin"
            label="Min"
            :rules="[inputValidationRules.general, inputValidationRules.minMax(textMin, textMax)]"
            hide-details="auto"
            type="number"
          >
            <template v-slot:append>
              <p class="grey--text">{{ parameterValue.metaData.units }}</p>
            </template>
          </v-text-field>
        </v-card>
      </v-col>
      <v-col cols="4" class="auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="maxValue"
            @keyup.enter="updateOnTextMaxChange"
            @blur="updateOnTextMaxChange"
            v-model="textMax"
            label="Max"
            :rules="[inputValidationRules.general, inputValidationRules.minMax(textMin, textMax)]"
            hide-details="auto"
            type="number"
          >
            <template v-slot:append>
              <p class="grey--text">{{ parameterValue.metaData.units }}</p>
            </template>
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Watch } from 'vue-property-decorator';
import Uniform from '@/implementations/parameter/distribution/Uniform';
import BaseDistributionDisplay from '@/implementations/parameter/distribution/BaseDistributionDisplay';

@Component
export default class UniformDisplay extends BaseDistributionDisplay {
  get castParameterValue(): Uniform {
    return this.parameterValue as Uniform;
  }

  sliderValue = [0, 0];

  textMin = '';

  textMax = '';

  ignoreNextValueSliderChange = false;

  @Watch('sliderValue')
  onSliderValueChanged(newValue: number[]): void {
    if (this.ignoreNextValueSliderChange) {
      this.ignoreNextValueSliderChange = false;
      return;
    }
    this.textMin = newValue[0].toString();
    this.textMax = newValue[1].toString();
    this.$set(this.parameterValue, 'min', newValue[0]);
    this.$set(this.parameterValue, 'max', newValue[1]);
  }

  updateOnTextMinChange(): void {
    const value = Number(this.textMin);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.minValue as any;
    if (this.textMin === '') {
      this.castParameterValue.min = undefined;
    } else if (value === this.sliderValue[0]) {
      this.castParameterValue.min = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textMin = '';
    } else if (castComponent.validate && castComponent.validate(true)) {
      if (this.sliderValue[1] <= value) {
        this.sliderValue = [value, value];
        this.castParameterValue.min = value;
        this.castParameterValue.max = value;
      } else {
        this.sliderValue = [value, this.sliderValue[1]];
        this.castParameterValue.min = value;
      }
    } else {
      this.textMin = this.sliderValue[0].toString();
    }
  }

  updateOnTextMaxChange(): void {
    const value = Number(this.textMax);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.maxValue as any;
    if (this.textMax === '') {
      this.castParameterValue.max = undefined;
    } else if (value === this.sliderValue[1]) {
      this.castParameterValue.max = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textMax = '';
    } else if (castComponent.validate && castComponent.validate(true)) {
      if (this.sliderValue[0] >= value) {
        this.sliderValue = [value, value];
        this.castParameterValue.min = value;
        this.castParameterValue.max = value;
      } else {
        this.sliderValue = [this.sliderValue[0], value];
        this.castParameterValue.max = value;
      }
    } else {
      this.textMax = this.sliderValue[1].toString();
    }
  }

  onSliderStopped(value: number[]): void {
    this.$set(this.parameterValue, 'min', value[0]);
    this.$set(this.parameterValue, 'max', value[1]);
  }

  @Watch('parameterValue')
  setValues(): void {
    this.ignoreNextValueSliderChange = true;
    this.sliderValue = [this.min, this.min];
    this.sliderValue = [this.castParameterValue.min ?? 0, this.castParameterValue.max ?? 1];

    this.textMin = this.castParameterValue.min?.toString() ?? '';
    this.textMax = this.castParameterValue.max?.toString() ?? '';
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
