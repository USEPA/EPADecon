<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" max-width="800">
      <v-card>
        <v-card-title class="headline" v-text="`${title} Details`"></v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col style="height: 400px">
                <chart-js-wrapper type="bar" :data="chartData" :options="options" :plugins="[]" :key="title" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="text-body-2 mb-0">{{ resultProvider.formatNumber(details.mean) }}</p>
                <p class="text-subtitle-1">Mean</p>
              </v-col>
              <v-col>
                <p class="text-body-2 mb-0">{{ resultProvider.formatNumber(details.maximum) }}</p>
                <p class="text-subtitle-1">Maximum</p>
              </v-col>
              <v-col>
                <p class="text-body-2 mb-0">{{ resultProvider.formatNumber(details.minimum) }}</p>
                <p class="text-subtitle-1">Minimum</p>
              </v-col>
              <v-col>
                <p class="text-body-2 mb-0">{{ resultProvider.formatNumber(details.stdDev) }}</p>
                <p class="text-subtitle-1">Standard Deviation</p>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined color="primary darken-1" text @click="isVisible = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue, Watch } from 'vue-property-decorator';
import {
  ChartJsWrapper,
  CycleColorProvider,
  DefaultChartData,
  DefaultChartOptions,
} from 'battelle-common-vue-charting/src';
import { ChartData } from 'chart.js';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import container from '@/dependencyInjection/config';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import TYPES from '@/dependencyInjection/types';
import { range } from 'lodash';

@Component({ components: { ChartJsWrapper } })
export default class ResultDetails extends Vue {
  @Prop() title!: string;

  @Prop() details!: IResultDetails;

  @VModel({ default: () => false }) isVisible!: boolean;

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  options = new DefaultChartOptions();

  numberOfBins = 5;

  chartTicks: number[] = [];

  get chartData(): ChartData {
    if (!this.details) {
      return new DefaultChartData([]);
    }

    const color = new CycleColorProvider().getNextColor();

    // create bins
    const step = (this.details.maximum - this.details.minimum) / this.numberOfBins;
    const bins = step ? range(this.details.minimum, this.details.maximum, step) : [this.details.minimum];

    // put values into bins
    const binVals: number[] = [];
    this.details.values.forEach((v) => {
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
      labels: bins,
      datasets: [
        {
          data: binVals,
          backgroundColor: color,
          barPercentage: 1,
          categoryPercentage: 1,
          borderWidth: 1,
        },
      ],
    };
  }

  @Watch('details')
  onDetailsChanged(): void {
    this.initializeChart();
  }

  @Watch('chartData')
  onChartDataChagned(newValue: ChartData): void {
    this.chartTicks = newValue.labels as number[];
  }

  initializeChart(): void {
    this.options.legend.display = false;

    this.options.tooltips.enabled = true;
    this.options.tooltips.callbacks = {
      title: ([item]) => {
        const index = item.index ?? 0;
        const upper = this.resultProvider.formatNumber(this.chartTicks[index + 1] ?? this.details.maximum);
        const lower = this.resultProvider.formatNumber(this.chartTicks[index]);
        return `${lower} - ${upper}`;
      },
    };

    this.options.scales = {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: this.title,
          },
          ticks: {
            callback: (value: number) => this.resultProvider.formatNumber(value),
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Realizations',
          },
        },
      ],
    };
  }

  created(): void {
    this.initializeChart();
  }
}
</script>

<style></style>
