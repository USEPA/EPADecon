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
      <v-col>
        <v-slider v-model="sliderMode" :max="max" :min="min" :step="step" thumb-label @change="onSliderModeStopped">
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
      <v-col cols="4" class="mr-auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="modeValue"
            @keyup.enter="updateOnTextModeChange"
            @blur="updateOnTextModeChange"
            v-model="textMode"
            label="Mode"
            :rules="[inputValidationRules.general]"
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
import { Component, Prop, Watch } from 'vue-property-decorator';
import BetaPERT from '@/implementations/parameter/distribution/BetaPERT';
import BaseDistributionDisplay from '@/implementations/parameter/distribution/BaseDistributionDisplay';

@Component
export default class BetaPertDisplay extends BaseDistributionDisplay {
  @Prop({ required: true }) parameterValue!: BetaPERT;

  sliderValue = [0, 0];

  sliderMode = 0;

  textMin = '';

  textMax = '';

  textMode = '';

  ignoreNextValueSliderChange = false;

  ignoreNextModeSliderChange = false;

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
    if (newValue[0] > this.sliderMode) {
      [this.sliderMode] = newValue;
    }
    if (newValue[1] < this.sliderMode) {
      [, this.sliderMode] = newValue;
    }
  }

  @Watch('sliderMode')
  onSliderModeChanged(newValue: number): void {
    if (this.ignoreNextModeSliderChange) {
      this.ignoreNextModeSliderChange = false;
      return;
    }

    this.textMode = newValue.toString();
    this.$set(this.parameterValue, 'mode', newValue);
    if (newValue < this.sliderValue[0]) {
      this.sliderValue = [newValue, this.sliderValue[1]];
    }
    if (newValue > this.sliderValue[1]) {
      this.sliderValue = [this.sliderValue[0], newValue];
    }
  }

  updateOnTextMinChange(): void {
    const value = Number(this.textMin);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.minValue as any;
    if (this.textMin === '') {
      this.parameterValue.min = undefined;
    } else if (value === this.sliderValue[0]) {
      this.parameterValue.min = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textMin = '';
    } else if (castComponent.validate && castComponent.validate(true)) {
      if (value >= this.sliderMode) {
        this.sliderMode = value;
        this.textMode = value.toString();
      }
      if (value >= this.sliderValue[1]) {
        this.sliderValue = [value, value];
        this.parameterValue.min = value;
        this.parameterValue.max = value;
      } else {
        this.sliderValue = [value, this.sliderValue[1]];
        this.parameterValue.min = value;
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
      this.parameterValue.max = undefined;
    } else if (value === this.sliderValue[1]) {
      this.parameterValue.max = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textMax = '';
    } else if (castComponent.validate && castComponent.validate(true)) {
      if (value <= this.sliderMode) {
        this.sliderMode = value;
        this.textMode = value.toString();
      }
      if (value <= this.sliderValue[0]) {
        this.sliderValue = [value, value];
        this.parameterValue.min = value;
        this.parameterValue.max = value;
      } else {
        this.sliderValue = [this.sliderValue[0], value];
        this.parameterValue.max = value;
      }
    } else {
      this.textMax = this.sliderValue[1].toString();
    }
  }

  updateOnTextModeChange(): void {
    const value = Number(this.textMode);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.modeValue as any;
    if (this.textMode === '') {
      this.parameterValue.mode = undefined;
    } else if (value === this.sliderMode) {
      this.parameterValue.mode = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textMode = '';
    } else if (castComponent.validate && castComponent.validate(true)) {
      if (value >= this.sliderValue[1]) {
        this.sliderValue = [this.sliderValue[0], value];
      } else if (value <= this.sliderValue[0]) {
        this.sliderValue = [value, this.sliderValue[1]];
      }
      this.sliderMode = value;
    } else {
      this.textMode = this.sliderMode.toString();
    }
  }

  onSliderStopped(value: number[]): void {
    this.$set(this.parameterValue, 'min', value[0]);
    this.$set(this.parameterValue, 'max', value[1]);
  }

  onSliderModeStopped(value: number): void {
    this.$set(this.parameterValue, 'mode', value);
  }

  @Watch('parameterValue')
  setValues(): void {
    this.ignoreNextValueSliderChange = true;
    this.sliderValue = [this.parameterValue.min ?? this.min, this.parameterValue.max ?? this.max];

    this.ignoreNextModeSliderChange = true;
    this.sliderMode = this.parameterValue.mode ?? (this.min + this.max) / 2.0;

    this.textMin = this.parameterValue.min?.toString() ?? '';
    this.textMax = this.parameterValue.max?.toString() ?? '';
    this.textMode = this.parameterValue.mode?.toString() ?? '';
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
