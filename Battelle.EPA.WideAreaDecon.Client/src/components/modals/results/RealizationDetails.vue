<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" max-width="800">
      <v-card>
        <v-card-title class="headline" v-text="`Run ${realizationNumber} - Summary`"></v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6" sm="12" md="6">
                <h3 class="text-subtitle-1 mb-2">Cost Breakdown by Element</h3>
                <div class="chart">
                  <chart-js-wrapper
                    type="pie"
                    :data="costChartData"
                    :options="chartOptions"
                    :plugins="[]"
                    :key="chartKey"
                    ref="costChart"
                  />
                </div>
              </v-col>
              <v-col cols="6" sm="12" md="6">
                <h3 class="text-subtitle-1 mb-2">Workday Breakdown by Element</h3>
                <div class="chart">
                  <chart-js-wrapper
                    type="pie"
                    :data="workdayChartData"
                    :options="chartOptions"
                    :plugins="[]"
                    :key="chartKey + 1"
                    ref="workdayChart"
                  />
                </div>
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-6">
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
import { ChartJsWrapper, CycleColorProvider, DefaultChartData } from 'battelle-common-vue-charting';
import { ChartData, ChartOptions } from 'chart.js';
import container from '@/dependencyInjection/config';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import TYPES from '@/dependencyInjection/types';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import PhaseResult from '@/enums/jobs/results/phaseResult';
import store from '@/store';
import IChartOptionsProvider from '@/interfaces/providers/IChartOptionsProvider';

@Component({ components: { ChartJsWrapper } })
export default class RealizationDetails extends Vue {
  @Prop() realizationNumber!: number;

  @VModel({ default: () => false }) isVisible!: boolean;

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  private chartOptionsProvider = container.get<IChartOptionsProvider>(TYPES.ChartOptionsProvider);

  chartKey = 0;

  results: IJobResultRealization | null = null;

  disabledClass = 'disabled';

  totalCost = 0;

  areaContaminated = 0;

  totalWorkdays = 0;

  deconRounds = 0;

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

  get costChartData(): ChartData {
    return this.getResultChartData(PhaseResult.PhaseCost);
  }

  get workdayChartData(): ChartData {
    return this.getResultChartData(PhaseResult.Workdays);
  }

  get chartOptions(): ChartOptions {
    const options = this.chartOptionsProvider.getPieOptions();
    if (options.plugins) {
      options.plugins.legend = {
        position: 'bottom',
      };
    }

    return options;
  }
}
</script>

<style lang="scss" scoped>
.chart {
  height: 400px;
}
</style>
