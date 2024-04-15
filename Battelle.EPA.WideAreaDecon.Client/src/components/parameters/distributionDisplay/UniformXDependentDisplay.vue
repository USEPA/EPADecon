<template>
  <v-container class="mb-5">
    <v-row>
      <v-col align="center">
        <v-btn :disabled="disableAddButton" @click="addPoint">Add Point</v-btn>
      </v-col>
      <v-col align="center">
        <v-btn-toggle
          @change="updateSelectedVariable"
          v-model="selectedSetName"
          dense
          mandatory
          background-color="primary"
        >
          <v-btn v-for="set in variableSets" :key="set.name" :value="set.name">{{ set.name }}</v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <v-row v-if="displayChart" style="width: 100%; height: 400px">
      <scatter-plot-wrapper
        :options="chartOptions"
        :data="chartData"
        type="scatter"
        :width="400"
        :height="150"
        ref="chart"
      />
    </v-row>

    <v-row>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field
            type="number"
            disabled
            v-model.number="selectedSet.points[selectedIndex]"
            :label="selectedSetName"
            hide-details="auto"
          />
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field
            @input="updateOnTextChange($event, 'min', selectedSet.indices[selectedIndex])"
            :rules="[validationRulesMin]"
            :disabled="!pointSelected || !showDistribution[1]"
            type="number"
            :value="selectedSet.mins[selectedIndex]"
            :label="`Min ${parameterValue.metaData.name}`"
            hide-details="auto"
          />
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field
            @input="updateOnTextChange($event, 'max', selectedSet.indices[selectedIndex])"
            :rules="[validationRulesMax]"
            :disabled="!pointSelected || !showDistribution[1]"
            type="number"
            :value="selectedSet.maxs[selectedIndex]"
            :label="`Max ${parameterValue.metaData.name}`"
            hide-details="auto"
          />
        </v-card>
      </v-col>
      <v-col>
        <v-btn
          :disabled="
            selectedSet.points.length <= 2 ||
            selectedIndex <= 0 ||
            selectedIndex === selectedSet.points.length - 1 ||
            !showDistribution[1]
          "
          @click="removePoint(selectedSet.indices[selectedIndex])"
        >
          Remove Point
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import UniformXDependent from '@/implementations/parameter/distribution/UniformXDependent';
import {
  ScatterPlotWrapper,
  CycleColorProvider,
  CreateScatterChartDataset,
  DefaultChartData,
} from 'battelle-common-vue-charting';
import { ActiveElement, ChartDataset, ChartEvent, LegendItem, Point } from 'chart.js';
import container from '@/dependencyInjection/config';
import IChartOptionsProvider from '@/interfaces/providers/IChartOptionsProvider';
import TYPES from '@/dependencyInjection/types';
import IChartJsWrapper from '@/interfaces/component/IChartJsWrapper';
import { State } from 'vuex-class';
import { nameof } from 'ts-simple-nameof';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import { StoreNames } from '@/constants/store/store';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import EnumeratedParameter from '@/implementations/parameter/list/enumeratedParameter';
import { Context } from 'chartjs-plugin-datalabels';

