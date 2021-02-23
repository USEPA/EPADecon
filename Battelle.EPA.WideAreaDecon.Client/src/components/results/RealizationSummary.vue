<template>
  <v-container>
    <v-card elevation="0">
      <v-row dense>
        <v-col cols="auto" class="mr-auto">
          <v-card-title v-text="`Realization Summary - ${location}`" />
        </v-col>
        <v-col style="margin-top: 7px" cols="2" class="d-inline-flex">
          <v-text-field
            label="Run Number"
            v-model.number="runNumber"
            type="number"
            :rules="[validationRulesRunNumber]"
            hide-details="auto"
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
      <v-simple-table v-if="displayedRunIndexes.length">
        <template v-slot:default>
          <thead>
            <tr>
              <th></th>
              <th class="text-left text-body-1" v-for="runIndex in displayedRunIndexes" :key="runIndex">
                Run {{ runIndex + 1 }}
                <v-icon class="ml-1" small @click="removeRunFromTable(runIndex)">mdi-close-circle</v-icon>
              </th>
            </tr>
          </thead>
          <tbody v-for="(phaseResults, phaseName, index) in results[0]" :key="phaseName">
            <tr>
              <td :colspan="displayedRunIndexes.length + 1" class="text-subtitle-1 font-weight-medium">
                {{ phaseName | addSpaces }}
              </td>
            </tr>
            <tr v-for="(_, item) in phaseResults" :key="item">
              <td class="pl-8">{{ item | startCase | addSpaces }}</td>
              <td v-for="(cost, i) in displayRows[index]" :key="cost + i">
                {{ cost[item] }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div v-else>Please select at least one realization to display run summary</div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  filters: {
    addSpaces: (name: string) => name.split(/(?=[A-Z])/).join(' '),
    startCase: (name: string) => `${name.substring(0, 1).toUpperCase()}${name.substring(1, name.length)}`,
  },
})
export default class RealizationSummary extends Vue {
  @Prop({ required: true }) results!: any[];

  @Prop({ required: true }) location!: boolean;

  runNumber = 1;

  displayedRunIndexes: number[] = [];

  get displayRows(): any[] {
    if (!this.displayedRunIndexes.length) {
      return [];
    }
    return Object.entries(this.results[0]).map(([prop]) => {
      return this.displayedRunIndexes.map((i) => this.results[i][prop]);
    });
  }

  // TODO implement adding runs to table
  addRunToTable(): void {
    const run = this.results[this.runNumber - 1];
    if (run !== undefined && !this.displayedRunIndexes.includes(this.runNumber - 1)) {
      this.displayedRunIndexes.push(this.runNumber - 1);
    }
  }

  removeRunFromTable(runIndex: number): void {
    const index = this.displayedRunIndexes.indexOf(runIndex);
    this.displayedRunIndexes.splice(index, 1);
  }

  // TODO implement CSV export
  exportResults(): void {
    console.log(this.results);
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

<style lang="scss" scoped></style>
