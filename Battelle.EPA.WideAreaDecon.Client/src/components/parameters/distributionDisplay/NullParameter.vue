<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
        <p class="text-center display-3">Select a parameter to edit from the left menu...</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import IParameter from '../../../interfaces/parameter/IParameter';

@Component
export default class NullParameter extends Vue {
  @State selectedScenarioParameter!: IParameter;
}
</script>

<style scoped lang="scss"></style>
