<template>
  <v-container>
    <v-row>
      <v-col class="ml-auto mt-3" cols="auto">
        <v-btn color="secondary" @click="$router.push({ name: 'viewResults' })" v-text="'Return to dashboard'"></v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <output-statistics-panel :details="outputStatistics" :results="selectedResults"></output-statistics-panel>
      </v-col>
      <v-col cols="9">
        <results-chart-panel
          @addRun="addRunToTable"
          @showOptions="showOptionsModal = true"
          @removeLabel="removeSelectedResult"
          :chartData="chartData"
          :chartType="chartType"
          :chartLabels="selectedResults"
          :details="outputStatistics.x"
        ></results-chart-panel>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <realization-table ref="realizationTable"></realization-table>
    </v-row>

    <chart-options @createChart="setChartData" v-model="showOptionsModal" ref="options" />
  </v-container>
</template>

<script lang="ts">
import { State } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import { ChartData, Point } from 'chart.js';
import { CycleColorProvider, DefaultChartData, CreateScatterChartDataset } from 'battelle-common-vue-charting';
import Result from '@/enums/jobs/results/result';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import ChartOptions from '@/components/modals/results/ChartOptions.vue';
import IElementBreakdown from '@/interfaces/jobs/results/IElementBreakdown';
import { range } from 'lodash';
import OutputStatisticsPanel from './OutputStatisticsPanel.vue';
import ResultsChartPanel from './ResultsChartPanel.vue';
import RealizationTable from './RealizationTable.vue';

@Component({ components: { ChartOptions, OutputStatisticsPanel, RealizationTable, ResultsChartPanel } })
export default class RealizationSummary extends Vue {
  @State((state) => state.currentJob.results) results!: IJobResultRealization[];

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  chartData: ChartData | null = null;

  chartType = '';

  maxScatterPoints = 5;

  outputStatistics: { x: IResultDetails | null; y: IResultDetails | null } = { x: null, y: null };

  showOptionsModal = false;

  selectedResults: { x: Result | null; y: Result | null } = { x: null, y: null };

  addRunToTable(runNumber: number): void {
    const table = this.$refs.realizationTable as RealizationTable;
    table.runNumber = runNumber;
    table.addRunToTable();
  }

  // eslint-disable-next-line class-methods-use-this
  createHistogram({ values, minimum, maximum }: IResultDetails): ChartData {
    const color = new CycleColorProvider().getNextColor();

    const numberOfBins = 10;

    // create bins
    const step = (maximum - minimum) / numberOfBins;
    const bins = step ? range(minimum, maximum, step) : [minimum];

    // put values into bins
    const binVals: number[] = [];
    values.forEach((v) => {
      let index = bins.findIndex((b, i) => v >= b && v < bins[i + 1]);
      if (index === -1) {
        // value falls into last bin
        index = bins.length - 1;
      }

      if (binVals[index] !== undefined) {
        binVals[index] += 1;
      } else {
        binVals[index] = 1;
      }
    });

    return {
      labels: bins.map((b) => this.resultProvider.formatNumber(b)),
      datasets: [
        {
          label: 'Number of Realizations',
          data: binVals,
          backgroundColor: color,
          barPercentage: 1,
          categoryPercentage: 1,
          borderWidth: 0.5,
        },
      ],
    };
  }

  createPieChart(values: number[], label: Result | null): ChartData {
    const elementResults: IElementBreakdown[] = [];
    const numberRealizations = values.length;
    const colorProvider = new CycleColorProvider();
    const colors: string[] = [];

    if (label) {
      for (let i = 0, l1 = this.results.length; i < l1; i += 1) {
        const res = this.resultProvider.getResultElementBreakdown(this.results[i], label);
        for (let j = 0, l2 = res.length; j < l2; j += 1) {
          if (elementResults[j] === undefined) {
            elementResults.push(res[j]);
            colors.push(colorProvider.getNextColor());
          } else {
            elementResults[j].value += res[j].value ?? 0;
          }
        }
      }
    }

    const labels =
      elementResults.length > 1
        ? elementResults.map((e) => this.resultProvider.convertCamelToTitleCase(e.element))
        : [this.resultProvider.convertCamelToTitleCase(label?.toString() ?? '')];

    return {
      datasets: [
        {
          data: elementResults.map((e) => e.value / numberRealizations),
          backgroundColor: colors,
        },
      ],
      labels,
    };
  }

  createScatterPlot(xVals: number[], yVals: number[], labels: (Result | null)[]): ChartData {
    let xData: number[] = [];
    let yData: number[] = [];
    const { length } = xVals;

    if (length > this.maxScatterPoints) {
      // take subset from random points
      const indices = this.getRandomIndices(xVals);
      xData = new Array(length).fill(undefined);
      yData = [...xData];

      indices.forEach((i) => {
        xData[i] = xVals[i];
        yData[i] = yVals[i];
      });
    } else {
      xData = xVals;
      yData = yVals;
    }

    const dataPoints: Point[] = xData.map((x, i) => {
      return { x, y: yData[i] };
    });
    const colorProvider = new CycleColorProvider();
    let [xLabel, yLabel] = labels as string[];
    xLabel = this.resultProvider.convertCamelToTitleCase(xLabel);
    yLabel = this.resultProvider.convertCamelToTitleCase(yLabel);

    const scatterDataSet = CreateScatterChartDataset(dataPoints, `${yLabel} vs. ${xLabel}`, colorProvider);
    return new DefaultChartData([scatterDataSet]);
  }

  setChartData({ x, y }: { x: Result | null; y: Result | null }): void {
    const xDetails = x ? this.resultProvider.getResultDetails(this.results, x) : null;
    const yDetails = y ? this.resultProvider.getResultDetails(this.results, y) : null;

    if (xDetails && !yDetails) {
      // histogram
      this.chartType = 'bar';
      this.chartData = this.createHistogram(xDetails);
    } else if (!xDetails && yDetails) {
      // pie chart
      this.chartType = 'pie';
      this.chartData = this.createPieChart(yDetails.values, y);
    } else if (xDetails && yDetails) {
      // scatter plot
      this.chartType = 'scatter';
      this.chartData = this.createScatterPlot(xDetails.values, yDetails.values, [x, y]);
    } else {
      this.chartData = null;
    }

    this.getOutputStatistics(x, y);
  }

  getOutputStatistics(xLabel: Result | null, yLabel: Result | null): void {
    const stats: { x: IResultDetails | null; y: IResultDetails | null } = { x: null, y: null };

    if (xLabel) {
      stats.x = this.resultProvider.getResultDetails(this.results, xLabel) ?? null;
    }
    if (yLabel) {
      stats.y = this.resultProvider.getResultDetails(this.results, yLabel) ?? null;
    }

    this.$set(this.selectedResults, 'x', xLabel ?? null);
    this.$set(this.selectedResults, 'y', yLabel ?? null);
    this.$set(this, 'outputStatistics', stats);
  }

  getRandomIndices(array: number[]): number[] {
    const indices: number[] = [];
    const { length } = array;

    for (let i = 0; i < this.maxScatterPoints; i += 1) {
      indices.push(Math.floor(Math.random() * length));
    }

    return indices;
  }

  removeSelectedResult(axis: 'x' | 'y'): void {
    this.$set(this.selectedResults, axis, null);
    (this.$refs.options as ChartOptions).selected[axis] = null;
    this.setChartData(this.selectedResults);
  }
}
</script>

<style lang="scss" scoped></style>
