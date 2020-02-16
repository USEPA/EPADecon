<template>
  <v-app>

    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      color='secondary'
      dark
      :width="width"
      >
      <v-list>
        <v-list-item
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :clipped-left="clipped"
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs
        dark
        color="secondary"
        slot="extension"
        :centered="true"
        :grow="true"
        :icons-and-text="true"
        :clipped-left="clipped"
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          {{ item.title }}
          <v-icon>{{item.icon}}</v-icon>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

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
  private clipped: boolean = true;
  private drawer: boolean = true;
  private miniVariant: boolean = false;
  private right: boolean = true;
  private title: string = 'Wide Area Decontamination Tool';
  private selectedParameter: string = 'scenario';
  private items = [
    { title: 'Scenario Definition', icon: 'fa-biohazard', link: '/' },
    { title: 'Decontamination Efficacy', icon: 'fa-shower', link: '/' },
    { title: 'Indoor Parameters', icon: 'fa-building', link: '/' },
    { title: 'Outdoor Parameters', icon: 'fa-road', link: '/' },
    { title: 'Underground Parameters', icon: 'fa-subway', link: '/' },
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
    if(!this.$store.state.version) {
      return "Unkown";
    }
    return this.$store.state.version;
  }
}
</script>
