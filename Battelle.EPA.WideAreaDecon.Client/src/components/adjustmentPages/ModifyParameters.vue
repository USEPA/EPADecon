<template>
  <v-container fill-height fluid>
    <parameter-selection-drawer
      :parameters="currentScenarioParameters"
      :parameterMutationPath="'changeSelectedScenarioParameter'"
    />
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col>
          <p class="text-center display-3">Scenario definition page under construction...</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterSelectionDrawer from '@/components/parameters/ParameterSelectionDrawer.vue';
import NullParameter from '@/implementations/parameter/NullParameter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterList from '../../implementations/parameter/ParameterList';

@Component({
  components: { ParameterSelectionDrawer },
})
export default class DefineScenario extends Vue {
  @State currentScenarioParameters!: ParameterList;

  @State selectedScenarioParameter!: IParameter;

  created() {
    this.$store.commit('changeSelectedScenarioParameter', new NullParameter());
    this.$store.commit('enableNavigationTabs');
  }
}
</script>

<style scoped lang="scss"></style>
