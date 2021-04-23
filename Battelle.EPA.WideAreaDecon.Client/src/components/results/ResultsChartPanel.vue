<template>
  <v-card class="d-flex justify-center" height="100%">
    <div v-if="!chartData" class="d-flex justify-center align-center flex-column">
      <v-btn
        width="150"
        v-text="'Create Chart'"
        color="secondary"
        class="mx-auto mb-6"
        @click="$emit('showModal')"
      ></v-btn>
      <v-card-text class="text-center">
        <p class="text-subtitle-1">View data by using at least one of the following methods:</p>
        <ul class="text-subtitle-2" id="methodList">
          <li>Creating a chart</li>
          <li>Adding runs to the table below</li>
        </ul>
      </v-card-text>
    </div>
    <div v-else>
      <scatter-plot-wrapper
        v-if="chartType === 'scatter'"
        type="scatter"
        :data="chartData"
        :options="options"
        :key="chartKey"
        :width="100"
        :height="100"
      />
      <chart-js-wrapper v-else :type="chartType" :data="chartData" :options="options" :plugins="[]" :key="chartKey" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ChartOptions from '@/components/modals/results/ChartOptions.vue';
import { ChartData } from 'chart.js';
import { ChartJsWrapper, DefaultChartOptions, ScatterPlotWrapper } from 'battelle-common-vue-charting/src';

@Component({ components: { ChartJsWrapper, ChartOptions, ScatterPlotWrapper } })
export default class ResultsChartPanel extends Vue {
  @Prop() chartData!: ChartData;

  @Prop() chartType!: string;

  chartKey = 0;

  options = new DefaultChartOptions();

  @Watch('chartType')
  onChartTypeChanged(newValue: string): void {
    if (this.chartData.datasets?.[0]) {
      this.chartData.datasets[0].showLine = newValue !== 'scatter';
    }
    this.chartKey += 1;
  }

  created(): void {
    this.options.maintainAspectRatio = false;
    this.options.responsive = true;
    this.options.tooltips.enabled = true;
  }
}
</script>

<style lang="scss" scoped>
#methodList {
  list-style-type: '- ';
  list-style-position: inside;
  padding-left: 0;
}
</style>
