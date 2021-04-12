<template>
  <v-card>
    <div class="pa-5">
      <v-card-title class="headline pa-0" v-text="text"> </v-card-title>
      <chart-js-wrapper type="pie" :data="data" :options="options" :plugins="[]" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ChartJsWrapper, DefaultChartOptions, PositionType } from 'battelle-common-vue-charting/src';
import { ChartData } from 'chart.js';

@Component({ components: { ChartJsWrapper } })
export default class DashboardChartCard extends Vue {
  @Prop() text!: string;

  @Prop() data!: ChartData;

  options = new DefaultChartOptions();

  initializeChart(): void {
    this.options.maintainAspectRatio = true;
    this.options.legend.position = PositionType.Right;
    this.options.tooltips.enabled = true;
  }

  created(): void {
    this.initializeChart();
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 350px;
}
</style>
