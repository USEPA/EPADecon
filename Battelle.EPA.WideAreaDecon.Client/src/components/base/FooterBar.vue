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
import { StoreNames } from '@/constants/store/store';
import { nameof } from 'ts-simple-nameof';
import IClientConfiguration from '@/interfaces/configuration/IClientConfiguration';

@Component
export default class FooterBar extends Vue {
  @State(nameof<IClientConfiguration>((s) => s.publisherName), { namespace: StoreNames.CLIENT_CONFIGURATION })
  publisherName!: string;

  @State(nameof<IClientConfiguration>((s) => s.applicationVersion), { namespace: StoreNames.CLIENT_CONFIGURATION })
  applicationVersion!: string;
}
</script>

<style scoped lang="scss">
.disabled-tool-tip {
  cursor: no-drop;
}
</style>
