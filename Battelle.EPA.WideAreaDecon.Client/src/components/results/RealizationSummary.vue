<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <output-statistics-panel :details="outputStatistics" :results="selectedResults" />
      </v-col>
      <v-col>
        <results-chart-panel @showModal="showModal = true" :chartData="chartData" :chartType="chartType" />
      </v-col>
    </v-row>

    <!-- TODO MAKE OWN COMPONENT -->
    <v-row>
      <v-col>
        <v-card>
          <v-row dense>
            <v-col cols="auto" class="mr-auto">
              <v-card-title v-text="'Realization Comparison'" />
            </v-col>

            <v-col style="margin-top: 7px" cols="2">
              <v-select
                label="Building"
                :items="['All', ...locations]"
                v-model="selectedLocation"
                outlined
                hide-details="auto"
              ></v-select>
            </v-col>

            <v-col style="margin-top: 7px" cols="2" class="d-inline-flex">
              <v-text-field
                label="Run Number"
                v-model.number="runNumber"
                type="number"
                :rules="[validationRulesRunNumber]"
                hide-details="auto"
                outlined
              ></v-text-field>

              <v-btn
                height="45"
                color="secondary"
                @click="addRunToTable"
                :disabled="validationRulesRunNumber(runNumber) !== true"
              >
                View
              </v-btn>
            </v-col>
          </v-row>

          <v-divider color="grey"></v-divider>

          <v-simple-table v-if="displayedRunNumbers.length" dense class="overflow-x-auto">
            <template v-if="selectedLocation !== 'All'" v-slot:default>
              <thead>
                <tr>
                  <th></th>
                  <th class="text-right text-body-1" v-for="runNumber in displayedRunNumbers" :key="runNumber">
                    Run {{ runNumber }}
                    <v-icon class="ml-1" small @click="removeRunFromTable(runNumber)">mdi-close-circle</v-icon>

                    <v-btn class="d-block ml-auto" x-small>Summary</v-btn>
                  </th>
                </tr>
              </thead>

              <tbody v-for="(phaseResult, phaseName) in results[0].Outdoor" :key="phaseName">
                <tr>
                  <td class="text-subtitle-1 font-weight-medium">
                    {{ resultProvider.convertCamelToTitleCase(phaseName) }}
                  </td>
                  <td :colspan="displayedRunNumbers.length"></td>
                </tr>

                <tr v-for="(_, result) in phaseResult" :key="result">
                  <td class="pl-8">{{ resultProvider.convertCamelToTitleCase(result) }}</td>

                  <td class="text-right" v-for="runNumber in displayedRunNumbers" :key="runNumber">
                    {{ getLocationResults(runNumber)[phaseName][result] }}
                  </td>
                </tr>
              </tbody>
            </template>

            <template v-else v-slot:default>
              <thead>
                <tr>
                  <th></th>
                  <th
                    class="text-center text-body-1"
                    :colspan="locations.length - 1"
                    v-for="runNumber in displayedRunNumbers"
                    :key="runNumber"
                  >
                    Run {{ runNumber }}
                    <v-icon class="ml-1" small @click="removeRunFromTable(runNumber)">mdi-close-circle</v-icon>
                  </th>
                </tr>

                <tr>
                  <th></th>
                  <th
                    class="text-right text-body-1"
                    v-for="(location, i) in tableLocations"
                    :key="`${location} - ${i}`"
                  >
                    {{ location }}
                  </th>
                </tr>
              </thead>

              <tbody v-for="(phaseResult, phaseName) in results[0].Outdoor" :key="phaseName">
                <tr>
                  <td class="text-subtitle-1 font-weight-medium">
                    {{ resultProvider.convertCamelToTitleCase(phaseName) }}
                  </td>
                  <td :colspan="locations.length * displayedRunNumbers.length"></td>
                </tr>

                <tr v-for="(_, result) in phaseResult" :key="result">
                  <td>{{ resultProvider.convertCamelToTitleCase(result) }}</td>

                  <td class="text-right" v-for="(location, i) in tableLocations" :key="`${location} - ${i}`">
                    {{ getLocationResults(calculateRunNumber(i), location)[phaseName][result] }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <v-card-text v-else>Please select at least one realization to display a summary for</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <chart-options @createChart="getChartData" v-model="showModal" />
  </v-container>
</template>

<script lang="ts">
import { State } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import IPhaseResultSet from '@/interfaces/jobs/results/IPhaseResultSet';
import BuildingCategory from '@/enums/parameter/buildingCategory';
import { ChartData } from 'chart.js';
import {
  ChartPoint2D,
  CycleColorProvider,
  DefaultChartData,
  ScatterChartDataset,
} from 'battelle-common-vue-charting/src';
import mockResults from '@/dataMocks/mockResults';
import PhaseResult from '@/enums/jobs/results/phaseResult';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import ChartOptions from '@/components/modals/results/ChartOptions.vue';
import OutputStatisticsPanel from './OutputStatisticsPanel.vue';
import ResultsChartPanel from './ResultsChartPanel.vue';

@Component({ components: { ChartOptions, OutputStatisticsPanel, ResultsChartPanel } })
export default class RealizationSummary extends Vue {
  // @State((state) => state.currentJob.results) results!: IJobResultRealization[];
  results = mockResults;

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  // get testDetails(): (IResultDetails | undefined)[] {
  //   return [
  //     this.resultProvider.getResultDetails(this.results, PhaseResult.Workdays),
  //     this.resultProvider.getResultDetails(this.results, PhaseResult.DecontaminationRounds),
  //   ];
  // }

  // testResults = ['Workdays', 'Decon Rounds'];
  chartData: ChartData | ScatterChartDataset | null = null;

  chartType = '';

  outputStatistics: (IResultDetails | undefined)[] = [];

  showModal = false;

  runNumber = 1;

  displayedRunNumbers: number[] = [];

  selectedLocation = 'All';

  selectedResults: string[] = [];

  get locations(): string[] {
    const outUnd = Object.keys(this.results[0]).splice(1);
    return [...Object.keys(this.results[0].Indoor).map((l) => `${l} Building`), ...outUnd];
  }

  get tableLocations(): string[] {
    const { length } = this.displayedRunNumbers;
    return [...Array(length)].flatMap(() => this.locations);
  }

  addRunToTable(): void {
    const run = this.resultProvider.getRealizationResults(this.results, this.runNumber);
    if (run !== undefined && !this.displayedRunNumbers.includes(this.runNumber)) {
      this.displayedRunNumbers.push(this.runNumber);
    }
  }

  calculateRunNumber(index: number): number {
    const { length } = this.locations;
    return Math.floor((index + length) / length);
  }

  // createHistogram(values: number[], label: PhaseResult): ChartData {}

  // createPieChart(values: number[], label: PhaseResult): ChartData {
  // }

  createScatterPlot(xVals: number[], yVals: number[], labels: PhaseResult[]): ChartData {
    const dataPoints = xVals.map((x, i) => new ChartPoint2D(x, yVals[i]));
    const colorProvider = new CycleColorProvider();
    let [xLabel, yLabel] = labels as string[];
    xLabel = this.resultProvider.convertCamelToTitleCase(xLabel);
    yLabel = this.resultProvider.convertCamelToTitleCase(yLabel);

    const scatterDataSet = new ScatterChartDataset(dataPoints, `${yLabel} vs. ${xLabel}`, colorProvider);
    return new DefaultChartData([scatterDataSet]);
  }

  getChartData([xAxis, yAxis]: [PhaseResult, PhaseResult]): void {
    const xVals = xAxis ? this.resultProvider.getResultDetails(this.results, xAxis)?.values : null;
    const yVals = yAxis ? this.resultProvider.getResultDetails(this.results, yAxis)?.values : null;

    if (xVals && !yVals) {
      // histogram
      this.chartType = 'bar';
    } else if (!xVals && yVals) {
      // pie chart
      this.chartType = 'pie';
    } else if (xVals && yVals) {
      // scatter plot
      this.chartType = 'scatter';
      const scatterPlot = this.createScatterPlot(xVals, yVals, [xAxis, yAxis]);
      this.$set(this, 'chartData', scatterPlot);
    }

    this.getOutputStatistics(xAxis, yAxis);
  }

  getLocationResults(runNumber: number, location?: string): IPhaseResultSet {
    const run = this.resultProvider.getRealizationResults(this.results, runNumber);
    const selectedLocation = (location !== undefined ? location : this.selectedLocation).replace(/ Building$/, '');
    const isIndoor = Object.keys(BuildingCategory).includes(selectedLocation);
    return isIndoor ? run.Indoor[selectedLocation] : (run[selectedLocation] as IPhaseResultSet);
  }

  getOutputStatistics(xLabel: PhaseResult | null, yLabel: PhaseResult | null): void {
    const stats: (IResultDetails | undefined)[] = [];
    this.selectedResults.splice(0);

    if (xLabel) {
      stats.push(this.resultProvider.getResultDetails(this.results, xLabel));
      this.selectedResults.push(xLabel);
    }
    if (yLabel && yLabel !== xLabel) {
      stats.push(this.resultProvider.getResultDetails(this.results, yLabel));
      if (yLabel !== xLabel) {
        this.selectedResults.push(yLabel);
      }
    }

    this.$set(this, 'outputStatistics', stats);
  }

  removeRunFromTable(runNumber: number): void {
    const index = this.displayedRunNumbers.indexOf(runNumber);
    this.displayedRunNumbers.splice(index, 1);
  }

  // eslint-disable-next-line class-methods-use-this
  validationRulesRunNumber(runNumber: number): boolean | string {
    if (`${runNumber}`.length === 0) {
      return 'Value is required';
    }
    if (runNumber <= 0) {
      return 'Value must be greater than 0';
    }
    if (runNumber % 1 !== 0) {
      return 'Value must be a whole number';
    }
    return true;
  }
}
</script>

<style lang="scss" scoped>
.v-data-table__wrapper > table {
  position: relative;

  & > thead > tr > th:first-child {
    width: 250px;
  }

  & > tbody > tr > td:first-child {
    left: 0;
    position: sticky;
    background: #fff;

    &:hover {
      background-color: green;
    }
  }
}
</style>
