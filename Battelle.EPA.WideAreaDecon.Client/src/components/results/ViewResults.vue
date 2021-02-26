<template>
  <v-container>
    <v-card width="100%">
      <v-tabs right v-model="tab">
        <v-tab v-for="location in locations" :key="location">{{ location }}</v-tab>
        <v-tabs-items v-model="tab">
          <v-tab-item :transition="null" v-for="location in locations" :key="location">
            <realization-summary :results="getResultsForLocation(location)" :location="location" />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import JobRequest from '@/implementations/jobs/JobRequest';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import IIndoorResult from '@/interfaces/jobs/results/IIndoorResult';
import IPhaseResultSet from '@/interfaces/jobs/results/IPhaseResultSet';
import RealizationSummary from './RealizationSummary.vue';

@Component({
  components: {
    RealizationSummary,
  },
})
export default class ViewResults extends Vue {
  @State currentJob!: JobRequest;

  results: IJobResultRealization[] = [];

  locations: string[] = [];

  runNumber = 1;

  tab = 0;

  getResultsForLocation(location: string): (IIndoorResult | IPhaseResultSet)[] {
    return this.results.map((r) => (r[location] ? r[location] : r.Indoor[location]));
  }

  parseResults(): void {
    this.results = this.currentJob.results ?? [];

    this.locations = Object.keys(this.results[0]);
    const indoorBuildings = Object.keys(this.results[0].Indoor);

    this.locations.splice(0, 1, ...indoorBuildings);
  }

  created(): void {
    this.$store.commit('enableNavigationTabs');
    this.parseResults();
  }
}
</script>

<style scoped lang="scss"></style>
