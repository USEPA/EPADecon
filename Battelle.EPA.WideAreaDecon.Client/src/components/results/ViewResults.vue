<template>
  <v-container v-if="currentJob.results.length">
    <v-row>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, Result.TotalCost)"
          icon="mdi-currency-usd"
          text="Average Total Cost"
          :value="`$${averageTotalCost}`"
        />
      </v-col>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, Result.AreaContaminated)"
          icon="mdi-earth"
          text="Average Total Area Contaminated"
          :value="`${averageTotalAreaContaminated} m^2`"
        />
      </v-col>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, Result.Workdays)"
          icon="mdi-calendar"
          text="Average Total Workdays"
          :value="averageTotalWorkdays"
        />
      </v-col>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, Result.DecontaminationRounds)"
          icon="mdi-hand-water"
          text="Average Number of Decontamination Iterations"
          :value="averageDeconRounds"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" sm="12" lg="6">
        <dashboard-chart-card text="Cost Breakdown By Element" :data="costBreakdown" />
      </v-col>
      <v-col cols="6" sm="12" lg="6">
        <dashboard-chart-card text="Workday Breakdown By Element" :data="workdayBreakdown" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, Result.OnSiteDays)"
          icon="mdi-tent"
          text="Average Number of Onsite Days"
          :value="averageTotalOnSiteDays"
        />
      </v-col>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card icon="mdi-replay" text="Number of Realizations" :value="currentJob.numberRealizations" />
      </v-col>
      <v-col cols="6" sm="12" lg="6">
        <v-card style="height: 100%">
          <v-card-title class="headline pl-5" v-text="'Actions'"></v-card-title>
          <v-card-text class="d-flex justify-space-between flex-wrap px-5">
            <v-btn color="secondary" class="mb-2" v-text="'Summary'" @click="navigate('jobSummary')" />
            <v-btn color="secondary" v-text="'View Parameters'" @click="viewParameters" />
            <v-btn color="secondary" v-text="'Run Job Again'" @click="$emit('showRunModal')" />
            <v-btn color="secondary" v-text="'Export Results'" @click="exportResults" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <result-details :title="modalTitle" :details="details" v-model="showModal" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import JobRequest from '@/implementations/jobs/JobRequest';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import TYPES from '@/dependencyInjection/types';
import container from '@/dependencyInjection/config';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import { CycleColorProvider } from 'battelle-common-vue-charting';
import { ChartData } from 'chart.js';
import Result from '@/enums/jobs/results/result';
import ResultDetails from '@/components/modals/results/ResultDetails.vue';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import IElementBreakdown from '@/interfaces/jobs/results/IElementBreakdown';
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

  averageDeconRounds = '';

  costBreakdown: unknown;

  workdayBreakdown: unknown;

  Result = Result; // needed to use enum in template

  details: IResultDetails = { values: [], mean: 0, minimum: 0, maximum: 0, stdDev: 0 };

  getElementBreakdownChartData(result: Result): ChartData {
    const elementResults: IElementBreakdown[] = [];
    const numberRealizations = this.currentJob.results.length;
    const colorProvider = new CycleColorProvider();
    const colors: string[] = [];

    for (let i = 0, l1 = this.currentJob.results.length; i < l1; i += 1) {
      const res = this.resultProvider.getResultElementBreakdown(this.currentJob.results[i], result);
      for (let j = 0, l2 = res.length; j < l2; j += 1) {
        if (elementResults[j] === undefined) {
          elementResults.push(res[j]);
          colors.push(colorProvider.getNextColor());
        } else {
          elementResults[j].value += res[j].value ?? 0;
        }
      }
    }

    return {
      datasets: [
        {
          data: elementResults.map((e) => e.value / numberRealizations),
          backgroundColor: colors,
        },
      ],
      labels: elementResults.map((e) => this.resultProvider.convertCamelToTitleCase(e.element)),
    };
  }

  exportResults(): void {
    this.resultProvider.exportJobResults(this.currentJob);
  }

  showResultDetails($event: string, result: Result): void {
    const details = this.resultProvider.getResultDetails(this.currentJob.results, result);
    if (details) {
      this.details = details;
      this.modalTitle = $event;
      this.showModal = true;
    }
  }

  viewParameters(): void {
    const { modifyParameter, defineScenario } = this.currentJob;
    this.setScenarioDefinition(defineScenario);
    this.setScenarioParameters(modifyParameter);
    this.navigate('defineScenario');
  }

  navigate(location: string): void {
    this.$router.push({ name: location });
  }

  getAverageFormatted(result: Result): string {
    const avg = this.resultProvider.getResultDetails(this.currentJob.results, result)?.mean ?? 0;
    return this.resultProvider.formatNumber(avg);
  }

  @Watch('currentJob')
  setValues(): void {
    this.averageTotalCost = this.getAverageFormatted(Result.TotalCost);
    this.averageTotalAreaContaminated = this.getAverageFormatted(Result.AreaContaminated);
    this.averageTotalWorkdays = this.getAverageFormatted(Result.Workdays);
    this.averageDeconRounds = this.getAverageFormatted(Result.DecontaminationRounds);
    this.averageTotalOnSiteDays = this.getAverageFormatted(Result.OnSiteDays);

    this.costBreakdown = this.getElementBreakdownChartData(Result.ElementCost);
    this.workdayBreakdown = this.getElementBreakdownChartData(Result.Workdays);
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
