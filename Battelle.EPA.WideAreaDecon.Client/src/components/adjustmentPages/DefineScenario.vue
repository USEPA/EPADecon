<template>
  <div>
    <v-container v-if="!selection">
      <v-row align="center">
        <v-col align="right">
          <v-card width="260">
            <v-toolbar width="300" color="primary">
              <v-toolbar-title class="subtitle-1"> Geospatial Selection </v-toolbar-title>
              <v-spacer />
              <v-dialog v-model="geoDialog" max-width="600">
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on">help</v-icon>
                </template>
                <v-card class="mx-auto">
                  <v-system-bar color="primary" height="60">
                    <v-toolbar-title class="title">Geospatial Selection</v-toolbar-title>
                    <v-spacer />
                    <v-icon @click="geoDialog = false" size="45">mdi-close</v-icon>
                  </v-system-bar>
                  <v-card-text class="body-1" v-text="'Place plumes on a map to define the area contaminated'" />
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-btn height="250" outlined @click="makeSelection(true)">
              <v-img src="@/assets/MapPlume.png" width="225" height="225" />
            </v-btn>
          </v-card>
        </v-col>
        <v-col align="left">
          <v-card width="260">
            <v-toolbar width="300" color="primary">
              <v-toolbar-title class="subtitle-1"> Manual Selection </v-toolbar-title>
              <v-spacer />
              <v-dialog v-model="dialog" max-width="600">
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on">help</v-icon>
                </template>
                <v-card class="mx-auto">
                  <v-system-bar color="primary" height="60">
                    <v-toolbar-title class="title">Manual Selection</v-toolbar-title>
                    <v-spacer />
                    <v-icon @click="dialog = false" size="45">mdi-close</v-icon>
                  </v-system-bar>
                  <v-card-text class="body-1" v-text="'Enter the total area contaminated manualy'" />
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-btn height="250" outlined @click="makeSelection(false)">
              <v-img src="@/assets/CreateScenario.png" max-width="225" max-height="225" />
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-btn v-if="selection" @click="selection = false"> Selection Method </v-btn>
    <v-container fill-height fluid>
      <parameter-selection-drawer v-if="selection" :parameters="scenarioDefinition" />
      <parameter-distribution-selector v-if="selection" />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterSelectionDrawer from '@/components/parameters/ParameterSelectionDrawer.vue';
import ParameterList from '@/implementations/parameter/ParameterList';
import ParameterDistributionSelector from '@/components/parameters/distributionDisplay/ParameterDistributionSelector.vue';
import ParameterWrapper from '../../implementations/parameter/ParameterWrapper';

@Component({
  components: { ParameterSelectionDrawer, ParameterDistributionSelector },
})
export default class DefineScenario extends Vue {
  @State scenarioDefinition!: ParameterList;

  selection = false;

  geoSpatial = false;

  geoDialog = false;

  dialog = false;

  makeSelection(choice: boolean): void {
    this.selection = true;
    this.geoSpatial = choice;
  }

  created(): void {
    this.$store.commit('changeCurrentSelectedParameter', new ParameterWrapper());
    this.$store.commit('enableNavigationTabs');
  }
}
</script>

<style scoped lang="scss"></style>
