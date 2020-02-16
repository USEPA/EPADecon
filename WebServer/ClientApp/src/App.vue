<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar
      app
      color="primary"
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer ></v-spacer>
      <v-btn color="secondary">
        Run Scenario
      </v-btn>
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
        <template
          v-for="(item, i) in items">
          
        <v-tooltip 
          bottom
          :key="i">
          <template v-slot:activator="{ on }">
            <v-tab
              value="true"
              :to="item.link"
              :disabled="item.disabled"
              v-on="on"
            >
              {{ item.title }}
              <v-icon>{{item.icon}}</v-icon>
            </v-tab>
          </template>
          <span>Tool text goes here</span>
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
      <span>&nbsp;Battelle Memorial Institute&nbsp;&copy;&nbsp;2020</span>
      <v-spacer />
      <span>Version {{ getVersion() }}</span>
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ClientConfiguration from './interface/clientConfiguration';
import Axios from 'axios';
import { watch } from 'fs';
import Vuetify from 'vuetify';

@Component({
  components: {},
})
export default class App extends Vue {
  private width: number;
  private title: string = 'Wide Area Decontamination Tool';
  private selectedParameter: string = 'scenario';
  private items = [
    {
      title: 'Define Scenario',
      icon: 'fa-biohazard',
      link: '/DefineScenario',
      disabled: false,
    },
    {
      title: 'Modify Parameters',
      icon: 'fa-shower',
      link: '/ModifyParameters',
      disabled: false,
    },
    {
      title: 'View Results',
      icon: 'fa-building',
      link: '/ViewResults',
      disabled: true,
    },
  ];

  constructor() {
    super();
    let size = 256;
    this.items.forEach(item => {
      if (this.getSize(item.title.length) > size) {
        size = this.getSize(item.title.length);
      }
    });

    this.width = size;
  }

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
