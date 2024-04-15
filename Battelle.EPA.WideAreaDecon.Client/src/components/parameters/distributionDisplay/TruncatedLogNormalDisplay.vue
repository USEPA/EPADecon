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
              <span class="grey--text" v-html="units" />
            </template>
          </v-text-field>
        </v-card>
      </v-col>
      <v-col cols="6" class="auto">
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
              <span class="grey--text" v-html="units" />
            </template>
          </v-text-field>
        </v-card>
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
import TruncatedLogNormal from '@/implementations/parameter/distribution/TruncatedLogNormal';
import BaseDistributionDisplay from '@/implementations/parameter/distribution/BaseDistributionDisplay';

@Component
export default class TruncatedLogNormalDisplay extends BaseDistributionDisplay {
  get castParameterValue(): TruncatedLogNormal {
    return this.parameterValue as TruncatedLogNormal;
  }

  sliderValue = [0, 0];

  sliderMean = 0;

  sliderStd = 0;

  textMin = '';

  textMax = '';

  textMean = '';

  textStd = '';

  ignoreNextValueSliderChange = false;

  ignoreNextMeanSliderChange = false;

  ignoreNextStdSliderChange = false;

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
    if (newValue[0] > this.sliderMean) {
      [this.sliderMean] = newValue;
    }
    if (newValue[1] < this.sliderMean) {
      [, this.sliderMean] = newValue;
    }
  }

  @Watch('sliderMean')
  onSliderMeanChanged(newValue: number): void {
    if (this.ignoreNextMeanSliderChange) {
      this.ignoreNextMeanSliderChange = false;
      return;
    }

    this.textMean = newValue.toString();
    this.$set(this.parameterValue, 'mean', newValue);
    if (newValue < this.sliderValue[0]) {
      this.sliderValue = [newValue, this.sliderValue[1]];
    }
    if (newValue > this.sliderValue[1]) {
      this.sliderValue = [this.sliderValue[0], newValue];
    }
  }

  @Watch('sliderStd')
  onSliderStdChanged(newValue: number): void {
    if (this.ignoreNextStdSliderChange) {
      this.ignoreNextStdSliderChange = false;
      return;
    }

    this.textStd = newValue.toString();
    this.$set(this.parameterValue, 'stdDev', newValue);
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
      if (value >= this.sliderMean) {
        this.sliderMean = value;
        this.textMean = value.toString();
      }
      if (value >= this.sliderValue[1]) {
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
      if (value <= this.sliderMean) {
        this.sliderMean = value;
        this.textMean = value.toString();
      }
      if (value <= this.sliderValue[0]) {
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
      if (value >= this.sliderValue[1]) {
        this.sliderValue = [this.sliderValue[0], value];
      } else if (value <= this.sliderValue[0]) {
        this.sliderValue = [value, this.sliderValue[1]];
      }
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

  onSliderStopped(value: number[]): void {
    this.$set(this.parameterValue, 'min', value[0]);
    this.$set(this.parameterValue, 'max', value[1]);
  }

  onSliderMeanStopped(value: number): void {
    this.$set(this.parameterValue, 'mean', value);
  }

  onSliderStdStopped(value: number): void {
    this.$set(this.parameterValue, 'stdDev', value);
  }

  @Watch('parameterValue')
  setValues(): void {
    this.sliderValue = [this.castParameterValue.min ?? this.min, this.castParameterValue.max ?? this.max];
    this.sliderMean = this.castParameterValue.mean ?? (this.min + this.max) / 2.0;
    this.sliderStd = this.castParameterValue.stdDev ?? (this.max - this.min) / 5.0;

    this.textMin = this.castParameterValue.min?.toString() ?? '';
    this.textMax = this.castParameterValue.max?.toString() ?? '';
    this.textMean = this.castParameterValue.mean?.toString() ?? '';
    this.textStd = this.castParameterValue.stdDev?.toString() ?? '';
  }

  created(): void {
    this.ignoreNextValueSliderChange = this.anyValueIsUndefined(
      this.castParameterValue.min,
      this.castParameterValue.max,
    );
    this.ignoreNextMeanSliderChange = this.anyValueIsUndefined(this.castParameterValue.mean);
    this.ignoreNextStdSliderChange = this.anyValueIsUndefined(this.castParameterValue.stdDev);
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
