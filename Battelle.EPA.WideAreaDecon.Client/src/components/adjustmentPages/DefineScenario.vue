<template>
  <v-container :fill-height="!!scenarioDefinitionMode" fluid>
    <template v-if="!scenarioDefinitionMode">
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
      <v-row align="center">
        <v-btn @click="setScenarioDefinitionMode(null)"> Change Selection Method </v-btn>
      </v-row>

      <parameter-selection-drawer :parameters="scenarioDefinition" />
      <parameter-distribution-selector />
    </template>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import ParameterSelectionDrawer from '@/components/parameters/ParameterSelectionDrawer.vue';
import ParameterList from '@/implementations/parameter/ParameterList';
import ParameterDistributionSelector from '@/components/parameters/distributionDisplay/ParameterDistributionSelector.vue';
import container from '@/dependencyInjection/config';
import IImageProvider from '@/interfaces/providers/IImageProvider';
import TYPES from '@/dependencyInjection/types';
import { ScenarioDefinitionMode } from '@/types';
import ParameterWrapper from '../../implementations/parameter/ParameterWrapper';

@Component({
  components: { ParameterSelectionDrawer, ParameterDistributionSelector },
})
export default class DefineScenario extends Vue {
  @State scenarioDefinition!: ParameterList;

  @State scenarioDefinitionMode!: ScenarioDefinitionMode | null;

  @Action setScenarioDefinitionMode!: (newMode: ScenarioDefinitionMode | null) => void;

  imgProvider = container.get<IImageProvider>(TYPES.ImageProvider);

  // TODO move to provider
  options = [
    {
      title: 'Geospatial Selection',
      image: 'MapPlume',
      helpMessage: 'Place plumes on a map to define the area contaminated',
      helpActive: false,
      value: 'geospatial',
    },
    {
      title: 'Manual Selection',
      image: 'CreateScenario', // TODO find different image
      helpMessage: 'Enter the total area contaminated manualy',
      helpActive: false,
      value: 'manual',
    },
  ];

  getImage(img: string): unknown {
    return this.imgProvider.getImage(img);
  }

  created(): void {
    this.$store.commit('changeCurrentSelectedParameter', new ParameterWrapper());
    this.$store.commit('enableNavigationTabs');
  }
}
</script>

<style scoped lang="scss"></style>
