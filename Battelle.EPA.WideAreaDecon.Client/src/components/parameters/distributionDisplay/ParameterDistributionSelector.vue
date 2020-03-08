<template>
  <v-card height="100%" width="100%">
    <v-row>
      <v-col cols="4" class="mr-auto">
        <v-card-title v-if="shouldIncludeTitle" v-text="currentSelectedParameter.path" />
      </v-col>
      <v-col cols="3">
        <v-btn v-if="shouldIncludeTitle && parameterHasChanged" color="secondary" @click="resetParameter"
          >Reset Parameter</v-btn
        >
      </v-col>
    </v-row>
    <v-divider color="grey" v-if="shouldIncludeTitle"></v-divider>
    <component :key="componentKey" :is="distComponent" :selected-parameter="currentSelectedParameter"> </component>
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

  componentKey = 0;

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

  get parameterHasChanged(): boolean {
    return this.currentSelectedParameter.isChanged();
  }

  resetParameter() {
    this.$store.commit('resetCurrentSelectedParameter');
    this.componentKey += 1;
  }
}
</script>

<style scoped lang="scss"></style>
