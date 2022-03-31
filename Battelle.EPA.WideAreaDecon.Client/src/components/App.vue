<template>
  <v-app>
    <div>Hello world!</div>
    <nav-bar @showRunModal="showRunModal = true" @showErrorModal="showErrorModal = true" />

    <!-- Content Router -->
    <v-main>
      <run-scenario v-model="showRunModal" />
      <param-errors-modals v-model="showErrorModal" />
      <router-view @showRunModal="showRunModal = true" />
    </v-main>

    <footer-bar />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/base/NavigationBar.vue';
import RunScenario from '@/components/modals/RunScenario.vue';
import ParamErrorsModals from '@/components/modals/ParamErrorsModals.vue';
import FooterBar from '@/components/base/FooterBar.vue';

@Component({
  components: {
    NavBar,
    FooterBar,
    RunScenario,
    ParamErrorsModals,
  },
})
export default class App extends Vue {
  showRunModal = false;

  showErrorModal = false;
}
</script>

<style scoped lang="scss">
.disabled-tool-tip {
  cursor: no-drop;
}
</style>
