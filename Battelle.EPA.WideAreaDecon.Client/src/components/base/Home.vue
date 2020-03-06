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
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" height="300">
            <v-card flat v-for="(item, n) in data" :key="n" class="pa-6">
              <v-container>
                <v-toolbar width="300" color="primary">
                  <v-toolbar-title class="subtitle-1" v-text="item.title" />
                  <v-spacer />
                  <v-icon @click="showHelp(item.helpMessage)">help</v-icon>
                </v-toolbar>
                <v-card :color="'secondary'" class="d-flex align-center" dark height="300" @click="itemSelected(item)">
                  <v-img :src="getImage(item.image)" max-width="300" />
                </v-card>
              </v-container>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-item-group>
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
    </v-item-group> -->
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import container from '../../dependencyInjection/config';
import IImageProvider from '../../interfaces/providers/IImageProvider';
import TYPES from '../../dependencyInjection/types';
import IHomeOptionsProvider from '../../interfaces/providers/IHomeOptionsProvider';

const imageProvider = container.get<IImageProvider>(TYPES.ImageProvider);
const homeOptions = container.get<IHomeOptionsProvider>(TYPES.HomeOptionsProvider).getOptions();

@Component
export default class Home extends Vue {
  @State applicationTitle!: string;

  @State applicationSponsor!: string;

  data = homeOptions;

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-explicit-any
  getImage(name: string): any {
    return imageProvider.getImage(name);
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
  showHelp(message: string): void {
    // do nothing
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
  itemSelected(item: any) {
    // do nothing
  }
}
</script>

<style scoped lang="scss"></style>
