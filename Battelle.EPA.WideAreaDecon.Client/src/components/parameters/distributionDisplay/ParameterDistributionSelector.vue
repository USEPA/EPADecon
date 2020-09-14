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
    <component :key="componentKey" :is="distComponent" :selected-parameter="currentSelectedParameter"> </component>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterType from '@/enums/parameter/parameterTypes';
import NullDisplay from '@/components/parameters/distributionDisplay/NullDisplay.vue';
import UnknownDisplay from '@/components/parameters/distributionDisplay/UnknownDisplay.vue';
import ConstantDisplay from '@/components/parameters/distributionDisplay/ConstantDisplay.vue';
import ContaminatedBuildingTypesDisplay from '@/components/parameters/distributionDisplay/ContaminatedBuildingTypesDisplay.vue';
import LogUniformDisplay from '@/components/parameters/distributionDisplay/LogUniformDisplay.vue';
import BetaPertDisplay from '@/components/parameters/distributionDisplay/BetaPertDisplay.vue';
import TruncatedLogNormalDisplay from '@/components/parameters/distributionDisplay/TruncatedLogNormalDisplay.vue';
import TruncatedNormalDisplay from '@/components/parameters/distributionDisplay/TruncatedNormalDisplay.vue';
import UniformDisplay from '@/components/parameters/distributionDisplay/UniformDisplay.vue';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import { changeableDistributionTypes } from '@/mixin/parameterMixin';
import container from '@/dependencyInjection/config';
import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import TYPES from '@/dependencyInjection/types';

@Component({
  components: {
    NullDisplay,
    UnknownDisplay,
    ConstantDisplay,
    ContaminatedBuildingTypesDisplay,
    LogUniformDisplay,
    BetaPertDisplay,
    TruncatedLogNormalDisplay,
    TruncatedNormalDisplay,
    UniformDisplay,
  },
})
export default class ParameterDistributionSelector extends Vue {
  @State currentSelectedParameter!: ParameterWrapper;

  parameterConverter = container.get<IParameterConverter>(TYPES.ParameterConverter);

  @Watch('currentSelectedParameter')
  onCurrentSelectedParameterChange() {
    this.currentDistType = this.currentSelectedParameter.type;
  }

  componentKey = 0;

  currentDistType = ParameterType.constant;

  distNames = changeableDistributionTypes;

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
      case ParameterType.contaminatedBuildingTypes:
        return 'contaminated-building-types-display';
      case ParameterType.truncatedLogNormal:
        return 'truncated-log-normal-display';
      case ParameterType.truncatedNormal:
        return 'truncated-normal-display';
      case ParameterType.uniform:
        return 'uniform-display';
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

  resetParameter() {
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

  created() {
    this.currentDistType = this.currentSelectedParameter.type;
  }
}
</script>

<style scoped lang="scss"></style>
