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
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IChartTooltipProvider from '@/interfaces/providers/IChartTooltipProvider';

@Component({ components: { ChartJsWrapper } })
export default class DashboardChartCard extends Vue {
  @Prop() text!: string;

  @Prop() data!: ChartData;

  private tooltipProvider = container.get<IChartTooltipProvider>(TYPES.ChartTooltipProvider);

  options = new DefaultChartOptions();

  initializeChart(): void {
    this.options.maintainAspectRatio = true;
    this.options.legend.position = PositionType.Right;
    this.options.tooltips.enabled = true;
    this.options.tooltips.callbacks = this.tooltipProvider.pieCallback;
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