@Component({ components: { ScatterPlotWrapper } })
export default class UniformXDependentDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: UniformXDependent;

  @State(nameof<IParameterSelection>((s) => s.currentSelectedParameter), { namespace: StoreNames.PARAMETER_SELECTION })
  scenarioParameters!: ParameterWrapper;

  private chartOptionsProvider = container.get<IChartOptionsProvider>(TYPES.ChartOptionsProvider);

  key = this.$vnode.key as string;

  baseline!: UniformXDependent;

  selectedIndex = -1;

  chartOptions = this.chartOptionsProvider.getDefaultOptions();

  xValues: number[] = [];

  yMaxValues: number[] = [];

  yMinValues: number[] = [];

  dependentVariables: string[] = [];

  selectedSetName = '';

  /** First element is baseline, second is current */
  showDistribution: boolean[] = [true, true];

  get pointSelected(): boolean {
    return this.selectedIndex !== -1;
  }

  get disableAddButton(): boolean {
    return this.selectedSet.points.length >= 6 || !this.showDistribution[1];
  }

  get variableSets(): {
    name: string;
    indices: number[];
    points: number[];
    maxs: number[];
    mins: number[];
  }[] {
    const uniqueVariables = [...new Set(this.dependentVariables)];
    const sets = uniqueVariables.map((name) => {
      const indices: number[] = [];
      const points: number[] = [];
      const mins: number[] = [];
      const maxs: number[] = [];

      return {
        name,
        indices,
        points,
        mins,
        maxs,
      };
    });

    // group points and indices with sets
    this.xValues.forEach((x, i) => {
      const currentSet = this.dependentVariables ? this.dependentVariables[i] : undefined;
      if (currentSet !== undefined) {
        const setIndex = sets.map((set) => set.name).indexOf(currentSet);
        sets[setIndex].points.push(x);
        sets[setIndex].indices.push(i);
        sets[setIndex].mins.push(this.yMinValues[i]);
        sets[setIndex].maxs.push(this.yMaxValues[i]);
      }
    });

    return sets;
  }

  get baselineSets(): {
    name: string;
    indices: number[];
    points: number[];
    maxs: number[];
    mins: number[];
  }[] {
    const uniqueVariables = [...new Set(this.baseline.dependentVariable)];
    const sets = uniqueVariables.map((name) => {
      const indices: number[] = [];
      const points: number[] = [];
      const mins: number[] = [];
      const maxs: number[] = [];

      return {
        name,
        indices,
        points,
        mins,
        maxs,
      };
    });

    // group points and indices with sets
    if (this.baseline.xValues !== undefined) {
      this.baseline.xValues.forEach((x, i) => {
        const currentSet = this.baseline.dependentVariable ? this.baseline.dependentVariable[i] : undefined;
        if (
          currentSet !== undefined &&
          this.baseline.yMinimumValues !== undefined &&
          this.baseline.yMaximumValues !== undefined
        ) {
          const setIndex = sets.map((set) => set.name).indexOf(currentSet);
          sets[setIndex].points.push(x);
          sets[setIndex].indices.push(i);
          sets[setIndex].mins.push(this.baseline.yMinimumValues[i]);
          sets[setIndex].maxs.push(this.baseline.yMaximumValues[i]);
        }
      });
    }

    return sets;
  }

  get selectedSet(): {
    name: string;
    indices: number[];
    points: number[];
    maxs: number[];
    mins: number[];
  } {
    return this.variableSets.filter((set) => set.name === this.selectedSetName)[0];
  }

  get min(): number {
    return Math.min(...this.selectedSet.points);
  }

  get max(): number {
    return Math.max(...this.selectedSet.points);
  }

  get displayChart(): boolean {
    return this.selectedSet && this.yMinValues.length > 0 && this.yMaxValues.length > 0;
  }

  get chartData(): DefaultChartData {
    const dataSets: ChartDataset[] = [];
    const colorProvider = new CycleColorProvider();
    const baselineColor = colorProvider.getNextColor();
    const currentColor = colorProvider.getNextColor();

    const baselineSet = this.baselineSets.filter((set) => set.name === this.selectedSetName)[0];

    const baselineMins: Point[] = baselineSet.points.map((x, i) => {
      return { x, y: baselineSet.mins[i] };
    });
    const baselineMaxs: Point[] = baselineSet.points.map((x, i) => {
      return { x, y: baselineSet.maxs[i] };
    });

    if (baselineMins.length) {
      // dataset label will be hidden in chart legend
      const baselineMinScatter = CreateScatterChartDataset(
        baselineMins,
        'Min',
        colorProvider,
        undefined,
        baselineColor,
        baselineColor,
      );
      baselineMinScatter.hidden = !this.showDistribution[0];
      baselineMinScatter.backgroundColor = (context: Context) => this.markSelectedPoint(context, baselineColor);
      dataSets.push(baselineMinScatter);
    }

    if (baselineMaxs.length) {
      const baselineMaxScatter = CreateScatterChartDataset(
        baselineMaxs,
        'Baseline',
        colorProvider,
        undefined,
        baselineColor,
        baselineColor,
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (baselineMaxScatter as any).fill = '-1';
      baselineMaxScatter.hidden = !this.showDistribution[0];
      baselineMaxScatter.backgroundColor = (context: Context) => this.markSelectedPoint(context, baselineColor);
      dataSets.push(baselineMaxScatter);
    }

    const selectedXValues = this.selectedSet.points.sort((a, b) => a - b);

    const currentMins: Point[] = selectedXValues.map((x, i) => {
      return { x, y: this.selectedSet.mins[i] };
    });
    const currentMaxs: Point[] = selectedXValues.map((x, i) => {
      return { x, y: this.selectedSet.maxs[i] };
    });

    if (currentMins.length) {
      // dataset label will be hidden in chart legend
      const minScatter = CreateScatterChartDataset(
        currentMins,
        'Min',
        colorProvider,
        undefined,
        currentColor,
        currentColor,
      );
      minScatter.hidden = !this.showDistribution[1];
      minScatter.backgroundColor = (context: Context) => this.markSelectedPoint(context, currentColor);
      dataSets.push(minScatter);
    }

    if (currentMaxs.length) {
      const maxScatter = CreateScatterChartDataset(
        currentMaxs,
        'Current',
        colorProvider,
        undefined,
        currentColor,
        currentColor,
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (maxScatter as any).fill = '-1';
      maxScatter.hidden = !this.showDistribution[1];
      maxScatter.backgroundColor = (context: Context) => this.markSelectedPoint(context, currentColor);
      dataSets.push(maxScatter);
    }

    return new DefaultChartData(dataSets);
  }

  addPoint(): void {
    if (this.selectedSet.points.length >= 6) {
      return;
    }
    // Insert new point at median of existing points
    const index = Math.floor(this.selectedSet.points.length / 2);

    // Choose point halfway between median points
    const point = (this.selectedSet.points[index - 1] + this.selectedSet.points[index]) / 2;

    // Interpolate to choose efficacy
    const minEfficacy = (this.selectedSet.mins[index - 1] + this.selectedSet.mins[index]) / 2;
    const maxEfficacy = (this.selectedSet.maxs[index - 1] + this.selectedSet.maxs[index]) / 2;

    this.dependentVariables.splice(this.selectedSet.indices[index], 0, this.selectedSetName);
    this.xValues.splice(this.selectedSet.indices[index], 0, point);
    this.yMinValues.splice(this.selectedSet.indices[index], 0, minEfficacy);
    this.yMaxValues.splice(this.selectedSet.indices[index], 0, maxEfficacy);

    if (this.showDistribution[1]) {
      // select new point
      this.selectedIndex = index;
    }
  }

  removePoint(index: number): void {
    if (this.selectedSet.points.length <= 2) {
      return;
    }

    // Remove point
    this.dependentVariables.splice(index, 1);
    this.xValues.splice(index, 1);
    this.yMinValues.splice(index, 1);
    this.yMaxValues.splice(index, 1);

    this.selectedIndex = -1;
  }

  updateOnTextChange(value: string, maxOrMin: string, index: number): void {
    if (index === -1) {
      return;
    }

    const newValue = Number(value);
    if (maxOrMin === 'max') {
      this.yMaxValues.splice(index, 1, newValue);
    } else if (maxOrMin === 'min') {
      this.yMinValues.splice(index, 1, newValue);
    }
  }

  updateSelectedVariable(setName: string): void {
    this.$set(this.parameterValue, 'selectedVariable', setName);
    this.selectedIndex = -1;
  }

  validationRulesMin(value: number): boolean | string {
    if (value > this.yMaxValues[this.selectedSet.indices[this.selectedIndex]]) {
      return `Value must be less than or equal to max: ${
        this.yMaxValues[this.selectedSet.indices[this.selectedIndex]]
      }`;
    }
    return true;
  }

  validationRulesMax(value: number): boolean | string {
    if (value < this.yMinValues[this.selectedSet.indices[this.selectedIndex]]) {
      return `Value must be greater than or equal to min: ${
        this.yMinValues[this.selectedSet.indices[this.selectedIndex]]
      }`;
    }
    return true;
  }

  onHover(_: ChartEvent, elements: ActiveElement[]): void {
    if (elements.length !== 0) {
      this.selectedIndex = Math.max(...elements.map((e) => e.index));
    }
  }

  onClick(_: ChartEvent, elements: ActiveElement[]): void {
    if (elements.length === 0) {
      this.selectedIndex = -1;
    }
  }

  // adapted from mawir's answer on Stack Overflow: https://stackoverflow.com/a/59716739
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  legendOnClick(_: ChartEvent, legendItem: LegendItem): void {
    const index = legendItem.datasetIndex;
    if (index !== undefined) {
      const { chart } = (this.$refs.chart as Vue).$children[0] as IChartJsWrapper;
      const maxMeta = chart.getDatasetMeta(index);
      const minMeta = chart.getDatasetMeta(index - 1);

      const distIndex = Math.floor(0.5 * index);

      const hidden = this.showDistribution[distIndex];
      this.showDistribution.splice(distIndex, 1, !hidden);

      minMeta.hidden = hidden;
      maxMeta.hidden = hidden;

      if (distIndex == 1) {
        this.selectedIndex = -1;
      }

      chart.update();
    }
  }

  markSelectedPoint(context: Context, defaultColor: string): string | undefined {
    const { chartArea } = context.chart;
    if (!chartArea) {
      return;
    }

    const darkerColor = defaultColor.replace(/\d+\.*\d*(?=\))/, '1.0');
    return context.dataIndex === this.selectedIndex ? darkerColor : defaultColor;
  }

  @Watch(nameof<UniformXDependentDisplay>((d) => d.selectedIndex))
  onSelectedIndexChanged(): void {
    const { chart } = (this.$refs.chart as Vue).$children[0] as IChartJsWrapper;
    chart.update();
  }

  @Watch('parameterValue')
  setValues(): void {
    if (this.key) {
      // get baseline
      this.baseline = (this.scenarioParameters.baseline as EnumeratedParameter).values[this.key] as UniformXDependent;
    }
    this.xValues = this.parameterValue.xValues ?? [];
    this.yMinValues = this.parameterValue.yMinimumValues ?? [];
    this.yMaxValues = this.parameterValue.yMaximumValues ?? [];
    this.dependentVariables = this.parameterValue.dependentVariable ?? [];

    // update chart legend
    this.chartOptions.plugins = {
      legend: {
        labels: {
          filter: (item) => !item.text?.includes('Min'),
        },
        onClick: this.legendOnClick,
      },
      datalabels: {
        display: false,
      },
    };

    // set chart event callbacks
    this.chartOptions.onClick = this.onClick;
    this.chartOptions.onHover = this.onHover;

    this.chartOptions.interaction = {
      mode: 'x',
    };

    this.selectedSetName = this.parameterValue.selectedVariable;
    this.showDistribution = [true, true];
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
