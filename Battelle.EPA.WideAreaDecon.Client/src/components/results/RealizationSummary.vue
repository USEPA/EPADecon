<template>
  <v-container>
    <v-row>
      <v-col class="ml-auto mt-3" cols="auto">
        <v-btn color="secondary" @click="$router.push({ name: 'viewResults' })" v-text="'Return to dashboard'"></v-btn>
      </v-col>
    </v-row>
    <v-row id="chart-row">
      <v-col cols="3">
        <output-statistics-panel :details="outputStatistics" :results="selectedResults"></output-statistics-panel>
      </v-col>
      <v-col cols="9">
        <results-chart-panel
          @addRun="addRunToTable"
          @showOptions="showChartOptions"
          @removeXLabel="removeXLabel"
          @removeYLabel="removeYLabel"
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

    <chart-options @createChart="updateSelections" v-model="showOptionsModal" ref="options" />
  </v-container>
</template>

<script lang="ts">
import { State } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import { ChartData, ChartDataset, Point } from 'chart.js';
import { nameof } from 'ts-simple-nameof';
import ICurrentJob from '@/interfaces/store/jobs/ICurrentJob';
import { StoreNames } from '@/constants/store/store';
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
  @State(nameof<ICurrentJob>((s) => s.currentJob.results), { namespace: StoreNames.JOBS })
  results!: IJobResultRealization[];

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  chartData: ChartData | null = null;

  chartType: 'bar' | 'pie' | 'scatter' | '' = '';

  maxScatterPoints = 1000;

  outputStatistics: { x: IResultDetails | null; y: IResultDetails[] } = {
    x: null,
    y: [],
  };

  savedLabelColors: Partial<Record<Result, string>> = {};

  showOptionsModal = false;

  selectedResults: ChartOptions['selected'] = { x: null, y: [] };

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

  createScatterPlot(xVals: number[], yVals: number[][], labels: Result[]): ChartData {
    const datasets: ChartDataset[] = [];
    const colorProvider = new CycleColorProvider();

    const indices = xVals.length > this.maxScatterPoints ? this.getRandomIndices(xVals) : range(0, xVals.length);
    const xData = indices.map((i) => xVals[i]);
    const xLabel = this.resultProvider.convertCamelToTitleCase(labels[0] as string);
    const yLabels = labels.slice(1);

    yVals.forEach((series, seriesIndex) => {
      const yData = indices.map((i) => series[i]);
      const dataPoints: Point[] = xData.map((x, i) => ({ x, y: yData[i] }));

      const res = yLabels[seriesIndex];
      const yLabel = this.resultProvider.convertCamelToTitleCase(res);
      // use prev color if it exists
      const prev = this.savedLabelColors[res];

      const dataset = CreateScatterChartDataset(
        dataPoints,
        `${yLabel} vs ${xLabel}`,
        colorProvider,
        undefined,
        prev,
        prev,
      );

      datasets.push(dataset);
    });

    return new DefaultChartData(datasets);
  }

  setChartData({ x, y }: RealizationSummary['selectedResults']): void {
    const xDetails = x ? this.resultProvider.getResultDetails(this.results, x) : null;
    const yDetails = y.map((r) => this.resultProvider.getResultDetails(this.results, r)?.values ?? []);

    if (xDetails && !yDetails.length) {
      // histogram
      this.chartType = 'bar';
      this.chartData = this.createHistogram(xDetails);
    } else if (!xDetails && yDetails.length) {
      // pie chart
      this.chartType = 'pie';
      this.chartData = this.createPieChart(yDetails[0], y[0]);
    } else if (xDetails && yDetails.length) {
      // scatter plot
      this.chartType = 'scatter';
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.chartData = this.createScatterPlot(xDetails.values, yDetails, [x!, ...y]);
    } else {
      this.chartData = null;
    }

    this.getOutputStatistics(x, y);

    this.$set(this.selectedResults, 'x', x ? JSON.parse(JSON.stringify(x)) : null);
    this.$set(this.selectedResults, 'y', [...(y ?? [])]);
  }

  showChartOptions(): void {
    const options = this.$refs.options as ChartOptions;
    options.selected = { ...this.selectedResults };

    this.showOptionsModal = true;
  }

  updateSelections(selected: ChartOptions['selected']): void {
    this.savedLabelColors = {};
    this.setChartData(selected);
  }

  getOutputStatistics(x: Result | null, y: Result[]): void {
    const stats: this['outputStatistics'] = { x: null, y: [] };

    if (x) {
      stats.x = this.resultProvider.getResultDetails(this.results, x) ?? null;
    }
    if (y) {
      stats.y = y
        .map((r) => this.resultProvider.getResultDetails(this.results, r))
        .filter((d) => d) as IResultDetails[];
    }

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

  removeXLabel(): void {
    this.$set(this.selectedResults, 'x', null);
    (this.$refs.options as ChartOptions).selected.x = null;

    if (this.selectedResults.y.length > 1) {
      this.selectedResults.y.splice(0);
    }

    this.setChartData(this.selectedResults);
  }

  removeYLabel(yLabelIndex: number): void {
    // save colors
    this.savedLabelColors = this.selectedResults.y.reduce((prev, cur, i) => {
      return i === yLabelIndex ? prev : { ...prev, [cur]: this.chartData?.datasets[i].backgroundColor as string };
    }, {});

    this.selectedResults.y.splice(yLabelIndex, 1);
    this.setChartData(this.selectedResults);
  }
}
</script>

<style lang="scss" scoped>
#chart-row {
  min-height: 630px;
}
</style>
