<template>
  <v-container fill-height fluid>
    <component :is="distComponent()" :selected-parameter="currentSelectedParameter"> </component>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterTypes';
import NullParameterDisplay from '@/components/parameters/distributionDisplay/NullParameterDisplay.vue';
import UnknownParameterDisplay from '@/components/parameters/distributionDisplay/UnknownParameterDisplay.vue';

@Component({ components: { NullParameterDisplay, UnknownParameterDisplay } })
export default class ParameterDistributionSelector extends Vue {
  @State currentSelectedParameter!: IParameter;

  distComponent(): string {
    switch (this.currentSelectedParameter.type) {
      case ParameterType.null:
        return 'null-parameter-display';
      default:
        return 'unknown-parameter-display';
    }
  }
}
</script>

<style scoped lang="scss"></style>
