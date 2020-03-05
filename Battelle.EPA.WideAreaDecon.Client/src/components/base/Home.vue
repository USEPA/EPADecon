<template>
  <v-container>
    <!-- Application Title Information -->
    <v-row align="center" justify="center">
      <v-col>
        <p class="primary--text text--darken-4 text-center display-3 font-weight-bold">
          {{ applicationTitle }}
        </p>
        <p class="primary--text text--darken-4 text-center title">
          {{ applicationSponsor }}
        </p>
        <v-img src="@/assets/epaLogo.png" max-height="125" contain></v-img>
        <p />
      </v-col>
    </v-row>
    <v-item-group>
      <v-row>
        <v-spacer cols="2" />
        <v-col align-self="center" v-for="(item, n) in data" :key="n" cols="4">
          <v-item>
            <v-container>
              <v-toolbar color="primary">
                <v-toolbar-title v-text="item.title" />
                <v-spacer />
                <v-icon @click=";">help</v-icon>
              </v-toolbar>
              <v-card :color="'secondary'" class="d-flex align-center" dark height="300" @click=";" >
                <v-img src="@/assets/CreateScenario.png" max-width="300" />
              </v-card>
            </v-container>
          </v-item>
        </v-col>
        <v-spacer cols="2" />
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class Home extends Vue {
  @State applicationTitle!: string;

  @State applicationSponsor!: string;

  data = [
    {
      title: 'Create New Scenario',
      image: '@/assets/CreateScenario.png',
    },
    {
      title: 'Create Pre-Defined Scenario',
      image: '@/assets/LoadPresetScenario.jpg',
    },
    {
      title: 'Load Previous Scenario',
      image: '@/assets/LoadPreviousScenario.png',
    },
  ];
}
</script>

<style scoped lang="scss"></style>
