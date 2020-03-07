<template>
  <v-container fill-height fluid>
    <parameter-selection-drawer :parameters="currentScenarioParameters" />
    <parameter-distribution-selector />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterSelectionDrawer from '@/components/parameters/ParameterSelectionDrawer.vue';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterList from '@/implementations/parameter/ParameterList';
import NullParameter from '@/implementations/parameter/NullParameter';
import ParameterDistributionSelector from '@/components/parameters/distributionDisplay/ParameterDistributionSelector.vue';

@Component({
  components: { ParameterSelectionDrawer, ParameterDistributionSelector },
})
export default class DefineScenario extends Vue {
  @State currentScenarioParameters!: ParameterList;

  @State selectedScenarioParameter!: IParameter;

  created() {
    this.$store.commit('changeCurrentSelectedParameter', new NullParameter());
    this.$store.commit('enableNavigationTabs');
  }
}
</script>

<style scoped lang="scss"></style>
