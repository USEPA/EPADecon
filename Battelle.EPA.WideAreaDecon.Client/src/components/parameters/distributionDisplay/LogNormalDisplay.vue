<template>
  <v-container>
    <v-row>
      <v-col>
        <v-slider v-model="sliderMean" :max="max" :min="min" :step="step" thumb-label @change="onSliderMeanStopped">
          <template v-slot:prepend>
            <p class="grey--text">{{ min }}</p>
          </template>
          <template v-slot:append>
            <p class="grey--text">{{ max }}</p>
          </template>
        </v-slider>
      </v-col>
      <v-col>
        <v-slider
          v-model="sliderStd"
          :max="stdDevMax"
          :min="stdDevMin"
          :step="step"
          thumb-label
          @change="onSliderStdStopped"
        >
          <template v-slot:prepend>
            <p class="grey--text">{{ stdDevMin }}</p>
          </template>
          <template v-slot:append>
            <p class="grey--text">{{ stdDevMax }}</p>
          </template>
        </v-slider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="mr-auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="meanValue"
            @keyup.enter="updateOnTextMeanChange"
            @blur="updateOnTextMeanChange"
            v-model="textMean"
            label="Mean"
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
            ref="stdValue"
            @keyup.enter="updateOnTextStdChange"
            @blur="updateOnTextStdChange"
            v-model="textStd"
            label="Standard Deviation"
            :rules="[inputValidationRules.stdDev]"
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
import LogNormal from '@/implementations/parameter/distribution/LogNormal';
import BaseDistributionDisplay from '@/implementations/parameter/distribution/BaseDistributionDisplay';

@Component
export default class LogNormalDisplay extends BaseDistributionDisplay {
  get castParameterValue(): LogNormal {
    return this.parameterValue as LogNormal;
  }

  sliderMean = 0;

  sliderStd = 0;

  textMean = '';

  textStd = '';

  ignoreNextMeanSliderChange = false;

  ignoreNextStdSliderChange = false;

  @Watch('sliderMean')
  onSliderMeanChanged(newValue: number): void {
    if (this.ignoreNextMeanSliderChange) {
      this.ignoreNextMeanSliderChange = false;
      return;
    }

    this.textMean = newValue.toString();
    this.$set(this.parameterValue, 'mean', newValue);
  }

  @Watch('sliderStd')
  onSliderStdChanged(newValue: number): void {
    if (this.ignoreNextStdSliderChange) {
      this.ignoreNextStdSliderChange = false;
      return;
    }

    this.textStd = newValue.toString();
    this.$set(this.parameterValue, 'mean', newValue);
  }

  updateOnTextMeanChange(): void {
    const value = Number(this.textMean);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.meanValue as any;
    if (this.textMean === '') {
      this.castParameterValue.mean = undefined;
    } else if (value === this.sliderMean) {
      this.castParameterValue.mean = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textMean = '';
    } else if (castComponent.validate && castComponent.validate(true)) {
      this.sliderMean = value;
    } else {
      this.textMean = this.sliderMean.toString();
    }
  }

  updateOnTextStdChange(): void {
    const value = Number(this.textStd);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.stdValue as any;
    if (this.textStd === '') {
      this.castParameterValue.stdDev = undefined;
    } else if (value === this.sliderStd) {
      this.castParameterValue.stdDev = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textStd = '';
    } else {
      this.textStd = this.sliderStd.toString();
    }
  }

  onSliderMeanStopped(value: number): void {
    this.$set(this.parameterValue, 'mean', value);
  }

  onSliderStdStopped(value: number): void {
    this.$set(this.parameterValue, 'stdDev', value);
  }

  @Watch('parameterValue')
  setValues(): void {
    this.sliderMean = this.castParameterValue.mean ?? 1;
    this.sliderStd = this.castParameterValue.stdDev ?? 1;

    this.textMean = this.castParameterValue.mean?.toString() ?? '';
    this.textStd = this.castParameterValue.stdDev?.toString() ?? '';
  }

  created(): void {
    this.ignoreNextMeanSliderChange = this.anyValueIsUndefined(this.castParameterValue.mean);
    this.ignoreNextStdSliderChange = this.anyValueIsUndefined(this.castParameterValue.stdDev);
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
