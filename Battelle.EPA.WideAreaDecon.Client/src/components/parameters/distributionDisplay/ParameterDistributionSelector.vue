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
    <v-card v-if="shouldIncludeTitle" flat class="pa-5" tile width="100%" height="400">
      <distribution-chart
        :distribution-series="chartData"
        :xAxisLabel="xAxisLabel"
        :yAxisLabel="'Probability of Selection'"
        :data-generator="distributionGen"
      ></distribution-chart>
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
import { DistributionChart, DefaultChartOptions } from 'battelle-common-vue-charting/src/index';
import Distribution, { DistributionDataGenerator } from 'battelle-common-typescript-statistics';
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
    DistributionChart,
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

  get xAxisLabel(): string | undefined {
    const baseline = this.currentSelectedParameter.baseline.metaData;
    return baseline.hasDescription ? baseline.description : '';
  }

  get chartData(): Distribution[] {
    const baselineType = this.currentSelectedParameter.baseline.type;
    const currentType = this.currentSelectedParameter.current.type;

    const baselineDist = getDistribution(baselineType, this.currentSelectedParameter.baseline as any) as Distribution;
    const currentDist = getDistribution(currentType, this.currentSelectedParameter.current as any) as Distribution;

    return [baselineDist, currentDist];
  }

  get distributionGen(): DistributionDataGenerator {
    const min = this.currentSelectedParameter.baseline.metaData.lowerLimit;
    const max = this.currentSelectedParameter.baseline.metaData.upperLimit;
    const gen = new DistributionDataGenerator(1000, min, max);
    return gen;
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
