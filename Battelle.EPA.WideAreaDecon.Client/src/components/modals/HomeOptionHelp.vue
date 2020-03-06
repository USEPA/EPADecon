<template>
  <v-dialog :max-width="maxWidth">
    <template v-slot:activator="{ on }">
      <v-icon v-on="on" @click="selectedHelpItem = item">help</v-icon>
    </template>
    <v-card>
      <v-card-title class="headline" v-text="item.title + ' Help'" />
      <v-card-text v-text="item.helpMessage" />
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import container from '@/dependencyInjection/config';
import IImageProvider from '@/interfaces/providers/IImageProvider';
import TYPES from '@/dependencyInjection/types';
import IHomeOptionsProvider from '@/interfaces/providers/IHomeOptionsProvider';
import IHomeOptions from '../../interfaces/configuration/IHomeOptions';

@Component
export default class HomeOptionHelp extends Vue {
  @Prop() item!: IHomeOptions;

  @Prop({ default: 600 }) maxWidth!: number;

  @State applicationTitle!: string;

  @State applicationSponsor!: string;

  data = container.get<IHomeOptionsProvider>(TYPES.HomeOptionsProvider).getOptions();

  selectedHelpItem?: IHomeOptions;

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-explicit-any
  getImage(name: string): any {
    return container.get<IImageProvider>(TYPES.ImageProvider).getImage(name);
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
  itemSelected(item: IHomeOptions) {
    this.$router.push(item.linkPage);
  }

  created() {
    this.$store.commit('disableNavigationTabs');
  }
}
</script>

<style scoped lang="scss"></style>
