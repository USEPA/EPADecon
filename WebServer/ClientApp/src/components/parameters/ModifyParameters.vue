<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
        <p class="text-center display-3">Modify parameters page under construction...</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class ModifyParameters extends Vue {
  @State runSettings!: string;

  static created() {
    console.log('hi');
  }
}
</script>

<style scoped lang="scss"></style>
