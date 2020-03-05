<template>
  <v-navigation-drawer clipped app :width="500">
    <parameter-list-expansion-panel :list="currentScenarioParameters" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterList from '@/implementations/parameter/ParameterList';
import ParameterListExpansionPanel from './ParameterListExpansionPanel.vue';

@Component({
  components: {
    ParameterListExpansionPanel,
  },
})
export default class ParameterSelectionDrawer extends Vue {
  @State currentScenarioParameters!: ParameterList;
}
</script>

<style scoped lang="scss"></style>
