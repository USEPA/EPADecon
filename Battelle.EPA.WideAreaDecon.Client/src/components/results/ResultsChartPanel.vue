<template>
  <v-card class="d-flex justify-center" height="630">
    <div v-if="!chartData" class="d-flex justify-center align-center flex-column">
      <v-btn width="150" v-text="'Create Chart'" color="secondary" class="mx-auto mb-6" @click="showOptions"></v-btn>
      <v-card-text class="text-center">
        <p class="text-subtitle-1">View data by using at least one of the following methods:</p>
        <ul class="text-subtitle-2" id="methodList">
          <li>Creating a chart</li>
          <li>Adding runs to the table below</li>
        </ul>
      </v-card-text>
    </div>
    <div v-else class="pt-8 pb-16 px-8" style="width: 100%">
      <v-btn @click="showOptions" class="mb-3" v-text="'edit chart'" />

      <scatter-plot-wrapper
        v-if="chartType === 'scatter'"
        type="scatter"
        class="pl-10 pr-2 mb-2"
        id="chartWrapper"
        :data="chartData"
        :options="options"
        :key="chartKey"
      />
      <chart-js-wrapper
        v-else
        :type="chartType"
        class="pl-10 pr-2 mb-2"
        id="chartWrapper"
        :data="chartData"
        :options="options"
        :plugins="[]"
        :key="chartKey"
      />

      <v-chip v-if="chartLabels.x" class="px-6" id="xLabel" close @click:close="onLabelClicked('x')" key="x">
        {{ resultProvider.convertCamelToTitleCase(chartLabels.x) }}
      </v-chip>

      <v-chip
        v-if="chartLabels.y"
        class="px-6"
        id="yLabel"
        close
        @click:close="onLabelClicked('y')"
        key="y"
        ref="yLabel"
      >
        {{ resultProvider.convertCamelToTitleCase(chartLabels.y) }}
      </v-chip>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ChartOptions from '@/components/modals/results/ChartOptions.vue';
import { ActiveElement, ChartData, ChartDataset, ChartEvent, ChartOptions as ChartJsOptions } from 'chart.js';
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
    switch (newValue) {
      case 'bar':
        this.options = this.chartOptionsProvider.getHistogramOptions();
        break;
      case 'pie':
        this.options = this.chartOptionsProvider.getPieOptions();
        break;
      case 'scatter':
        this.options = this.chartOptionsProvider.getScatterOptions();
        this.options.onClick = this.onScatterDataPointClicked;
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
      return;
    }

    const dataset = this.chartData?.datasets?.[0];
    if (dataset && Object.getOwnPropertyNames(dataset).includes('showLine')) {
      (dataset as ChartDataset<'scatter'>).showLine = false;
    }
  }

  /** Calculates and sets the value of the Y axis label's 'top' CSS property
   *  This vertically centers the label next to the chart
   */
  @Watch('chartLabels.y')
  setYLabelTop(newY: number | null): void {
    if (newY) {
      this.$nextTick(() => {
        const yLabel = (this.$refs.yLabel as Vue).$el;
        const yLabelTop = yLabel.clientWidth / 2;

        yLabel.setAttribute('style', `top: calc(50% + ${yLabelTop}px`);
      });
    }
  }

  onScatterDataPointClicked(_: ChartEvent, elements: ActiveElement[]): void {
    const { index } = elements[0];
    this.$emit('addRun', index + 1);
  }

  onLabelClicked(label: string): void {
    this.$emit('removeLabel', label);
  }

  showOptions(): void {
    this.$emit('showOptions');
  }
}
</script>

<style lang="scss" scoped>
#methodList {
  list-style-type: '- ';
  list-style-position: inside;
  padding-left: 0;
}

#chartWrapper {
  max-height: 475px;
}

#xLabel {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

#yLabel {
  position: absolute;
  transform-origin: 0 0;
  transform: translateY(-50%) rotate(-90deg);
}
</style>
