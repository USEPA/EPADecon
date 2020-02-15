<template>
  <v-app>
    <v-app-bar
      app
      :clipped-left="clipped"
      color='primary'
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer app>
      <span>&nbsp;Battelle Memorial Institute&nbsp;&copy;&nbsp;2020</span>
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
  private clipped: boolean = true;
  private drawer: boolean = true;
  private miniVariant: boolean = false;
  private right: boolean = true;
  private title: string = 'Wide Area Decontamination Tool';
  private items = [
    { title: 'Home', icon: 'home', link: '/' },
  ];

  created(): void {
    console.log(this);
  }
}
</script>
