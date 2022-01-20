<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row style="margin-bottom: 7px">
          <v-col cols="auto">
            <v-card-title v-text="'Realization Comparison'" />
          </v-col>

          <v-col class="ml-auto" cols="3" style="margin-top: 7px">
            <v-select
              label="Location"
              :items="['All', ...locations]"
              v-model="selectedLocation"
              outlined
              hide-details="auto"
            />
          </v-col>

          <v-col cols="2" style="margin-top: 7px">
            <v-text-field
              label="Run Number"
              v-model.number="runNumber"
              type="number"
              :rules="[validationRulesRunNumber]"
              hide-details="auto"
              outlined
            />
          </v-col>

          <v-col cols="1" class="align-self-center">
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

        <v-divider color="grey" />

        <v-simple-table v-if="displayedRunNumbers.length" dense class="overflow-x-hidden" ref="table">
          <template v-if="selectedLocation !== 'All'" v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th class="text-body-1 py-3" v-for="runNumber of displayedRunNumbers" :key="runNumber">
                  Run {{ runNumber }}
                  <v-icon class="ml-1" small @click="removeRunFromTable(runNumber)">mdi-close-circle</v-icon>

                  <v-btn class="d-block" x-small @click="showRealizationSummary(runNumber)">Summary</v-btn>
                </th>
              </tr>
            </thead>

            <tbody v-for="(elementResult, elementName) in exisitingLocation" :key="elementName">
              <tr>
                <td class="text-subtitle-1 font-weight-medium">
                  {{ resultProvider.convertCamelToTitleCase(elementName) }}
                </td>
                <td :colspan="displayedRunNumbers.length" />
              </tr>

              <tr v-for="(_, result) in elementResult" :key="result">
                <td class="pl-8">{{ resultProvider.convertCamelToTitleCase(result) }}</td>

                <td v-for="runNumber in displayedRunNumbers" :key="runNumber">
                  {{ getCellValueSingleLocation(elementName, result, runNumber) }}
                </td>
              </tr>
            </tbody>
          </template>

          <template v-else v-slot:default>
            <thead>
              <tr>
                <th />
                <th
                  class="text-body-1 py-3 border-right"
                  :colspan="locations.length"
                  v-for="runNumber of displayedRunNumbers"
                  :key="runNumber"
                >
                  Run {{ runNumber }}
                  <v-icon class="ml-1" small @click="removeRunFromTable(runNumber)">mdi-close-circle</v-icon>

                  <v-btn class="d-block" x-small @click="showRealizationSummary(runNumber)">Summary</v-btn>
                </th>
              </tr>

              <tr>
                <th />
                <th
                  :class="`text-body-1 ${getCellClass(i + 1)}`"
                  v-for="(location, i) in tableLocations"
                  :key="`${location} - ${i}`"
                >
                  {{ location }}
                </th>
              </tr>
            </thead>

            <tbody v-for="(elementResult, elementName) in exisitingLocation" :key="elementName">
              <tr>
                <td class="text-subtitle-1 font-weight-medium">
                  {{ resultProvider.convertCamelToTitleCase(elementName) }}
                </td>

                <td :class="getCellClass(i)" v-for="i in locations.length * displayedRunNumbers.length" :key="i" />
              </tr>

              <tr v-for="(_, result) in elementResult" :key="result">
                <td>{{ resultProvider.convertCamelToTitleCase(result) }}</td>

                <td :class="getCellClass(i + 1)" v-for="(location, i) in tableLocations" :key="`${location} - ${i}`">
                  {{ getCellValueAllLocations(location, elementName, result, i) }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-card-text v-else>Please select at least one realization to display a summary for</v-card-text>
      </v-container>
    </v-card>

    <realization-details v-model="showSummaryModal" :realizationNumber="selectedRealization" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import IElementResultSet from '@/interfaces/jobs/results/IElementResultSet';
import BuildingCategory from '@/enums/parameter/buildingCategory';
import RealizationDetails from '@/components/modals/results/RealizationDetails.vue';
import Result from '@/enums/jobs/results/result';
import { nameof } from 'ts-simple-nameof';
import ICurrentJob from '@/interfaces/store/jobs/ICurrentJob';
import { StoreNames } from '@/constants/store/store';

@Component({ components: { RealizationDetails } })
export default class RealizationTable extends Vue {
  @State(nameof<ICurrentJob>((s) => s.currentJob.results), { namespace: StoreNames.JOBS })
  results!: IJobResultRealization[];

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  displayedRunNumbers: number[] = [];

  runNumber = 1;

  selectedLocation = 'All';

  selectedRealization = 0;

  showSummaryModal = false;

  tableWidth = 0;

  get locations(): string[] {
    const existingLocations = Object.entries(this.results[0].scenarioResults).filter(
      ([, resultSet]) => resultSet !== null,
    );

    return existingLocations.flatMap(([location, resultSet]) => {
      const isIndoor = location.toLowerCase().includes('indoor');
      return isIndoor
        ? Object.keys(resultSet).map((l) => `${l} Building`)
        : this.resultProvider.convertCamelToTitleCase(location.replace('Results', ''));
    });
  }

  get tableLocations(): string[] {
    const { length } = this.displayedRunNumbers;
    return [...Array(length)].flatMap(() => this.locations);
  }

  get exisitingLocation(): IElementResultSet | null {
    const { scenarioResults } = this.results[0];
    if (scenarioResults.indoorResults) {
      // indoor exists
      return Object.values(scenarioResults.indoorResults)[0];
    }

    if (scenarioResults.outdoorResults) {
      // outdoor exists
      return scenarioResults.outdoorResults;
    }

    if (scenarioResults.undergroundResults) {
      // underground exists
      return scenarioResults.undergroundResults;
    }

    return null;
  }

  addRunToTable(): void {
    const run = this.resultProvider.getRealizationResults(this.results, this.runNumber);
    if (run !== undefined && !this.displayedRunNumbers.includes(this.runNumber)) {
      this.displayedRunNumbers.push(this.runNumber);
    }
  }

  calculateRunNumber(index: number): number {
    const locationsPerRun = this.locations.length;
    const runIndex = Math.floor((index + locationsPerRun) / locationsPerRun) - 1;
    return this.displayedRunNumbers[runIndex];
  }

  getCellClass(cellNumber: number): string {
    return cellNumber && cellNumber % this.locations.length === 0 && cellNumber ? 'border-right' : '';
  }

  getCellValueAllLocations(location: string, elementName: string, result: Result, index: number): string {
    const value = this.getLocationResults(this.calculateRunNumber(index), location)[elementName][result];
    return this.resultProvider.formatNumber(value);
  }

  getCellValueSingleLocation(elementName: string, result: Result, runNumber: number): string {
    const value = this.getLocationResults(runNumber)[elementName][result];
    return this.resultProvider.formatNumber(value);
  }

  getLocationResults(runNumber: number, location?: string): IElementResultSet {
    const run = this.resultProvider.getRealizationResults(this.results, runNumber).scenarioResults;

    let selectedLocation = (location !== undefined ? location : this.selectedLocation).replace(/ Building$/, '');

    const isIndoor = Object.keys(BuildingCategory).includes(selectedLocation);
    if (!isIndoor) {
      selectedLocation = selectedLocation[0].toLowerCase() + `${selectedLocation}Results`.substring(1);
    }

    return isIndoor ? run.indoorResults[selectedLocation] : (run[selectedLocation] as IElementResultSet);
  }

  removeRunFromTable(runNumber: number): void {
    const index = this.displayedRunNumbers.indexOf(runNumber);
    this.displayedRunNumbers.splice(index, 1);
  }

  showRealizationSummary(realization: number): void {
    this.selectedRealization = realization;
    this.showSummaryModal = true;
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

  & > thead > tr > th:first-child,
  & > tbody > tr > td:first-child {
    left: 0;
    position: sticky;
    background: #cfd8dc;
    z-index: 1;
    min-width: 250px;

    &:not(th):hover {
      background-color: #b0bec5;
    }
  }

  & > tbody > tr > td:last-child {
    width: 100%;
  }

  & > thead > tr > th {
    &:not(:first-child) {
      border-bottom: thin solid rgba(0, 0, 0, 0.12);
    }
  }
}

.border-right:not(:last-child) {
  border-right: 2px solid rgba(0, 0, 0, 0.12);
}
</style>
