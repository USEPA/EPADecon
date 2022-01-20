<template>
  <v-card min-height="100%" width="100%">
    <v-container>
      <v-row v-if="shouldIncludeTitle || isChangeableDist" dense>
        <v-col cols="5" xl="6">
          <v-card-title v-if="shouldIncludeTitle">{{ currentSelectedParameter.path }}</v-card-title>
        </v-col>

        <v-col cols="3" xl="2" offset="1">
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

        <v-col cols="3" xl="2" style="margin-top: 7px">
          <v-btn
            height="45"
            v-if="shouldIncludeTitle"
            :disabled="!parameterHasChanged"
            color="secondary"
            @click="resetParameter"
          >
            Reset Parameter
          </v-btn>
        </v-col>
      </v-row>

      <v-divider color="grey" v-if="shouldIncludeTitle" />

      <component
        :key="currentSelectedParameter.path"
        :is="display.distComponent"
        :parameter-value="currentSelectedParameter.current"
      />

      <div v-if="display.displayChart" class="py-5" style="width: 100%; height: 400px">
        <distribution-chart
          :distribution-series="display.chartData"
          :x-axis-label="display.xAxisLabel"
          :y-axis-label="'Probability of Selection'"
          :data-generator="display.dataGenerator"
          :force-x-axis-min-zero="false"
          ref="dist"
        />
      </div>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Action, Getter, State } from 'vuex-class';
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
import UniformXDependentDisplay from '@/components/parameters/distributionDisplay/UniformXDependentDisplay.vue';
import WeibullDisplay from '@/components/parameters/distributionDisplay/WeibullDisplay.vue';
import BimodalTruncatedNormalDisplay from '@/components/parameters/distributionDisplay/BimodalTruncatedNormalDisplay.vue';
import EnumeratedFractionDisplay from '@/components/parameters/distributionDisplay/EnumeratedFractionDisplay.vue';
import EnumeratedParameterDisplay from '@/components/parameters/distributionDisplay/EnumeratedParameterDisplay.vue';
import TextValueDisplay from '@/components/parameters/distributionDisplay/TextValueDisplay.vue';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import { changeableDistributionTypes, nonLogDistributionTypes } from '@/mixin/parameterMixin';
import container from '@/dependencyInjection/config';
import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import TYPES from '@/dependencyInjection/types';
import { DistributionChart } from 'battelle-common-vue-charting';
import DistributionDisplay from '@/implementations/parameter/distribution/DistributionDisplay';
import IDistributionDisplayProvider from '@/interfaces/providers/IDistributionDisplayProvider';
import ContaminationDefinitionDisplay from '@/components/parameters/maps/ContaminationDefinitionDisplay.vue';
import { ScenarioDefinitionMode } from '@/types';
import { nameof } from 'ts-simple-nameof';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import { StoreNames } from '@/constants/store/store';
import { JobsStoreActions } from '@/constants/store/Jobs';
import { ParameterSelectionStoreGetters } from '@/constants/store/ParameterSelection';

@Component({
  components: {
    NullDisplay,
    UnknownDisplay,
    ConstantDisplay,
    LogUniformDisplay,
    BetaPertDisplay,
    TruncatedLogNormalDisplay,
    TruncatedNormalDisplay,
    UniformXDependentDisplay,
    UniformDisplay,
    LogNormalDisplay,
    WeibullDisplay,
    BimodalTruncatedNormalDisplay,
    EnumeratedFractionDisplay,
    EnumeratedParameterDisplay,
    ContaminationDefinitionDisplay,
    DistributionChart,
    TextValueDisplay,
  },
})
export default class ParameterDistributionSelector extends Vue {
  @State(nameof<IParameterSelection>((s) => s.currentSelectedParameter), { namespace: StoreNames.PARAMETER_SELECTION })
  currentSelectedParameter!: ParameterWrapper;

  @State(nameof<IParameterSelection>((s) => s.scenarioDefinitionMode), { namespace: StoreNames.PARAMETER_SELECTION })
  scenarioDefinitionMode!: ScenarioDefinitionMode;

  @Getter(ParameterSelectionStoreGetters.CAN_RUN, { namespace: StoreNames.PARAMETER_SELECTION }) hasResults!: boolean;

  @Action(JobsStoreActions.RESET_CURRENT_JOB_REQUEST, { namespace: StoreNames.JOBS })
  resetCurrentJobRequest!: () => void;

  parameterConverter = container.get<IParameterConverter>(TYPES.ParameterConverter);

  @Watch('currentSelectedParameter', { deep: true })
  onCurrentSelectedParameterChange(newValue: ParameterWrapper, oldValue: ParameterWrapper): void {
    this.currentDistType = newValue.type;

    const isDifferentParameter = oldValue.path !== newValue.path;
    if (this.hasResults && !isDifferentParameter) {
      this.resetCurrentJobRequest();
    }
  }

  currentDistType = ParameterType.constant;

  get display(): DistributionDisplay {
    return container
      .get<IDistributionDisplayProvider>(TYPES.DistributionDisplayProvider)
      .getDistributionDisplay(this.currentSelectedParameter.baseline, this.currentSelectedParameter.current);
  }

  get distNames(): ParameterType[] {
    const { upperLimit, step } = this.currentSelectedParameter.baseline.metaData;
    return upperLimit > 1 + step ? changeableDistributionTypes : nonLogDistributionTypes;
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

<style scoped lang="scss">
.v-card__title {
  word-break: normal;
}
</style>
