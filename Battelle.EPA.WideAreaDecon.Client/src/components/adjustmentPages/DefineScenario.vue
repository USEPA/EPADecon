<template>
  <v-container :fill-height="!!scenarioDefinitionMode" fluid>
    <template v-if="!scenarioDefinitionMode">
      <p class="text-h5 text-center">Choose Contamination Definition Type:</p>

      <v-row justify="center">
        <v-card v-for="option in options" :key="option.title" flat class="pa-5">
          <v-toolbar color="primary" width="250">
            <v-toolbar-title class="subtitle-1"> {{ option.title }} </v-toolbar-title>

            <v-spacer />

            <v-dialog v-model="option.helpActive" max-width="600">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">help</v-icon>
              </template>
              <v-card class="mx-auto">
                <v-system-bar class="mb-3" color="primary" height="60">
                  <v-card-title class="title"> {{ option.title }} </v-card-title>
                  <v-spacer />
                  <v-icon @click="option.helpActive = false" size="45">mdi-close</v-icon>
                </v-system-bar>
                <v-card-text class="body-1"> {{ option.helpMessage }} </v-card-text>
              </v-card>
            </v-dialog>
          </v-toolbar>

          <v-card @click="setScenarioDefinitionMode(option.value)" height="250" rounded="t-0" width="250">
            <v-img :src="getImage(option.image)" width="250" height="250" />
          </v-card>
        </v-card>
      </v-row>
    </template>

    <template v-else>
      <parameter-selection-drawer :parameters="scenarioDefinition" />
      <parameter-distribution-selector />
    </template>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { nameof } from 'ts-simple-nameof';
import { StoreNames } from '@/constants/store/store';
import { Action, State } from 'vuex-class';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import { ParameterSelectionStoreActions, ParameterSelectionStoreMutations } from '@/constants/store/ParameterSelection';
import ParameterSelectionDrawer from '@/components/parameters/ParameterSelectionDrawer.vue';
import ParameterList from '@/implementations/parameter/ParameterList';
import ParameterDistributionSelector from '@/components/parameters/distributionDisplay/ParameterDistributionSelector.vue';
import container from '@/dependencyInjection/config';
import IImageProvider from '@/interfaces/providers/IImageProvider';
import TYPES from '@/dependencyInjection/types';
import { ScenarioDefinitionMode } from '@/types';
import { NavigationSettingsStoreMutations } from '@/constants/store/NavigationSettings';
import ParameterWrapper from '../../implementations/parameter/ParameterWrapper';

@Component({
  components: { ParameterSelectionDrawer, ParameterDistributionSelector },
})
export default class DefineScenario extends Vue {
  @State(nameof<IParameterSelection>((s) => s.scenarioDefinition), { namespace: StoreNames.PARAMETER_SELECTION })
  scenarioDefinition!: ParameterList;

  @State(nameof<IParameterSelection>((s) => s.scenarioDefinitionMode), { namespace: StoreNames.PARAMETER_SELECTION })
  scenarioDefinitionMode!: ScenarioDefinitionMode | null;

  @Action(ParameterSelectionStoreActions.SET_SCENARIO_DEFINITION_MODE, { namespace: StoreNames.PARAMETER_SELECTION })
  setScenarioDefinitionMode!: (newMode: ScenarioDefinitionMode | null) => void;

  imgProvider = container.get<IImageProvider>(TYPES.ImageProvider);

  // TODO move to provider
  options = [
    {
      title: 'Map-Based',
      image: 'MapPlume',
      helpMessage: 'Draw plumes on a map or upload shapefiles to define the area contaminated and loading',
      helpActive: false,
      value: 'geospatial',
    },
    {
      title: 'Numerical Inputs',
      image: 'CreateScenario', // TODO find different image
      helpMessage: 'Use numerical inputs to define the total area contaminated and loading',
      helpActive: false,
      value: 'manual',
    },
  ];

  getImage(img: string): unknown {
    return this.imgProvider.getImage(img);
  }

  created(): void {
    this.$store.commit(
      `${StoreNames.PARAMETER_SELECTION}/${ParameterSelectionStoreMutations.CHANGE_CURRENT_SELECTED_PARAMETER}`,
      new ParameterWrapper(),
    );
    this.$store.commit(`${StoreNames.NAVIGATION_SETTINGS}/${NavigationSettingsStoreMutations.ENABLE_NAVIGATION_TABS}`);
  }
}
</script>

<style scoped lang="scss"></style>
