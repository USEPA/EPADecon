<template>
  <v-card height="100%" width="100%">
    <v-card-title v-if="currentSelectedParameter.type != 'null'" class="secondary lighten-2">{{
      currentSelectedParameter.name
    }}</v-card-title>
    <v-divider></v-divider>
    <v-container fill-height fluid>
      <component :is="distComponent()" :selected-parameter="currentSelectedParameter"> </component>
    </v-container>
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

  distComponent(): string {
    switch (this.currentSelectedParameter.current.type) {
      case ParameterType.null:
        return 'null-parameter-display';
      case ParameterType.constant:
        return 'constant-parameter-display';
      default:
        return 'unknown-parameter-display';
    }
  }
}
</script>

<style scoped lang="scss"></style>
