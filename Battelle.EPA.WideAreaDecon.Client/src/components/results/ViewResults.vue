<template>
  <v-container v-if="currentJob.results.length">
    <v-row>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, PhaseResult.TotalCost)"
          icon="mdi-currency-usd"
          text="Average Total Cost"
          :value="`$${averageTotalCost}`"
        />
      </v-col>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, PhaseResult.AreaContaminated)"
          icon="mdi-earth"
          text="Average Total Area Contaminated"
          :value="`${averageTotalAreaContaminated} m^2`"
        />
      </v-col>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, PhaseResult.Workdays)"
          icon="mdi-calendar"
          text="Average Total Workdays"
          :value="averageTotalWorkdays"
        />
      </v-col>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, PhaseResult.DecontaminationRounds)"
          icon="mdi-hand-water"
          text="Average Number of Decontamination Iterations"
          :value="averageDeconRounds"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" sm="12" lg="6">
        <dashboard-chart-card text="Cost Breakdown By Element" :data="getPhaseBreakdownChartData('phaseCost')" />
      </v-col>
      <v-col cols="6" sm="12" lg="6">
        <dashboard-chart-card text="Workday Breakdown By Element" :data="getPhaseBreakdownChartData('workDays')" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3" sm="6" lg="3">
        <dashboard-result-card
          @showDetails="showResultDetails($event, PhaseResult.OnSiteDays)"
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

  averageDeconRounds = '';

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
    this.resultProvider.exportJobResults(this.currentJob);
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
    this.setScenarioDefinition(defineScenario);
    this.setScenarioParameters(modifyParameter);
    this.navigate('defineScenario');
  }

  navigate(location: string): void {
    this.$router.push({ name: location });
  }

  getAverageFormatted(result: PhaseResult): string {
    const avg = this.resultProvider.getResultDetails(this.currentJob.results, result)?.mean ?? 0;
    return this.resultProvider.formatNumber(avg);
  }

  @Watch('currentJob')
  setValues(): void {
    this.averageTotalCost = this.getAverageFormatted(PhaseResult.TotalCost);
    this.averageTotalAreaContaminated = this.getAverageFormatted(PhaseResult.AreaContaminated);
    this.averageTotalWorkdays = this.getAverageFormatted(PhaseResult.Workdays);
    this.averageDeconRounds = this.getAverageFormatted(PhaseResult.DecontaminationRounds);
    this.averageTotalOnSiteDays = this.getAverageFormatted(PhaseResult.OnSiteDays);
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
