<template>
  <v-container>
    <!-- <v-card width="100%">
      <v-tabs right v-model="tab">
        <v-tab v-for="location in locations" :key="location">{{ location }}</v-tab>
        <v-tabs-items v-model="tab">
          <v-tab-item :transition="null" v-for="location in locations" :key="location">
            <realization-summary :results="getResultsForLocation(location)" :location="location" />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-card> -->
    <v-row>
      <v-col cols="3">
        <dashboard-result-card
          icon="mdi-currency-usd"
          text="Average Total Cost"
          :value="`$${formatNumber(getAverage('totalCost'))}`"
        />
      </v-col>
      <v-col cols="3">
        <dashboard-result-card
          icon="mdi-earth"
          text="Average Total Area Contaminated"
          :value="`${formatNumber(getAverage('areaContaminated'))} m2`"
        />
      </v-col>
      <v-col cols="3">
        <dashboard-result-card icon="mdi-calendar" text="Avergage Total Workdays" :value="500" />
      </v-col>
      <v-col cols="3">
        <dashboard-result-card icon="mdi-hand-water" text="Average Number of Rounds of Decontamination" :value="500" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <dashboard-chart-card text="Cost Breakdown By Phase" :data="costBreakdown" />
      </v-col>
      <v-col cols="6">
        <dashboard-chart-card text="Workday Breakdown By Phase" :data="workdayBreakdown" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3">
        <dashboard-result-card icon="mdi-tent" text="Average Number of Days Spent on Setup and Teardown" :value="500" />
      </v-col>
      <v-col cols="3">
        <dashboard-result-card icon="mdi-replay" text="Number of Realizations" :value="currentJob.numberRealizations" />
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title class="headline pl-5" v-text="'Actions'"></v-card-title>
          <v-card-text class="d-flex justify-space-between px-5">
            <v-btn color="secondary" v-text="'Realization Summary'" @click="navigate('realizationSummary')"></v-btn>
            <v-btn color="secondary" v-text="'View Parameters'" @click="viewParameters"></v-btn>
            <v-btn color="secondary" v-text="'Run Job Again'"></v-btn>
            <v-btn color="secondary" v-text="'Export Results'" @click="exportResults"></v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import JobRequest from '@/implementations/jobs/JobRequest';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import IIndoorResult from '@/interfaces/jobs/results/IIndoorResult';
import IPhaseResultSet from '@/interfaces/jobs/results/IPhaseResultSet';
import IJobProvider from '@/interfaces/providers/IJobProvider';
import TYPES from '@/dependencyInjection/types';
import container from '@/dependencyInjection/config';
// TODO remove mock results
import mockResults from '@/dataMocks/mockResults';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import RealizationSummary from './RealizationSummary.vue';
import DashboardResultCard from './DashboardResultCard.vue';
import DashboardChartCard from './DashboardChartCard.vue';

@Component({
  components: {
    RealizationSummary,
    DashboardResultCard,
    DashboardChartCard,
  },
})
export default class ViewResults extends Vue {
  @State currentJob!: JobRequest;

  @Action setScenarioDefinition!: (newDefinition: ParameterWrapperList) => void;

  @Action setScenarioParameters!: (newParameters: ParameterWrapperList) => void;

  private jobProvider = container.get<IJobProvider>(TYPES.JobProvider);

  results: IJobResultRealization[] = [];

  locations: string[] = [];

  runNumber = 1;

  tab = 0;

  mockResults = mockResults;

  mockPieChartData = {
    datasets: [
      {
        data: [10, 20, 30, 40, 50],
      },
    ],
    labels: ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'],
  };

  costBreakdown = this.mockPieChartData;

  workdayBreakdown = this.mockPieChartData;

  exportResults(): void {
    this.jobProvider.exportJobResults(this.currentJob);
  }

  // eslint-disable-next-line class-methods-use-this
  formatNumber(num: number): string {
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getAverage(result: string): number {
    return (
      this.mockResults.reduce((acc, cur) => {
        if (acc !== undefined && cur !== undefined) {
          // get indoor cost
          const indoorCost = Object.values(cur.Indoor).reduce((acc2, cur2) => {
            if (acc2 !== undefined && cur2 !== undefined) {
              return acc2 + (cur2.generalResults[result] ?? 0);
            }
            return 0;
          }, 0);
          return (
            acc +
            indoorCost +
            (cur.Outdoor.generalResults[result] ?? 0) +
            (cur.Underground.generalResults.totalCost ?? 0)
          );
        }
        return 0;
      }, 0) / this.mockResults.length
    );
  }

  viewParameters(): void {
    const { modifyParameter, defineScenario } = this.currentJob;
    this.setScenarioDefinition(defineScenario as ParameterWrapperList);
    this.setScenarioParameters(modifyParameter as ParameterWrapperList);
    this.navigate('defineScenario');
  }

  navigate(location: string): void {
    this.$router.push({ name: location });
  }

  // getResultsForLocation(location: string): (IIndoorResult | IPhaseResultSet)[] {
  //   return this.results.map((r) => (r[location] ? r[location] : r.Indoor[location]));
  // }

  // parseResults(): void {
  //   this.results = this.currentJob.results ?? [];

  //   this.locations = Object.keys(this.results[0]);
  //   const indoorBuildings = Object.keys(this.results[0].Indoor);

  //   this.locations.splice(0, 1, ...indoorBuildings);
  // }

  // created(): void {
  //   this.$store.commit('enableNavigationTabs');
  //   this.parseResults();
  // }
}
</script>

<style scoped lang="scss"></style>
