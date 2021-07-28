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
          @showModal="showOptionsModal = true"
          @removeLabel="removeSelectedResult"
          :chartData="chartData"
          :chartType="chartType"
          :chartLabels="selectedResults"
          :details="outputStatistics.x"
        ></results-chart-panel>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <realization-table></realization-table>
    </v-row>

    <chart-options @createChart="setChartData" v-model="showOptionsModal" :selected="selectedResults"></chart-options>
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
import PhaseResult from '@/enums/jobs/results/phaseResult';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import ChartOptions from '@/components/modals/results/ChartOptions.vue';
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

  outputStatistics: { x: IResultDetails | null; y: IResultDetails | null } = { x: null, y: null };

  showOptionsModal = false;

  selectedResults: { x: PhaseResult | null; y: PhaseResult | null } = { x: null, y: null };

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
          categoryPercentage: 0.5,
        },
      ],
    };
  }

  createPieChart(values: number[], label: PhaseResult | null): ChartData {
    const phaseResults: { phase: string; value: number }[] = [];

    if (label) {
      this.results.forEach((r) => {
        const res = this.resultProvider.getResultPhaseBreakdown(r, label);
        res.forEach((p, i) => {
          if (phaseResults[i] === undefined) {
            phaseResults.push(p);
          } else {
            phaseResults[i].value += p.value ?? 0;
          }
        });
      });
    }

    const colorProvider = new CycleColorProvider();
    const colors = phaseResults.map(() => colorProvider.getNextColor());
    const numberRealizations = values.length;
    const labels =
      phaseResults.length > 1
        ? phaseResults.map((p) => this.resultProvider.convertCamelToTitleCase(p.phase))
        : [this.resultProvider.convertCamelToTitleCase(label?.toString() ?? '')];

    return {
      datasets: [
        {
          data: phaseResults.map((p) => p.value / numberRealizations),
          backgroundColor: colors,
        },
      ],
      labels,
    };
  }

  createScatterPlot(xVals: number[], yVals: number[], labels: (PhaseResult | null)[]): ChartData {
    const dataPoints: Point[] = xVals.map((x, i) => {
      return { x, y: yVals[i] };
    });
    const colorProvider = new CycleColorProvider();
    let [xLabel, yLabel] = labels as string[];
    xLabel = this.resultProvider.convertCamelToTitleCase(xLabel);
    yLabel = this.resultProvider.convertCamelToTitleCase(yLabel);

    const scatterDataSet = CreateScatterChartDataset(dataPoints, `${yLabel} vs. ${xLabel}`, colorProvider);
    return new DefaultChartData([scatterDataSet]);
  }

  setChartData({ x, y }: { x: PhaseResult | null; y: PhaseResult | null }): void {
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

  getOutputStatistics(xLabel: PhaseResult | null, yLabel: PhaseResult | null): void {
    const stats: { x: IResultDetails | null; y: IResultDetails | null } = { x: null, y: null };

    if (xLabel) {
      stats.x = this.resultProvider.getResultDetails(this.results, xLabel) ?? null;
      this.$set(this.selectedResults, 'x', xLabel);
    }
    if (yLabel) {
      stats.y = this.resultProvider.getResultDetails(this.results, yLabel) ?? null;
      this.$set(this.selectedResults, 'y', yLabel);
    }

    this.$set(this, 'outputStatistics', stats);
  }

  removeSelectedResult(axis: string): void {
    this.$set(this.selectedResults, axis, null);
    this.setChartData(this.selectedResults);
  }
}
</script>

<style lang="scss" scoped></style>
