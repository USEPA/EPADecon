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
    <!-- First mean and standard deviation slider -->
    <v-row>
      <v-col>
        <v-slider v-model="sliderMean1" :max="max" :min="min" :step="step" thumb-label @change="onSliderMean1Stopped">
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
          v-model="sliderStd1"
          :max="stdDevMax"
          :min="stdDevMin"
          :step="stdDevStep"
          thumb-label
          @change="onSliderStd1Stopped"
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
    <!-- Second mean and standard deviation slider -->
    <v-row>
      <v-col>
        <v-slider v-model="sliderMean2" :max="max" :min="min" :step="step" thumb-label @change="onSliderMean2Stopped">
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
          v-model="sliderStd2"
          :max="stdDevMax"
          :min="stdDevMin"
          :step="stdDevStep"
          thumb-label
          @change="onSliderStd2Stopped"
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
              <p class="grey--text">{{ parameterValue.metaData.units }}</p>
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
              <p class="grey--text">{{ parameterValue.metaData.units }}</p>
            </template>
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>
    <!-- First mean and standard deviation text boxes-->
    <v-row>
      <v-col cols="6" class="mr-auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="meanValue1"
            @keyup.enter="updateOnTextMeanChange"
            @blur="updateOnTextMeanChange"
            v-model="textMean1"
            label="Mean 1"
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
      <v-col cols="6" class="auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="stdValue1"
            @keyup.enter="updateOnTextStdChange"
            @blur="updateOnTextStdChange"
            v-model="textStd1"
            label="Standard Deviation 1"
            :rules="[inputValidationRules.stdDev]"
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
    <!-- Second mean and standard deviation text boxes -->
    <v-row>
      <v-col cols="6" class="mr-auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="meanValue2"
            @keyup.enter="updateOnTextMeanChange"
            @blur="updateOnTextMeanChange"
            v-model="textMean2"
            label="Mean 2"
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
      <v-col cols="6" class="auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="stdValue2"
            @keyup.enter="updateOnTextStdChange"
            @blur="updateOnTextStdChange"
            v-model="textStd2"
            label="Standard Deviation 2"
            :rules="[inputValidationRules.stdDev]"
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
import BimodalTruncatedNormal from '@/implementations/parameter/distribution/BimodalTruncatedNormal';
import { max } from 'lodash';
import BaseDistributionDisplay from '@/implementations/parameter/distribution/BaseDistributionDisplay';

@Component
export default class BimodalTruncatedNormalDisplay extends BaseDistributionDisplay {
  get castParameterValue(): BimodalTruncatedNormal {
    return this.parameterValue as BimodalTruncatedNormal;
  }

  sliderValue = [0, 0];

  sliderMean1 = 0;

  sliderStd1 = 0;

  sliderMean2 = 0;

  sliderStd2 = 0;

  textMin = '';

  textMax = '';

  textMean1 = '';

  textStd1 = '';

  textMean2 = '';

  textStd2 = '';

  ignoreNextValueSliderChange = false;

  ignoreNextMeanSliderChange = false;

  ignoreNextStdSliderChange = false;

  get stdDevStep(): number {
    return max([(this.sliderValue[1] - this.sliderValue[0]) / 100, 0.01]) ?? 0.01;
  }

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
    if (newValue[0] > this.sliderMean1) {
      [this.sliderMean1] = newValue;
    }
    if (newValue[1] < this.sliderMean1) {
      [, this.sliderMean1] = newValue;
    }

