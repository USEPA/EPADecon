<template>
  <!-- Application Footer -->
  <v-footer app>
    <span>&nbsp;Developed by {{ publisherName }}</span>
    <v-spacer />
    <span>Version {{ applicationVersion }}</span>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { State } from 'vuex-class';
import { Component } from 'vue-property-decorator';

@Component
export default class FooterBar extends Vue {
  @State applicationVersion!: string;
  @State publisherName!: string;
}
</script>

<style scoped lang="scss">
.disabled-tool-tip {
  cursor: no-drop;
}
</style>
