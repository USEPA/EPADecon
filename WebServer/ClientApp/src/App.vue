<template>
  <v-app>
    <nav-bar />

    <!-- Content Router -->
    <v-content>
      <router-view />
    </v-content>

    <footer-bar />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ClientConfiguration from './interface/clientConfiguration';
import Axios from 'axios';
import { watch } from 'fs';
import Vuetify from 'vuetify';
import { State } from 'vuex-class';
import { RootState, NavigationItem } from '@/store/types';
import { StoreOptions } from 'vuex';
import NavBar from './components/base/NavigationBar.vue';
import FooterBar from './components/base/FooterBar.vue';

@Component({
  components: {
    NavBar,
    FooterBar,
  },
})
export default class App extends Vue {
}
</script>
<style scoped lang="scss">
.disabled-tool-tip {
  cursor: no-drop;
}
</style>
