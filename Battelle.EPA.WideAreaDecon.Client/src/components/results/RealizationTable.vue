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
              label="Building"
              :items="['All', ...locations]"
              v-model="selectedLocation"
              outlined
              hide-details="auto"
            ></v-select>
          </v-col>

          <v-col cols="2" style="margin-top: 7px">
            <v-text-field
              label="Run Number"
              v-model.number="runNumber"
              type="number"
              :rules="[validationRulesRunNumber]"
              hide-details="auto"
              outlined
            ></v-text-field>
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

        <v-divider color="grey"></v-divider>

        <v-simple-table v-if="displayedRunNumbers.length" dense class="overflow-x-hidden" ref="table">
          <template v-if="selectedLocation !== 'All'" v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th class="text-body-1 py-3" v-for="runNumber in displayedRunNumbers" :key="runNumber">
                  Run {{ runNumber }}
                  <v-icon class="ml-1" small @click="removeRunFromTable(runNumber)">mdi-close-circle</v-icon>

                  <v-btn class="d-block" x-small @click="showRealizationSummary(runNumber)">Summary</v-btn>
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

                <td v-for="runNumber in displayedRunNumbers" :key="runNumber">
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
                  class="text-body-1 py-3 border-right"
                  :colspan="locations.length"
                  v-for="runNumber in displayedRunNumbers"
                  :key="runNumber"
                >
                  Run {{ runNumber }}
                  <v-icon class="ml-1" small @click="removeRunFromTable(runNumber)">mdi-close-circle</v-icon>

                  <v-btn class="d-block" x-small @click="showRealizationSummary(runNumber)">Summary</v-btn>
                </th>
              </tr>

              <tr>
                <th></th>
                <th
                  :class="`text-body-1 ${getCellClass(i + 1)}`"
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

                <td :class="getCellClass(i)" v-for="i in locations.length * displayedRunNumbers.length" :key="i"></td>
              </tr>

              <tr v-for="(_, result) in phaseResult" :key="result">
                <td>{{ resultProvider.convertCamelToTitleCase(result) }}</td>

                <td :class="getCellClass(i + 1)" v-for="(location, i) in tableLocations" :key="`${location} - ${i}`">
                  {{ getLocationResults(calculateRunNumber(i), location)[phaseName][result] }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-card-text v-else>Please select at least one realization to display a summary for</v-card-text>

        <!-- Table Scrollbar -->
        <div class="scrollbarContainer" ref="scroll">
          <div class="scrollbar" :style="{ width: tableWidth + 'px' }"></div>
        </div>
      </v-container>
    </v-card>

    <realization-details v-model="showSummaryModal" :realizationNumber="selectedRealization" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import IPhaseResultSet from '@/interfaces/jobs/results/IPhaseResultSet';
import BuildingCategory from '@/enums/parameter/buildingCategory';
import RealizationDetails from '@/components/modals/results/RealizationDetails.vue';

@Component({ components: { RealizationDetails } })
export default class RealizationTable extends Vue {
  @State((state) => state.currentJob.results) results!: IJobResultRealization[];

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  displayedRunNumbers: number[] = [];

  runNumber = 1;

  selectedLocation = 'All';

  selectedRealization = 0;

  showSummaryModal = false;

  tableWidth = 0;

  get locations(): string[] {
    const outUnd = Object.keys(this.results[0]).splice(1);
    return [...Object.keys(this.results[0].Indoor).map((l) => `${l} Building`), ...outUnd];
  }

  get tableLocations(): string[] {
    const { length } = this.displayedRunNumbers;
    return [...Array(length)].flatMap(() => this.locations);
  }

  @Watch('displayedRunNumbers.length')
  @Watch('selectedLocation')
  onTableLegnthChanged(): void {
    this.$nextTick(() => {
      // get width of table
      this.tableWidth = (this.$refs.table as Vue)?.$el.firstElementChild?.firstElementChild?.clientWidth ?? 0;
    });
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

  getCellClass(cellNumber: number): string {
    return cellNumber && cellNumber % this.locations.length === 0 && cellNumber ? 'border-right' : '';
  }

  getLocationResults(runNumber: number, location?: string): IPhaseResultSet {
    const run = this.resultProvider.getRealizationResults(this.results, runNumber);
    const selectedLocation = (location !== undefined ? location : this.selectedLocation).replace(/ Building$/, '');
    const isIndoor = Object.keys(BuildingCategory).includes(selectedLocation);
    return isIndoor ? run.Indoor[selectedLocation] : (run[selectedLocation] as IPhaseResultSet);
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

  mounted(): void {
    (this.$refs.scroll as Element).addEventListener('scroll', () => {
      const { scrollLeft } = this.$refs.scroll as Element;
      (this.$refs.table as Vue).$el.scroll({ left: scrollLeft });
    });
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

.scrollbarContainer {
  width: 100%;
  overflow-x: auto;
  position: sticky;
  bottom: 36px; // anything under 36px is the footer
  z-index: 2;

  & > .scrollbar {
    height: 5px;
  }
}
</style>
