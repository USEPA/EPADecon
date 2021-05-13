<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" max-width="800">
      <v-card>
        <v-card-title class="headline" v-text="`Run ${realizationNumber} - Summary`"></v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col class="chart">
                <h3 class="text-subtitle-1 mb-2">Cost Breakdown by Element</h3>
                <chart-js-wrapper type="pie" :data="costChartData" :options="options" :plugins="[]" :key="chartKey" />
              </v-col>
              <v-col class="chart">
                <h3 class="text-subtitle-1 mb-2">Workday Breakdown by Element</h3>
                <chart-js-wrapper
                  type="pie"
                  :data="workdayChartData"
                  :options="options"
                  :plugins="[]"
                  :key="chartKey + 1"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="text-body-2 mb-0">${{ resultProvider.formatNumber(totalCost) }}</p>
                <p class="text-subtitle-1">Total Cost</p>
              </v-col>
              <v-col>
                <p class="text-body-2 mb-0">{{ resultProvider.formatNumber(areaContaminated) }} m<sup>2</sup></p>
                <p class="text-subtitle-1">Area Contaminated</p>
              </v-col>
              <v-col>
                <p class="text-body-2 mb-0">{{ resultProvider.formatNumber(totalWorkdays) }}</p>
                <p class="text-subtitle-1">Total Workdays</p>
              </v-col>
              <v-col>
                <p class="text-body-2 mb-0">{{ resultProvider.formatNumber(deconRounds) }}</p>
                <p class="text-subtitle-1">Decontamination Iterations</p>
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
  PositionType,
} from 'battelle-common-vue-charting/src';
import { ChartData } from 'chart.js';
import container from '@/dependencyInjection/config';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import TYPES from '@/dependencyInjection/types';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import PhaseResult from '@/enums/jobs/results/phaseResult';
import store from '@/store';

@Component({ components: { ChartJsWrapper } })
export default class RealizationDetails extends Vue {
  @Prop() realizationNumber!: number;

  @VModel({ default: () => false }) isVisible!: boolean;

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  chartKey = 0;

  results: IJobResultRealization | null = null;

  totalCost = 0;

  areaContaminated = 0;

  totalWorkdays = 0;

  deconRounds = 0;

  options = new DefaultChartOptions();

  @Watch('realizationNumber')
  setValues(): void {
    this.results = store.state.currentJob.results[this.realizationNumber - 1];

    this.totalCost = this.getResult(PhaseResult.TotalCost) ?? 0;
    this.areaContaminated = this.getResult(PhaseResult.AreaContaminated) ?? 0;
    this.totalWorkdays = this.getResult(PhaseResult.Workdays) ?? 0;
    this.deconRounds = this.getResult(PhaseResult.DecontaminationRounds) ?? 0;

    this.chartKey += 2;
  }

  getResult(result: PhaseResult): number | undefined {
    return this.results ? this.resultProvider.getResultValues(this.results, result).reduce((a, b) => a + b) : undefined;
  }

  getResultChartData(result: PhaseResult): ChartData {
    if (!this.results) {
      return new DefaultChartData([]);
    }

    const breakdown = this.resultProvider.getResultPhaseBreakdown(this.results, result);
    const colorProvider = new CycleColorProvider();
    const colors = breakdown.map(() => colorProvider.getNextColor());

    return {
      datasets: [
        {
          data: breakdown.map((p) => p.value),
          backgroundColor: colors,
        },
      ],
      labels: breakdown.map((p) => this.resultProvider.convertCamelToTitleCase(p.phase)),
    };
  }

  initializeChart(): void {
    this.options.legend.position = PositionType.Bottom;
    this.options.legend.fullWidth = false;
    this.options.tooltips.enabled = true;
  }

  get costChartData(): ChartData {
    return this.getResultChartData(PhaseResult.TotalCost);
  }

  get workdayChartData(): ChartData {
    return this.getResultChartData(PhaseResult.Workdays);
  }

  created(): void {
    this.initializeChart();
  }
}
</script>

<style lang="scss" scoped>
.chart {
  height: 400px;
}
</style>
