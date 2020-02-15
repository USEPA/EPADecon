<template>
  <v-app>
    <v-app-bar app :clipped-left="clipped" color="info" dark>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer app>
      <span>&nbsp;Battelle Memorial Institute&nbsp;&copy;&nbsp;2020</span>
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { },
})
export default class App extends Vue {
  private clipped: boolean = true;
  private drawer: boolean = true;
  private miniVariant: boolean = false;
  private right: boolean = true;
  private title: string = 'Wide Area Decontamination Tool';
  private items = [
    { title: 'Home', icon: 'home', link: '/' },
    { title: 'Counter', icon: 'touch_app', link: '/counter' },
    { title: 'Fetch data', icon: 'get_app', link: '/fetch-data' },
  ];
}
</script>
