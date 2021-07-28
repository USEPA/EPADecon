<template>
  <v-card class="d-flex justify-center" id="chartPanel" height="100%">
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
    <div v-else class="pa-16" style="width: 100%">
      <scatter-plot-wrapper
        v-if="chartType === 'scatter'"
        type="scatter"
        class="pl-10"
        :data="chartData"
        :options="options"
        :width="100"
        :height="100"
      />
      <chart-js-wrapper
        v-else
        :type="chartType"
        class="pl-10"
        :data="chartData"
        :options="options"
        :plugins="[]"
        :key="chartKey"
      />

      <v-chip v-if="chartLabels.x" class="px-6" id="xLabel" close @click:close="onLabelClicked('x')">
        {{ resultProvider.convertCamelToTitleCase(chartLabels.x) }}
      </v-chip>

      <v-chip v-if="chartLabels.y" class="px-6" id="yLabel" close @click:close="onLabelClicked('y')">
        {{ resultProvider.convertCamelToTitleCase(chartLabels.y) }}
      </v-chip>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ChartOptions from '@/components/modals/results/ChartOptions.vue';
import { ChartData, ChartDataset, ChartOptions as ChartJsOptions } from 'chart.js';
import { ChartJsWrapper, ScatterPlotWrapper } from 'battelle-common-vue-charting';
import PhaseResult from '@/enums/jobs/results/phaseResult';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import IChartOptionsProvider from '@/interfaces/providers/IChartOptionsProvider';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';

@Component({ components: { ChartJsWrapper, ChartOptions, ScatterPlotWrapper } })
export default class ResultsChartPanel extends Vue {
  @Prop() chartData!: ChartData;

  @Prop() chartType!: string;

  @Prop() chartLabels!: { x: PhaseResult | null; y: PhaseResult | null };

  @Prop() details!: IResultDetails | null;

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  private chartOptionsProvider = container.get<IChartOptionsProvider>(TYPES.ChartOptionsProvider);

  chartKey = 0;

  options: ChartJsOptions = this.chartOptionsProvider.getDefaultOptions();

  @Watch('chartType')
  onChartTypeChanged(newValue: string): void {
    if (this.chartData?.datasets?.[0]) {
      (this.chartData.datasets[0] as ChartDataset<'scatter'>).showLine = newValue !== 'scatter';
    }

    switch (newValue) {
      case 'bar':
        this.options = this.chartOptionsProvider.getHistogramOptions();
        break;
      case 'pie':
        this.options = this.chartOptionsProvider.getPieOptions();
        break;
      case 'scatter':
        this.options = this.chartOptionsProvider.getScatterOptions();
        break;
      default:
        this.options = this.chartOptionsProvider.getDefaultOptions();
    }

    this.chartKey += 1;
  }

  @Watch('chartData')
  onChartDataChanged(): void {
    if (this.chartType === 'bar') {
      this.chartOptionsProvider.details = this.details ?? undefined;
    }
  }

  onLabelClicked(label: string): void {
    this.$emit('removeLabel', label);
  }
}
</script>

<style lang="scss" scoped>
#methodList {
  list-style-type: '- ';
  list-style-position: inside;
  padding-left: 0;
}

#chartPanel {
  max-height: 600px;
}

#xLabel {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

#yLabel {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(-90deg);
}
</style>
