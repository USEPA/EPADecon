<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <dashboard-result-card icon="mdi-currency-usd" text="Average Total Cost" :value="`$${averageTotalCost}`" />
      </v-col>
      <v-col cols="3">
        <dashboard-result-card
          icon="mdi-earth"
          text="Average Total Area Contaminated"
          :value="`${averageAreaContaminated} m^2`"
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
        <dashboard-chart-card text="Cost Breakdown By Phase" :data="getPhaseBreakdownChartData('phaseCost')" />
      </v-col>
      <v-col cols="6">
        <dashboard-chart-card text="Workday Breakdown By Phase" :data="getPhaseBreakdownChartData('workDays')" />
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
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import TYPES from '@/dependencyInjection/types';
import container from '@/dependencyInjection/config';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import { CycleColorProvider } from 'battelle-common-vue-charting/src';
import { ChartData } from 'chart.js';
import PhaseResult from '@/enums/jobs/results/phaseResult';
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

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  averageTotalCost = '';

  averageAreaContaminated = '';

  getPhaseBreakdownChartData(result: PhaseResult): ChartData {
    const phaseResults: { phase: string; value: number }[] = [];

    this.currentJob.results.forEach((r) => {
      const res = this.resultProvider.getResultPhaseBreakdown(r, result);
      res.forEach((p, i) => {
        if (phaseResults[i] === undefined) {
          phaseResults.push(p);
        } else {
          phaseResults[i].value += p.value ?? 0;
        }
      });
    });

    const colorProvider = new CycleColorProvider();
    const colors = phaseResults.map(() => colorProvider.getNextColor());
    const numberRealizations = this.currentJob.results.length;

    return {
      datasets: [
        {
          data: phaseResults.map((p) => p.value / numberRealizations),
          backgroundColor: colors,
        },
      ],
      labels: phaseResults.map((p) => this.resultProvider.convertCamelToTitleCase(p.phase)),
    };
  }

  exportResults(): void {
    this.resultProvider.exportJobResults(this.currentJob.results);
  }

  getAverage(result: string): number {
    return (
      this.currentJob.results.reduce((acc, cur) => {
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
      }, 0) / this.currentJob.results.length
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

  setValues(): void {
    const averageTotalCost = this.getAverage(PhaseResult.TotalCost);
    this.averageTotalCost = this.resultProvider.formatNumber(averageTotalCost);

    const averageAreaContaminated = this.getAverage(PhaseResult.AreaContaminated);
    this.averageAreaContaminated = this.resultProvider.formatNumber(averageAreaContaminated);
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
