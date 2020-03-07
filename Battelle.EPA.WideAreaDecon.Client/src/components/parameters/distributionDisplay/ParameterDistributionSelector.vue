<template>
  <v-card height="100%" width="100%">
    <v-card-title v-if="shouldIncludeTitle">{{ currentSelectedParameter.path }}</v-card-title>
    <v-divider color="grey" v-if="shouldIncludeTitle"></v-divider>
    <component :is="distComponent" :selected-parameter="currentSelectedParameter"> </component>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterType from '@/enums/parameter/parameterTypes';
import NullParameterDisplay from '@/components/parameters/distributionDisplay/NullParameterDisplay.vue';
import UnknownParameterDisplay from '@/components/parameters/distributionDisplay/UnknownParameterDisplay.vue';
import ConstantParameterDisplay from '@/components/parameters/distributionDisplay/ConstantParameterDisplay.vue';
import ParameterWrapper from '../../../implementations/parameter/ParameterWrapper';

@Component({ components: { NullParameterDisplay, UnknownParameterDisplay, ConstantParameterDisplay } })
export default class ParameterDistributionSelector extends Vue {
  @State currentSelectedParameter!: ParameterWrapper;

  get distComponent(): string {
    switch (this.currentSelectedParameter.current.type) {
      case ParameterType.null:
        return 'null-parameter-display';
      case ParameterType.constant:
        return 'constant-parameter-display';
      default:
        return 'unknown-parameter-display';
    }
  }

  get shouldIncludeTitle(): boolean {
    return this.currentSelectedParameter.type !== ParameterType.null;
  }
}
</script>

<style scoped lang="scss"></style>
