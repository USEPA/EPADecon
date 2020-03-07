<template>
  <v-container fill-height fluid>
    <parameter-selection-drawer :parameters="scenarioDefinition" />
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
import ParameterWrapper from '../../implementations/parameter/ParameterWrapper';

@Component({
  components: { ParameterSelectionDrawer, ParameterDistributionSelector },
})
export default class DefineScenario extends Vue {
  @State scenarioDefinition!: ParameterList;

  created() {
    this.$store.commit('changeCurrentSelectedParameter', new ParameterWrapper());
    this.$store.commit('enableNavigationTabs');
  }
}
</script>

<style scoped lang="scss"></style>
