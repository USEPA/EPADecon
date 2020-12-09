<template>
  <v-container :style="vuetifyColorProps()">
    <v-row>
      <v-col>
        <v-slider v-model="sliderX" :max="max" :min="min" :step="step" thumb-label>
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
      <v-col align="center">
        <v-btn-toggle dense background-color="primary" multiple>
          <v-btn @click="toggleLoading">Loading </v-btn>
          <v-btn @click="toggleTemp">Temp </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-card flat class="pa-5" tile width="100%" height="400">
      <scatter-plot-wrapper :options="chartOptions" :data="exampleData" :type="'scatter'" :width="400" :height="150" />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
// import { Uniform } from 'battelle-common-typescript-external-rmath';
import { UniformDistribution } from 'battelle-common-typescript-statistics';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import UniformXDependent from '@/implementations/parameter/distribution/UniformXDependent';
import { Key } from 'ts-keycode-enum';
import {
  ScatterPlotWrapper,
  ChartPoint2D,
  CycleColorProvider,
  ScatterChartDataset,
  ScatterChartDatasetDefaultSettings,
  DefaultChartOptions,
  DefaultChartData,
} from 'battelle-common-vue-charting/src';

@Component({ components: { ScatterPlotWrapper } })
export default class UniformXDependentDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: UniformXDependent;

  min = 2;

  max = 9;

  step = 0.05;

  sliderX = this.min;

  chartOptions = new DefaultChartOptions();

  loading = false;

  temp = false;

  get exampleData() {
    const x = [this.min, 4, 5, 6, this.max];
    const ymin = [1, 4, 0.6, 0.8, 1];
    const ymax = [1, 8, 10, 7, 5];
    const colorProvider = new CycleColorProvider();
    const mins = x.map((v, i) => {
      return new ChartPoint2D(v, ymin[i]);
    });
    mins.push(new ChartPoint2D(x[x.length - 1], ymax[ymax.length - 1]));
    const maxs = x.map((v, i) => {
      return new ChartPoint2D(v, ymax[i]);
    });
    const minScatter = new ScatterChartDataset(mins, 'Example Mins', colorProvider);
    const maxScatter = new ScatterChartDataset(maxs, 'Example Maxs', colorProvider);

    const min = this.interpolate(ymin, x, this.sliderX);
    const max = this.interpolate(ymax, x, this.sliderX);
    // let uGen = new UniformDistribution(min, max);
    // let uGen = Uniform();
    // don't we need a number generated between min and max?
    // just using half way for now
    const currentValue = (min + max) / 2;
    const currentChartPoint = new ChartPoint2D(this.sliderX, currentValue);
    const currentScatterPoint = new ScatterChartDataset([currentChartPoint], 'Current', colorProvider);
    return new DefaultChartData([maxScatter, minScatter, currentScatterPoint]);
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["interpolate"] }] */
  interpolate(Y: number[], X: number[], val: number): number {
    let minIndex = 0;
    let maxIndex = X.length - 1;
    // there has got to be a better way to loop through X
    for (let i = 0; i < X.length; ) {
      if (X[i] <= val) {
        minIndex = i;
      } else if (X[i] >= val) {
        maxIndex = i;
        break;
      }
      i += 1; // eslint doesn't like the i++
    }
    const slope = (Y[maxIndex] - Y[minIndex]) / (X[maxIndex] - X[minIndex]);
    const yDelta = slope * (val - X[minIndex]);
    return yDelta + Y[minIndex];
  }

  toggleLoading(): void {
    this.loading = !this.loading;
  }

  toggleTemp(): void {
    this.temp = !this.temp;
  }

  vuetifyColorProps(): unknown {
    return {
      '--primary-color': this.$vuetify.theme.currentTheme.primary,
    };
  }
}
</script>

<style scoped lang="scss"></style>
