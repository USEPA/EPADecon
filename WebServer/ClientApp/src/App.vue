<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar
      app
      color="primary"
    >
      <v-toolbar-title v-text="applicationTitle"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip
        v-if="true"
        bottom
        color="error"
      >
        <template v-slot:activator="{ on }">
          <div
            v-on="on"
            class="disabled-tool-tip"
          >
            <v-btn :disabled="true">
              Run Scenario
            </v-btn>
          </div>
        </template>
        <span>Please define scenario to run model...</span>
      </v-tooltip>
      <v-tooltip
        v-if="false"
        bottom
        color="error"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            :disabled="true"
            v-on="on"
          >
            Run Scenario
          </v-btn>
        </template>
        <span>Runs the model and generates results</span>
      </v-tooltip>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-tabs
        dark
        color="secondary"
        slot="extension"
        :centered="true"
        :grow="true"
        :icons-and-text="true"
      >
        <v-tabs-slider></v-tabs-slider>
        <template v-for="(item, i) in navigationItems">

          <v-tooltip
            bottom
            :key="i"
            v-if="item.enabled"
          >
            <template v-slot:activator="{ on }">
              <v-tab
                v-on="on"
                :to="item.link"
                :disabled="!item.enabled"
              >
                {{ item.title }}
                <v-icon>{{item.icon}}</v-icon>
              </v-tab>
            </template>
            <span>{{item.tooltip.enabled}}</span>
          </v-tooltip>

          <v-tooltip
            bottom
            :key="i"
            v-if="!item.enabled"
            color="error"
          >
            <template v-slot:activator="{ on }">
              <div
                v-on="on"
                class="v-tab disabled-tool-tip"
              >
                <v-tab
                  value="true"
                  :to="item.link"
                  :disabled="!item.enabled"
                >
                  {{ item.title }}
                  <v-icon>{{item.icon}}</v-icon>
                </v-tab>
              </div>
            </template>
            <span>{{item.tooltip.disabled}}</span>
          </v-tooltip>
        </template>
      </v-tabs>
    </v-app-bar>

    <!-- Content Router -->
    <v-content>
      <router-view />
    </v-content>

    <!-- Application Footer -->
    <v-footer app>
      <span>&nbsp;Developed by Battelle Memorial Institute</span>
      <v-spacer />
      <span>Version {{ applicationVersion }}</span>
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ClientConfiguration from './interface/clientConfiguration';
import Axios from 'axios';
import { watch } from 'fs';
import Vuetify from 'vuetify';
import {State} from 'vuex-class';
import { RootState, NavigationItem } from '@/store/types';
import { StoreOptions } from 'vuex';

@Component
export default class App extends Vue {
  
  @State applicationTitle: string | undefined;
  @State navigationItems: NavigationItem[] | undefined;
  @State applicationVersion: string | undefined;


  private getSize(length: number) {
    return 80 + length * 8;
  }

  getVersion() {
    console.log(this.$store.state);
    if (!this.$store.state.version) {
      return 'Unkown';
    }
    return this.$store.state.version;
  }
}
</script>
<style scoped  lang="scss">
.disabled-tool-tip {
  cursor: no-drop;
}
</style>