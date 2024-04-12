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
                <th
                  class="text-body-1 py-3"
                  v-for="runNumber of displayedRunNumbers"
                  :key="`${selectedLocation} - ${runNumber}`"
                >
                  Run {{ runNumber }}
                  <v-icon class="ml-1" small @click="removeRunFromTable(runNumber)">mdi-close-circle</v-icon>

                  <v-btn class="d-block" x-small @click="showRealizationSummary(runNumber)">Summary</v-btn>
                </th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(elementResult, elementName) in exisitingLocation">
                <tr :key="elementName">
                  <td class="text-subtitle-1 font-weight-medium">
                    {{ resultProvider.convertCamelToTitleCase(elementName) }}
                  </td>
                  <td :colspan="displayedRunNumbers.length" />
                </tr>

                <template v-for="(_, result) in elementResult">
                  <template v-if="resultIsNumber(elementResult[result])">
                    <tr :key="`${elementName} - ${result}`">
                      <td class="pl-8">
                        {{ resultProvider.convertCamelToTitleCase(result) }}
                        <span
                          v-if="resultProvider.getUnitsAsHtml(result)"
                          v-html="`(${resultProvider.getUnitsAsHtml(result)})`"
                        />
                      </td>

                      <td v-for="runNumber in displayedRunNumbers" :key="`${elementName} - ${result} - ${runNumber}`">
                        {{ getCellValueSingleLocation(elementName, result, runNumber) }}
                      </td>
                    </tr>
                  </template>

                  <template v-else
                    ><!-- need to flatten result in table -->
                    <tr
                      v-for="(_, subResultName) of elementResult[result]"
                      :key="`${elementName} - ${result} - ${subResultName}`"
                    >
                      <td class="pl-8">
                        {{ resultProvider.convertCamelToTitleCase(result) }} - {{ subResultName }}
                        <span
                          v-if="resultProvider.getUnitsAsHtml(result)"
                          v-html="`(${resultProvider.getUnitsAsHtml(result)})`"
                        />
                      </td>

                      <td
                        v-for="runNumber in displayedRunNumbers"
                        :key="`${elementName} - ${result} - ${subResultName} - ${runNumber}`"
                      >
                        {{ getCellValueSingleLocation(elementName, result, runNumber, subResultName) }}
                      </td>
                    </tr>
                  </template>
                </template>
              </template>
              <tr>
                <td class="pl-8">Number Of Buildings</td>
                <td v-for="runNumber of displayedRunNumbers" :key="runNumber">
                  {{ getLocationBuildingOrSegmentCount(runNumber) }}
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

            <tbody>
              <template v-for="(elementResult, elementName) in exisitingLocation">
                <tr :key="elementName">
                  <td class="text-subtitle-1 font-weight-medium">
                    {{ resultProvider.convertCamelToTitleCase(elementName) }}
                  </td>

                  <td :class="getCellClass(i)" v-for="i in locations.length * displayedRunNumbers.length" :key="i" />
                </tr>

                <template v-for="(_, result) in elementResult">
                  <template v-if="resultIsNumber(elementResult[result])">
                    <tr :key="`${elementName} - ${result}`">
                      <td class="pl-8">
                        {{ resultProvider.convertCamelToTitleCase(result) }}
                        <span
                          v-if="resultProvider.getUnitsAsHtml(result)"
                          v-html="`(${resultProvider.getUnitsAsHtml(result)})`"
                        />
                      </td>

                      <td
                        :class="getCellClass(i + 1)"
                        v-for="(location, i) in tableLocations"
                        :key="`${location} - ${i}`"
                      >
                        {{ getCellValueAllLocations(location, elementName, result, i) }}
                      </td>
                    </tr>
                  </template>

                  <template v-else>
                    <!-- need to flatten result in table -->
                    <tr
                      v-for="(_, subResultName) of elementResult[result]"
                      :key="`${elementName} - ${result} - ${subResultName}`"
                    >
                      <td class="pl-8">
                        {{ resultProvider.convertCamelToTitleCase(result) }} - {{ subResultName }}
                        <span
                          v-if="resultProvider.getUnitsAsHtml(result)"
                          v-html="`(${resultProvider.getUnitsAsHtml(result)})`"
                        />
                      </td>

                      <td
                        :class="getCellClass(i + 1)"
                        v-for="(location, i) in tableLocations"
                        :key="`${location} - ${i}`"
                      >
                        {{ getCellValueAllLocations(location, elementName, result, i, subResultName) }}
                      </td>
                    </tr>
                  </template>
                </template>
              </template>
              <tr>
                <td class="pl-8">Number Of Buildings</td>
                <td v-for="(location, i) of tableLocations" :class="getCellClass(i + 1)" :key="`${location} - ${i}`">
                  {{ getLocationBuildingOrSegmentCount(calculateRunNumber(i), location) }}
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
import JobRequest from '@/implementations/jobs/JobRequest';
import ResourceResult from '@/enums/jobs/results/resourceResult';

