<template>
  <v-container fill-height fluid>
    <parameter-selection-drawer :parameters="scenarioParameters" />
    <parameter-distribution-selector />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterSelectionDrawer from '@/components/parameters/ParameterSelectionDrawer.vue';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import ParameterDistributionSelector from '@/components/parameters/distributionDisplay/ParameterDistributionSelector.vue';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import { StoreNames } from '@/constants/store/store';
import { nameof } from 'ts-simple-nameof';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';

@Component({
  components: { ParameterSelectionDrawer, ParameterDistributionSelector },
})
export default class DefineScenario extends Vue {
  @State(nameof<IParameterSelection>((s) => s.scenarioParameters), { namespace: StoreNames.PARAMETER_SELECTION })
  scenarioParameters!: ParameterWrapperList;

  created(): void {
    this.$store.commit('changeCurrentSelectedParameter', new ParameterWrapper());
    this.$store.commit('enableNavigationTabs');
  }
}
</script>

<style scoped lang="scss"></style>
