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
import { Component, Vue } from 'vue-property-decorator';
import { StoreOptions } from 'vuex';
import NavBar from './components/base/NavigationBar.vue';
import FooterBar from './components/base/FooterBar.vue';
import { IClientConfigurationProvider } from './interfaces/providers/IClientConfigurationProvider';
import container from './dependencyInjection/inversify.config';
import { TYPES } from './dependencyInjection/types';

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