    if (newValue[0] > this.sliderMean2) {
      [this.sliderMean2] = newValue;
    }
    if (newValue[1] < this.sliderMean2) {
      [, this.sliderMean2] = newValue;
    }
  }

  @Watch('sliderMean1')
  onSliderMean1Changed(newValue: number): void {
    if (this.ignoreNextMeanSliderChange) {
      this.ignoreNextMeanSliderChange = false;
      return;
    }

    this.textMean1 = newValue.toString();
    this.$set(this.parameterValue, 'mean1', newValue);
    if (newValue < this.sliderValue[0]) {
      this.sliderValue = [newValue, this.sliderValue[1]];
    }
    if (newValue > this.sliderValue[1]) {
      this.sliderValue = [this.sliderValue[0], newValue];
    }
  }

  @Watch('sliderMean2')
  onSliderMean2Changed(newValue: number): void {
    if (this.ignoreNextMeanSliderChange) {
      this.ignoreNextMeanSliderChange = false;
      return;
    }

    this.textMean2 = newValue.toString();
    this.$set(this.parameterValue, 'mean2', newValue);
    if (newValue < this.sliderValue[0]) {
      this.sliderValue = [newValue, this.sliderValue[1]];
    }
    if (newValue > this.sliderValue[1]) {
      this.sliderValue = [this.sliderValue[0], newValue];
    }
  }

  @Watch('sliderStd1')
  onSliderStd1Changed(newValue: number): void {
    if (this.ignoreNextStdSliderChange) {
      this.ignoreNextStdSliderChange = false;
      return;
    }

    this.textStd1 = newValue.toString();
    this.$set(this.parameterValue, 'stdDev1', newValue);
  }

  @Watch('sliderStd2')
  onSliderStd2Changed(newValue: number): void {
    if (this.ignoreNextStdSliderChange) {
      this.ignoreNextStdSliderChange = false;
      return;
    }

    this.textStd2 = newValue.toString();
    this.$set(this.parameterValue, 'stdDev2', newValue);
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
      if (value >= this.sliderMean1) {
        this.sliderMean1 = value;
        this.textMean1 = value.toString();
      }
      if (value >= this.sliderMean2) {
        this.sliderMean2 = value;
        this.textMean2 = value.toString();
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
      if (value <= this.sliderMean1) {
        this.sliderMean1 = value;
        this.textMean1 = value.toString();
      }
      if (value <= this.sliderMean2) {
        this.sliderMean2 = value;
        this.textMean2 = value.toString();
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
    const value1 = Number(this.textMean1);
    const value2 = Number(this.textMean2);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent1 = this.$refs.meanValue1 as any;
    if (this.textMean1 === '') {
      this.castParameterValue.mean1 = undefined;
    } else if (value1 === this.sliderMean1) {
      this.castParameterValue.mean1 = value1;
    } else if (!this.parameterValue.isSet && !castComponent1.validate(true)) {
      this.textMean1 = '';
    } else if (castComponent1.validate && castComponent1.validate(true)) {
      if (value1 >= this.sliderValue[1]) {
        this.sliderValue = [this.sliderValue[0], value1];
      } else if (value1 <= this.sliderValue[0]) {
        this.sliderValue = [value1, this.sliderValue[1]];
      }
      this.sliderMean1 = value1;
    } else {
      this.textMean1 = this.sliderMean1.toString();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent2 = this.$refs.meanValue2 as any;
    if (this.textMean2 === '') {
      this.castParameterValue.mean2 = undefined;
    } else if (value1 === this.sliderMean2) {
      this.castParameterValue.mean2 = value1;
    } else if (!this.parameterValue.isSet && !castComponent2.validate(true)) {
      this.textMean2 = '';
    } else if (castComponent2.validate && castComponent2.validate(true)) {
      if (value2 >= this.sliderValue[1]) {
        this.sliderValue = [this.sliderValue[0], value2];
      } else if (value2 <= this.sliderValue[0]) {
        this.sliderValue = [value2, this.sliderValue[1]];
      }
      this.sliderMean2 = value2;
    } else {
      this.textMean2 = this.sliderMean2.toString();
    }
  }

  updateOnTextStdChange(): void {
    const value1 = Number(this.textStd1);
    const value2 = Number(this.textStd2);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent1 = this.$refs.stdValue1 as any;
    if (this.textStd1 === '') {
      this.castParameterValue.stdDev1 = undefined;
    } else if (value1 === this.sliderStd1) {
      this.castParameterValue.stdDev1 = value1;
    } else if (!this.parameterValue.isSet && !castComponent1.validate(true)) {
      this.textStd1 = '';
    } else {
      this.textStd1 = this.sliderStd1.toString();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent2 = this.$refs.stdValue2 as any;
    if (this.textStd2 === '') {
      this.castParameterValue.stdDev2 = undefined;
    } else if (value2 === this.sliderStd2) {
      this.castParameterValue.stdDev2 = value2;
    } else if (!this.parameterValue.isSet && !castComponent2.validate(true)) {
      this.textStd2 = '';
    } else {
      this.textStd2 = this.sliderStd2.toString();
    }
  }

  onSliderStopped(values: number[]): void {
    this.$set(this.parameterValue, 'min', values[0]);
    this.$set(this.parameterValue, 'max', values[1]);
  }

  onSliderMean1Stopped(value: number): void {
    this.$set(this.parameterValue, 'mean1', value);
  }

  onSliderStd1Stopped(value: number): void {
    this.$set(this.parameterValue, 'stdDev1', value);
  }

  onSliderMean2Stopped(value: number): void {
    this.$set(this.parameterValue, 'mean2', value);
  }

  onSliderStd2Stopped(value: number): void {
    this.$set(this.parameterValue, 'stdDev2', value);
  }

  @Watch('parameterValue')
  setValues(): void {
    this.ignoreNextValueSliderChange = true;
    this.sliderValue = [this.castParameterValue.min ?? this.min, this.castParameterValue.max ?? this.max];

    this.ignoreNextMeanSliderChange = true;
    this.sliderMean1 = this.castParameterValue.mean1 ?? (this.min + this.max) / 4.0;
    this.ignoreNextMeanSliderChange = true;
    this.sliderMean2 = this.castParameterValue.mean2 ?? (this.min + this.max) / 4.0;

    this.ignoreNextStdSliderChange = true;
    this.sliderStd1 = this.castParameterValue.stdDev ?? (this.max - this.min) / 5.0;
    this.ignoreNextStdSliderChange = true;
    this.sliderStd2 = this.castParameterValue.stdDev2 ?? (this.max - this.min) / 5.0;

    this.textMin = this.castParameterValue.min?.toString() ?? '';
    this.textMax = this.castParameterValue.max?.toString() ?? '';
    this.textMean1 = this.castParameterValue.mean1?.toString() ?? '';
    this.textStd1 = this.castParameterValue.stdDev1?.toString() ?? '';
    this.textMean2 = this.castParameterValue.mean2?.toString() ?? '';
    this.textStd2 = this.castParameterValue.stdDev2?.toString() ?? '';
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
