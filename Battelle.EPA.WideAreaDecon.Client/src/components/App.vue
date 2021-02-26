<template>
  <v-app>
    <div>Hello world!</div>
    <nav-bar @visible="visible = true" />

    <!-- Content Router -->
    <v-main>
      <run-scenario @close="visible = false" :visible="visible" />
      <router-view />
    </v-main>

    <footer-bar />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/base/NavigationBar.vue';
import RunScenario from '@/components/modals/RunScenario.vue';
import FooterBar from '@/components/base/FooterBar.vue';

@Component({
  components: {
    NavBar,
    FooterBar,
    RunScenario,
  },
})
export default class App extends Vue {
  visible = false;
}
</script>
<style scoped lang="scss">
.disabled-tool-tip {
  cursor: no-drop;
}
</style>
