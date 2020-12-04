<template>
  <v-card height="100%" width="100%">
    <v-row dense>
      <v-col cols="auto" class="mr-auto">
        <v-card-title v-if="shouldIncludeTitle" v-text="currentSelectedParameter.path" />
      </v-col>
      <v-col align-self="center" cols="3">
        <v-overflow-btn
          v-if="isChangeableDist"
          @change="onDistributionTypeChange"
          class="my-2"
          v-model="currentDistType"
          :items="distNames"
          filled
          dense
        />
      </v-col>
      <v-col style="margin-top: 7px" cols="2">
        <v-btn height="45" v-if="shouldIncludeTitle && parameterHasChanged" color="secondary" @click="resetParameter">
          Reset Parameter
        </v-btn>
      </v-col>
    </v-row>
    <v-divider color="grey" v-if="shouldIncludeTitle"></v-divider>
    <component :key="componentKey" :is="distComponent" :parameter-value="currentSelectedParameter.current"> </component>
    <v-card v-if="shouldIncludeTitle" class="pa-2" outlined tile>
      <scatter-plot-wrapper :data="chartData" :type="'scatter'" :height="1500" :width="400" />
    </v-card>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterType from '@/enums/parameter/parameterType';
import NullDisplay from '@/components/parameters/distributionDisplay/NullDisplay.vue';
import UnknownDisplay from '@/components/parameters/distributionDisplay/UnknownDisplay.vue';
import ConstantDisplay from '@/components/parameters/distributionDisplay/ConstantDisplay.vue';
import LogUniformDisplay from '@/components/parameters/distributionDisplay/LogUniformDisplay.vue';
import BetaPertDisplay from '@/components/parameters/distributionDisplay/BetaPertDisplay.vue';
import TruncatedLogNormalDisplay from '@/components/parameters/distributionDisplay/TruncatedLogNormalDisplay.vue';
import TruncatedNormalDisplay from '@/components/parameters/distributionDisplay/TruncatedNormalDisplay.vue';
import LogNormalDisplay from '@/components/parameters/distributionDisplay/LogNormalDisplay.vue';
import UniformDisplay from '@/components/parameters/distributionDisplay/UniformDisplay.vue';
import WeibullDisplay from '@/components/parameters/distributionDisplay/WeibullDisplay.vue';
import EnumeratedFractionDisplay from '@/components/parameters/distributionDisplay/EnumeratedFractionDisplay.vue';
import EnumeratedParameterDisplay from '@/components/parameters/distributionDisplay/EnumeratedParameterDisplay.vue';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import { changeableDistributionTypes } from '@/mixin/parameterMixin';
import container from '@/dependencyInjection/config';
import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import TYPES from '@/dependencyInjection/types';
import {
  ChartPoint2D,
  CycleColorProvider,
  DefaultChartData,
  // DefaultChartOptions,
  // EmptyChartData,
  ScatterChartDataset,
  ScatterPlotWrapper,
} from 'battelle-common-vue-charting/src/index';
import { range } from 'lodash';
import getDistribution from '@/implementations/parameter/distribution/Utilities';

@Component({
  components: {
    NullDisplay,
    UnknownDisplay,
    ConstantDisplay,
    LogUniformDisplay,
    BetaPertDisplay,
    TruncatedLogNormalDisplay,
    TruncatedNormalDisplay,
    UniformDisplay,
    LogNormalDisplay,
    WeibullDisplay,
    EnumeratedFractionDisplay,
    EnumeratedParameterDisplay,
    ScatterPlotWrapper,
  },
})
export default class ParameterDistributionSelector extends Vue {
  @State currentSelectedParameter!: ParameterWrapper;

  parameterConverter = container.get<IParameterConverter>(TYPES.ParameterConverter);

  @Watch('currentSelectedParameter')
  onCurrentSelectedParameterChange(): void {
    this.currentDistType = this.currentSelectedParameter.type;
  }

  componentKey = 0;

  currentDistType = ParameterType.constant;

  distNames = changeableDistributionTypes;

  get currentDist() {
    const dist = getDistribution(this.currentDistType, this.currentSelectedParameter.current as any);
    return dist;
  }

  get baselineDist() {
    const { type } = this.currentSelectedParameter.baseline;
    const dist = getDistribution(type, this.currentSelectedParameter.baseline as any);
    return dist;
  }

  get chartData(): DefaultChartData {
    const colorProvider = new CycleColorProvider();
    const current = this.createDataset('Current', colorProvider);
    const baseline = this.createDataset('Baseline', colorProvider);

    const chartData = new DefaultChartData([baseline, current]);
    return chartData;
  }

  get distComponent(): string {
    switch (this.currentSelectedParameter.current.type) {
      case ParameterType.null:
        return 'null-display';
      case ParameterType.constant:
        return 'constant-display';
      case ParameterType.logUniform:
        return 'log-uniform-display';
      case ParameterType.pert:
        return 'beta-pert-display';
      case ParameterType.truncatedLogNormal:
        return 'truncated-log-normal-display';
      case ParameterType.truncatedNormal:
        return 'truncated-normal-display';
      case ParameterType.logNormal:
        return 'log-normal-display';
      case ParameterType.uniform:
        return 'uniform-display';
      case ParameterType.weibull:
        return 'weibull-display';
      case ParameterType.enumeratedFraction:
        return 'enumerated-fraction-display';
      case ParameterType.enumeratedParameter:
        return 'enumerated-parameter-display';
      default:
        return 'unknown-display';
    }
  }

  get isChangeableDist(): boolean {
    return changeableDistributionTypes.find((p) => p === this.currentSelectedParameter.type) !== undefined;
  }

  get shouldIncludeTitle(): boolean {
    return this.currentSelectedParameter.type !== ParameterType.null;
  }

  get parameterHasChanged(): boolean {
    return this.currentSelectedParameter.isChanged();
  }

  createDataset(label: string, colorProvider: CycleColorProvider): ScatterChartDataset {
    const data = label === 'Baseline' ? this.getDataPoints(true) : this.getDataPoints();

    const dataset = new ScatterChartDataset(data, label, colorProvider);

    dataset.fill = true;
    dataset.pointRadius = 0;
    dataset.borderColor = 'transparent';

    return dataset;
  }

  getDataPoints(isBaseline = false): ChartPoint2D[] {
    const dist = isBaseline ? this.baselineDist : this.currentDist;
    const min = this.currentSelectedParameter.current.metaData.lowerLimit;
    const max = this.currentSelectedParameter.current.metaData.upperLimit;

    const step = (max - min) / 99; // # points = 50
    const xValues = [...range(min, max, step), max];
    const xyPairs = Number.isNaN(dist?.PDF(xValues[0])) ? [[0, 0]] : xValues.map((x) => [x, dist?.PDF(x)]);

    const dataPoints = xyPairs.map(([x, y]) => new ChartPoint2D(x, y));
    return dataPoints;
  }

  resetParameter(): void {
    this.$store.commit('resetCurrentSelectedParameter');
    this.currentDistType = this.currentSelectedParameter.type;
    this.componentKey += 1;
  }

  onDistributionTypeChange(): void {
    this.$store.commit(
      'changeCurrentParameterType',
      this.parameterConverter.convertToNewType(this.currentSelectedParameter.current, this.currentDistType),
    );
  }

  created(): void {
    this.currentDistType = this.currentSelectedParameter.type;
  }
}
</script>

<style scoped lang="scss"></style>
