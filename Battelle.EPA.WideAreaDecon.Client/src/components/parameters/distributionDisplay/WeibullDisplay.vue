<template>
  <v-container :style="vuetifyColorProps()">
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
        <v-slider v-model="sliderK" :max="max" :min="min" :step="KStep" thumb-label @change="onSliderKStopped">
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
            @keydown="onTextLambdaEnterPressed"
            @blur="updateOnTextLambdaChange"
            v-model="textLambda"
            label="Lambda"
            :rules="[validationRules]"
            hide-details="auto"
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
            ref="KValue"
            @keydown="onTextKEnterPressed"
            @blur="updateOnTextKChange"
            v-model="textK"
            label="k"
            :rules="[validationRules]"
            hide-details="auto"
          >
            <template v-slot:append>
              <p class="grey--text">{{ parameterValue.metaData.units }}</p>
            </template>
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-2" outlined tile>
          <scatter-plot-wrapper
            :options="chartOptions"
            :data="chartData"
            :type="'scatter'"
            :width="400"
            :height="150"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import { Key } from 'ts-keycode-enum';
import { max, range } from 'lodash';
import Weibull from '@/implementations/parameter/distribution/Weibull';

import { ChartData, ChartOptions, ChartLegendOptions, ChartDataSets } from 'chart.js';
import {
  DefaultChartData,
  ScatterPlotWrapper,
  DefaultChartOptions,
  ChartPoint2D,
  CycleColorProvider,
  ScatterChartDataset,
  EmptyChartData,
  EmptyChartOptions,
  DefaultChartLegendOptions,
} from 'battelle-common-vue-charting/src/index';

@Component({ components: { ScatterPlotWrapper } })
export default class WeibullDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: Weibull;

  chartData: ChartData = new EmptyChartData();

  baselineChartData: ChartDataSets = new EmptyChartData();

  chartOptions: ChartOptions = new EmptyChartOptions();

  sliderValue = [0, 0];

  sliderLambda = 0;

  sliderK = 0;

  textLambda = '';

  textK = '';

  step = 0.1;

  ignoreNextValueSliderChange = false;

  ignoreNextLambdaSliderChange = false;

  ignoreNextKSliderChange = false;

  get KStep(): number {
    return max([(this.sliderValue[1] - this.sliderValue[0]) / 100, 0.01]) ?? 0.01;
  }

  // eslint-disable-next-line class-methods-use-this
  get min(): number {
    // return 0.0;
    return this.parameterValue.metaData.lowerLimit;
  }

  // eslint-disable-next-line class-methods-use-this
  get max(): number {
    // return 1000.0;
    return this.parameterValue.metaData.upperLimit;
  }

  getChartData(): ChartData {
    const set = this.getChartDataset('Current');
    const chartData = new DefaultChartData([set, this.baselineChartData]);
    return chartData;
  }

  getChartDataset(name: string, colorChoices?: string[]): ChartDataSets {
    const x: number[] = range(0.00001, 2.5, 0.025);
    const points: number[][] = this.parameterValue.pdf(x[0])
      ? x.map((item) => {
          return [item, this.parameterValue.pdf(item)!]; // don't know if there is a better way to do this without the ! operator
        })
      : [[0, 0]];
    const dataPoints = points.map((p) => {
      return new ChartPoint2D(p[0], p[1]);
    });
    const colorProvider: CycleColorProvider = new CycleColorProvider(colorChoices);
    const set: ChartDataSets = new ScatterChartDataset(dataPoints, name, colorProvider);
    set.pointRadius = 0;
    return set;
  }

  setChartOptions(): void {
    this.chartOptions = new DefaultChartOptions();
    // if (this.chartOptions.legend) this.chartOptions.legend.display = false;
  }

  vuetifyColorProps(): unknown {
    return {
      '--primary-color': this.$vuetify.theme.currentTheme.primary,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  validationRules(value: string): boolean | string {
    const num = Number(value);
    if (Number.isNaN(num)) {
      return 'Value must be number!';
    }
    return true;
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
    this.chartData = this.getChartData();
  }

  @Watch('sliderLambda')
  onSliderLambdaChanged(newValue: number): void {
    if (this.ignoreNextLambdaSliderChange) {
      this.ignoreNextLambdaSliderChange = false;
      return;
    }

    this.textLambda = newValue.toString();
    this.parameterValue.lambda = newValue;
    if (newValue < this.sliderValue[0]) {
      this.sliderValue = [newValue, this.sliderValue[1]];
    }
    if (newValue > this.sliderValue[1]) {
      this.sliderValue = [this.sliderValue[0], newValue];
    }
    this.chartData = this.getChartData();
  }

  @Watch('sliderK')
  onSliderKChanged(newValue: number): void {
    if (this.ignoreNextKSliderChange) {
      this.ignoreNextKSliderChange = false;
      return;
    }

    this.textK = newValue.toString();
    this.parameterValue.k = newValue;

    this.chartData = this.getChartData();
  }

  @Watch('parameterValue')
  onParameterChanged(newValue: Weibull): void {
    this.step = this.parameterValue.metaData.step;

    this.ignoreNextValueSliderChange = true;

    this.ignoreNextLambdaSliderChange = true;
    this.sliderLambda = 0;
    this.sliderLambda = newValue.lambda ?? 1;

    this.ignoreNextKSliderChange = true;
    this.sliderK = 1;
    this.sliderK = newValue.k ?? 2;

    this.textLambda = newValue.lambda?.toString() ?? '';
    this.textK = newValue.k?.toString() ?? '';

    this.chartData = this.getChartData();
  }

  onTextLambdaEnterPressed(event: KeyboardEvent): void {
    if (event.keyCode === Key.Enter) {
      this.updateOnTextLambdaChange();
    }
  }

  onTextKEnterPressed(event: KeyboardEvent): void {
    if (event.keyCode === Key.Enter) {
      this.updateOnTextKChange();
    }
  }

  updateOnTextLambdaChange(): void {
    const value = Number(this.textLambda);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.LambdaValue as any;
    if (this.textLambda === '') {
      this.parameterValue.lambda = undefined;
    } else if (value === this.sliderLambda) {
      this.parameterValue.lambda = value;
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
    this.chartData = this.getChartData();
  }

  updateOnTextKChange(): void {
    const value = Number(this.textK);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.KValue as any;
    if (this.textK === '') {
      this.parameterValue.k = undefined;
    } else if (value === this.sliderK) {
      this.parameterValue.k = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textK = '';
    } else {
      this.textK = this.sliderK.toString();
    }
    this.chartData = this.getChartData();
  }

  onSliderLambdaStopped(value: number): void {
    this.parameterValue.lambda = value;
  }

  onSliderKStopped(value: number): void {
    this.parameterValue.k = value;
  }

  setValues(): void {
    this.ignoreNextLambdaSliderChange = true;
    this.sliderLambda = 0;
    this.sliderLambda = this.parameterValue.lambda ?? 1;

    this.ignoreNextKSliderChange = true;
    this.sliderK = 2;
    this.sliderK = this.parameterValue.k ?? 1;

    this.step = this.parameterValue.metaData.step;
    this.textLambda = this.parameterValue.lambda?.toString() ?? '';
    this.textK = this.parameterValue.k?.toString() ?? '';

    this.baselineChartData = this.getChartDataset('Baseline', ['#FF7F50']);
    this.chartData = this.getChartData();
    this.setChartOptions();
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