@Component({ components: { RealizationDetails } })
export default class RealizationTable extends Vue {
  @State(nameof<ICurrentJob>((s) => s.currentJob), { namespace: StoreNames.JOBS })
  currJob!: JobRequest;

  resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  results!: IJobResultRealization[];

  displayedRunNumbers: number[] = [];

  runNumber = 1;

  selectedLocation = 'All';

  selectedRealization = 0;

  showSummaryModal = false;

  tableWidth = 0;

  get locations(): string[] {
    const existingLocations = Object.entries(this.currJob.results[0].scenarioResults).filter(
      ([, resultSet]) => resultSet !== null,
    );

    return existingLocations.flatMap(([location, resultSet]) => {
      const isIndoor = location.toLowerCase().includes('indoor');
      return isIndoor
        ? Object.entries(resultSet)
            .filter(([, er]) => er)
            .map(([category]) => `${category} Building`)
        : this.resultProvider.convertCamelToTitleCase(location.replace('Results', ''));
    });
  }

  get tableLocations(): string[] {
    const { length } = this.displayedRunNumbers;
    return [...Array(length)].flatMap(() => this.locations);
  }

  get exisitingLocation(): IElementResultSet | null {
    const { scenarioResults } = this.currJob.results[0];
    if (scenarioResults.indoorResults) {
      // indoor exists
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return Object.values(scenarioResults.indoorResults).filter((er) => er)[0]!.realizationResults;
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

  getCellValueAllLocations(
    location: string,
    elementName: string,
    result: Result,
    index: number,
    subResult?: ResourceResult,
  ): string {
    let value = this.getLocationResults(this.calculateRunNumber(index), location)[elementName][result];
    if (subResult !== undefined) {
      value = (value as Record<string, number>)[subResult];
    }

    return this.resultProvider.formatNumber(value as number);
  }

  getCellValueSingleLocation(
    elementName: string,
    result: Result,
    runNumber: number,
    subResult?: ResourceResult,
  ): string {
    let value = this.getLocationResults(runNumber)[elementName][result];
    if (subResult !== undefined) {
      value = (value as Record<string, number>)[subResult];
    }

    return this.resultProvider.formatNumber(value as number);
  }

  getLocationResults(runNumber: number, location?: string): IElementResultSet {
    const run = this.resultProvider.getRealizationResults(this.results, runNumber).scenarioResults;

    let selectedLocation = (location !== undefined ? location : this.selectedLocation).replace(/ Building$/, '');

    const isIndoor = Object.keys(BuildingCategory).includes(selectedLocation);
    if (!isIndoor) {
      selectedLocation = selectedLocation[0].toLowerCase() + `${selectedLocation}Results`.substring(1);
    }

    return isIndoor
      ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        run.indoorResults[selectedLocation]!.realizationResults
      : (run[selectedLocation] as IElementResultSet);
  }

  getLocationBuildingOrSegmentCount(runNumber: number, location?: string): number | string {
    const run = this.resultProvider.getRealizationResults(this.results, runNumber).scenarioResults;

    let selectedLocation = (location !== undefined ? location : this.selectedLocation).replace(/ Building$/, '');

    const isIndoor = Object.keys(BuildingCategory).includes(selectedLocation);
    if (!isIndoor) {
      selectedLocation = selectedLocation[0].toLowerCase() + `${selectedLocation}Results`.substring(1);
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return isIndoor ? run.indoorResults[selectedLocation]!.buildingCount : 'N/A';
  }

  removeRunFromTable(runNumber: number): void {
    const index = this.displayedRunNumbers.indexOf(runNumber);
    this.displayedRunNumbers.splice(index, 1);
  }

  resultIsNumber(result: Result | ResourceResult): boolean {
    return this.resultProvider.resultIsNumber(result);
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

  mounted(): void {
    this.results = this.currJob.results;
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
