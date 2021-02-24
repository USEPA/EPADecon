<template>
  <v-container>
    <!-- make sep component  -->
    <v-card width="100%">
      <v-tabs right v-model="tab">
        <v-tab v-for="location in locations" :key="location">{{ location }}</v-tab>
        <v-tabs-items v-model="tab">
          <v-tab-item :transition="null" v-for="location in locations" :key="location">
            <realization-summary :results="results" :location="location" />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-card>
    <!--  -->
  </v-container>
</template>

<script lang="ts">
import JobRequest from '@/implementations/jobs/JobRequest';
import JobResult from '@/implementations/jobs/JobResult';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import RealizationSummary from './RealizationSummary.vue';

@Component({
  components: {
    RealizationSummary,
  },
})
export default class ViewResults extends Vue {
  // locations: string[] = ['Indoor Building1', 'Indoor Building2', 'Outdoor', 'Underground'];
  @State currentJob!: JobRequest;

  results: JobResult[] = [];

  locations: string[] = [];

  runNumber = 1;

  tab = 0;

  // csResults: any = {
  //   workDays: 12.0,
  //   onSiteDays: 32.54,
  //   phaseCost: 12010.23,
  // };

  // srResults: any = {
  //   workDays: 34.0,
  //   onSiteDays: 45.98,
  //   phaseCost: 32345.54,
  // };

  // dcResults: any = {
  //   workDays: 35.5,
  //   onSiteDays: 32.23,
  //   phaseCost: 12345.67,
  // };

  // icResults: any = {
  //   onSiteDays: 12.73,
  //   phaseCost: 4501.109,
  // };

  // oResults: any = {
  //   otherCosts: 792.38,
  // };

  // gResults: any = {
  //   totalCost: 500000.43,
  //   areaContaminated: 5623049224,
  // };

  // csResults2: any = {
  //   workDays: 22.0,
  //   onSiteDays: 22.54,
  //   phaseCost: 110.23,
  // };

  // srResults2: any = {
  //   workDays: 32.0,
  //   onSiteDays: 41.98,
  //   phaseCost: 3223445.54,
  // };

  // dcResults2: any = {
  //   workDays: 312.5,
  //   onSiteDays: 32123.23,
  //   phaseCost: 12341231235.67,
  // };

  // icResults2: any = {
  //   onSiteDays: 112.73,
  //   phaseCost: 14501.109,
  // };

  // oResults2: any = {
  //   otherCosts: 1792.38,
  // };

  // gResults2: any = {
  //   totalCost: 5020000.43,
  //   areaContaminated: 5623049224,
  // };

  // mockResults: any = [
  //   {
  //     CharacterizationSamplingResults: this.csResults,
  //     SourceReductionResults: this.srResults,
  //     DecontaminationResults: this.dcResults,
  //     IncidentCommandResults: this.icResults,
  //     OtherResults: this.oResults,
  //     GeneralResults: this.gResults,
  //   },
  //   {
  //     CharacterizationSamplingResults: this.csResults2,
  //     SourceReductionResults: this.srResults2,
  //     DecontaminationResults: this.dcResults2,
  //     IncidentCommandResults: this.icResults2,
  //     OtherResults: this.oResults2,
  //     GeneralResults: this.gResults2,
  //   },
  // ];

  // // TODO implement CSV export
  // exportResults(): void {
  //   console.log(this.mockResults);
  // }
  created(): void {
    this.results = this.currentJob.results;
    this.locations = Object.keys(this.results[0]);
    // const buildings = Object.keys(this.results[0].Indoor);
    // this.locations.splice(0, 1, buildings);
  }
}
</script>

<style scoped lang="scss"></style>
