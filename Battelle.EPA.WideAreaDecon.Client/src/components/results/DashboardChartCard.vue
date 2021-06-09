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
import { ChartJsWrapper, PositionType } from 'battelle-common-vue-charting/src';
import { ChartData } from 'chart.js';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IChartOptionsProvider from '@/interfaces/providers/IChartOptionsProvider';

@Component({ components: { ChartJsWrapper } })
export default class DashboardChartCard extends Vue {
  @Prop() text!: string;

  @Prop() data!: ChartData;

  private chartOptionsProvider = container.get<IChartOptionsProvider>(TYPES.ChartOptionsProvider);

  options = this.chartOptionsProvider.getPieOptions();

  initializeChart(): void {
    this.options.maintainAspectRatio = true;
    this.options.legend = {
      position: PositionType.Right,
    };
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
