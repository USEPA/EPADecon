<template>
  <v-container>
    <v-row>
      <v-col><v-spacer /></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-slider v-model="sliderValue" :max="max" :min="min" :step="step" thumb-label @change="onSliderStopped">
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
      <v-col cols="4" class="mr-auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="value"
            @keyup.enter="updateOnTextChange"
            @blur="updateOnTextChange"
            v-model="textValue"
            label="Value"
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
import Constant from '@/implementations/parameter/distribution/Constant';
import BaseDistributionDisplay from '@/implementations/parameter/distribution/BaseDistributionDisplay';

@Component
export default class ConstantParameterDisplay extends BaseDistributionDisplay {
  get castParameterValue(): Constant {
    return this.parameterValue as Constant;
  }

  sliderValue = 0;

  textValue = '';

  ignoreNextSliderChange = false;

  @Watch('sliderValue')
  onSliderValueChanged(newValue: number): void {
    if (this.ignoreNextSliderChange) {
      this.ignoreNextSliderChange = false;
      return;
    }

    this.textValue = newValue.toString();
    this.$set(this.parameterValue, 'value', newValue);
  }

  onSliderStopped(): void {
    this.$set(this.parameterValue, 'value', this.sliderValue);
  }

  updateOnTextChange(): void {
    const value = Number(this.textValue);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.value as any;
    if (this.textValue === '') {
      this.$set(this.castParameterValue, 'value', undefined);
    } else if (value === this.sliderValue) {
      this.$set(this.castParameterValue, 'value', value);
    } else if (!this.castParameterValue.isSet && !castComponent.validate()) {
      this.textValue = '';
    } else if (castComponent.validate()) {
      this.sliderValue = value;
      this.$set(this.castParameterValue, 'value', value);
    } else {
      this.textValue = this.sliderValue.toString();
    }
  }

  @Watch('castParameterValue')
  setValues(): void {
    this.textValue = this.castParameterValue.value?.toString() ?? '';
    this.sliderValue = this.castParameterValue.value ?? (this.min + this.max) / 2.0;
  }

  created(): void {
    this.ignoreNextSliderChange = this.anyValueIsUndefined(this.castParameterValue.value);
    this.setValues();
  }
}
</script>

<style lang="scss">
.v-slider__track-container {
  height: 8px !important;
}
.v-slider__track-fill {
  border-radius: 5px !important;
}
.v-slider__track-background {
  border-radius: 5px !important;
}
.v-slider__thumb {
  width: 24px !important;
  height: 24px !important;
  left: -12px !important;
}
.v-slider__thumb:before {
  left: -6px !important;
  top: -6px !important;
}
.theme--light.v-card.v-card--outlined {
  border: 2px solid !important;
  border-color: var(--primary-color) !important;
  border-radius: 5px !important;
}
</style>
