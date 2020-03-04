<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
        <p class="text-center display-3">Scenario definition page under construction...</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterList from '../../implementations/parameter/ParameterList';

@Component
export default class DefineScenario extends Vue {
  @State currentScenarioParameters!: ParameterList;

  created() {
    this.$store.commit('updateRunState', false);
  }
}
</script>

<style scoped lang="scss"></style>
