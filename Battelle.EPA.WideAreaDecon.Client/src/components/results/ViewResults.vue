<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, PhaseResult.TotalCost)"
          icon="mdi-currency-usd"
          text="Average Total Cost"
          :value="`$${averageTotalCost}`"
        />
      </v-col>
      <v-col cols="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, PhaseResult.AreaContaminated)"
          icon="mdi-earth"
          text="Average Total Area Contaminated"
          :value="`${averageTotalAreaContaminated} m^2`"
        />
      </v-col>
      <v-col cols="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, PhaseResult.Workdays)"
          icon="mdi-calendar"
          text="Average Total Workdays"
          :value="averageTotalWorkdays"
        />
      </v-col>
      <v-col cols="3">
        <dashboard-result-card
          @showDetails="showResultDetails"
          icon="mdi-hand-water"
          text="Average Number of Decontamination Iterations"
          :value="500"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <dashboard-chart-card text="Cost Breakdown By Element" :data="getPhaseBreakdownChartData('phaseCost')" />
      </v-col>
      <v-col cols="6">
        <dashboard-chart-card text="Workday Breakdown By Element" :data="getPhaseBreakdownChartData('workDays')" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, PhaseResult.OnSiteDays)"
          icon="mdi-tent"
          text="Average Number of Days Spent on Setup and Teardown"
          :value="averageTotalOnSiteDays"
        />
      </v-col>
      <v-col cols="3">
        <dashboard-result-card icon="mdi-replay" text="Number of Realizations" :value="currentJob.numberRealizations" />
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title class="headline pl-5" v-text="'Actions'"></v-card-title>
          <v-card-text class="d-flex justify-space-between px-5">
            <v-btn color="secondary" v-text="'Summary'" @click="navigate('realizationSummary')"></v-btn>
            <v-btn color="secondary" v-text="'View Parameters'" @click="viewParameters"></v-btn>
            <v-btn color="secondary" v-text="'Run Job Again'"></v-btn>
            <v-btn color="secondary" v-text="'Export Results'" @click="exportResults"></v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <result-details :title="modalTitle" :details="details" v-model="showModal" />
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
import ResultDetails from '@/components/modals/results/ResultDetails.vue';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import RealizationSummary from './RealizationSummary.vue';
import DashboardResultCard from './DashboardResultCard.vue';
import DashboardChartCard from './DashboardChartCard.vue';

@Component({
  components: {
    RealizationSummary,
    DashboardResultCard,
    DashboardChartCard,
    ResultDetails,
  },
})
export default class ViewResults extends Vue {
  @State currentJob!: JobRequest;

  @Action setScenarioDefinition!: (newDefinition: ParameterWrapperList) => void;

  @Action setScenarioParameters!: (newParameters: ParameterWrapperList) => void;

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  showModal = false;

  modalTitle = '';

  averageTotalCost = '';

  averageTotalAreaContaminated = '';

  averageTotalWorkdays = '';

  averageTotalOnSiteDays = '';

  PhaseResult = PhaseResult; // needed to use enum in template

  details: IResultDetails = { values: [], mean: 0, minimum: 0, maximum: 0, stdDev: 0 };

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

  showResultDetails($event: string, result: PhaseResult): void {
    const details = this.resultProvider.getResultDetails(this.currentJob.results, result);
    if (details) {
      this.details = details;
      this.modalTitle = $event;
      this.showModal = true;
    }
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

  getAverageFormatted(result: PhaseResult): string {
    const avg = this.resultProvider.getResultDetails(this.currentJob.results, result)?.mean ?? 0;
    return this.resultProvider.formatNumber(avg);
  }

  setValues(): void {
    this.averageTotalCost = this.getAverageFormatted(PhaseResult.TotalCost);
    this.averageTotalAreaContaminated = this.getAverageFormatted(PhaseResult.AreaContaminated);
    this.averageTotalWorkdays = this.getAverageFormatted(PhaseResult.Workdays);

    const avgOnSiteDays =
      this.resultProvider.getResultDetails(this.currentJob.results, PhaseResult.OnSiteDays)?.mean ?? 0;
    const avgWorkdays = this.resultProvider.getResultDetails(this.currentJob.results, PhaseResult.Workdays)?.mean ?? 0;

    this.averageTotalOnSiteDays = this.resultProvider.formatNumber(avgOnSiteDays - avgWorkdays);

    // TODO get rounds of decontamination
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
