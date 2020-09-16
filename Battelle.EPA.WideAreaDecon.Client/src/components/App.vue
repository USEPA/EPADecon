<template>
  <v-app>
    <div>Hello world!</div>
    <nav-bar />

    <!-- Content Router -->
    <v-main>
      <router-view />
    </v-main>

    <footer-bar />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/base/NavigationBar.vue';
import FooterBar from '@/components/base/FooterBar.vue';

@Component({
  components: {
    NavBar,
    FooterBar,
  },
})
export default class App extends Vue {
  // eslint-disable-next-line class-methods-use-this
  mounted(): void {
    // eslint-disable-next-line no-console
    console.log('APP MOUNTED');
  }
}
</script>
<style scoped lang="scss">
.disabled-tool-tip {
  cursor: no-drop;
}
</style>
