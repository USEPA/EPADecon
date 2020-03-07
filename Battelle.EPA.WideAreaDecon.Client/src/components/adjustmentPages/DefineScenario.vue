<template>
  <v-container fill-height fluid>
    <parameter-selection-drawer :parameters="currentScenarioDefinition" />
    <parameter-distribution-selector />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterSelectionDrawer from '@/components/parameters/ParameterSelectionDrawer.vue';
import ParameterList from '@/implementations/parameter/ParameterList';
import ParameterDistributionSelector from '@/components/parameters/distributionDisplay/ParameterDistributionSelector.vue';
import NullParameter from '@/implementations/parameter/NullParameter';

@Component({
  components: { ParameterSelectionDrawer, ParameterDistributionSelector },
})
export default class DefineScenario extends Vue {
  @State currentScenarioDefinition!: ParameterList;

  created() {
    this.$store.commit('changeCurrentSelectedParameter', new NullParameter());
    this.$store.commit('enableNavigationTabs');
  }
}
</script>

<style scoped lang="scss"></style>
