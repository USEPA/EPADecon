<template>
  <v-card height="100%" width="100%">
    <v-row>
      <v-col cols="auto" class="mr-auto">
        <v-card-title v-if="shouldIncludeTitle" v-text="currentSelectedParameter.path" />
      </v-col>
      <v-col align-self="center" cols="3">
        <v-btn v-if="shouldIncludeTitle && parameterHasChanged" color="secondary" @click="resetParameter"
          >Reset Parameter</v-btn
        >
      </v-col>
    </v-row>
    <v-divider color="grey" v-if="shouldIncludeTitle"></v-divider>
    <component :key="componentKey" :is="distComponent" :selected-parameter="currentSelectedParameter"> </component>
    <v-container>
      <v-row v-if="isChangeableDist">
        <v-row align="center" justify="start">
          <v-col cols="auto">
            <p class="title">Type:</p>
          </v-col>

          <v-col cols="3">
            <v-container id="dropdown-example-1">
              <v-overflow-btn
                @change="onDistributionTypeChange"
                class="my-2"
                v-model="currentDistType"
                :items="distNames"
                target="#dropdown-example-1"
                full-width
              />
            </v-container>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterType from '@/enums/parameter/parameterTypes';
import NullParameterDisplay from '@/components/parameters/distributionDisplay/NullParameterDisplay.vue';
import UnknownParameterDisplay from '@/components/parameters/distributionDisplay/UnknownParameterDisplay.vue';
import ConstantParameterDisplay from '@/components/parameters/distributionDisplay/ConstantParameterDisplay.vue';
import ContaminatedBuildingTypes from '@/components/parameters/distributionDisplay/ContaminatedBuildingTypes.vue';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import { changeableDistributionTypes } from '@/mixin/parameterMixin';

@Component({
  components: { NullParameterDisplay, UnknownParameterDisplay, ConstantParameterDisplay, ContaminatedBuildingTypes },
})
export default class ParameterDistributionSelector extends Vue {
  @State currentSelectedParameter!: ParameterWrapper;

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
        return 'null-parameter-display';
      case ParameterType.constant:
        return 'constant-parameter-display';
      case ParameterType.contaminatedBuildingTypes:
        return 'contaminated-building-types';
      default:
        return 'unknown-parameter-display';
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
    this.$store.commit('changeCurrentParameterType', this.currentDistType);
  }

  created() {
    this.currentDistType = this.currentSelectedParameter.type;
  }
}
</script>

<style scoped lang="scss"></style>
