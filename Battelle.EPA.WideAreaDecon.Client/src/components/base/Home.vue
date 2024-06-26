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
                  <home-option-help :item="item"></home-option-help>
                </v-toolbar>
                <v-card
                  :color="'secondary'"
                  class="d-flex align-center"
                  height="300"
                  rounded="t-0"
                  @click="itemSelected(item)"
                >
                  <v-img :src="getImage(item.image)" max-width="300" />
                </v-card>
              </v-container>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <component
      v-if="modalActive"
      :is="componentName"
      :dialogActive="modalActive"
      @closed="modalActive = false"
    ></component>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import container from '@/dependencyInjection/config';
import IImageProvider from '@/interfaces/providers/IImageProvider';
import TYPES from '@/dependencyInjection/types';
import IHomeOptionsProvider from '@/interfaces/providers/IHomeOptionsProvider';
import IHomeOptions from '@/interfaces/configuration/IHomeOptions';
import HomeOptionHelp from '@/components/modals/HomeOptionHelp.vue';
import LoadPreDefinedScenario from '@/components/modals/load/LoadPreDefinedScenario.vue';
import LoadPreviousScenario from '@/components/modals/load/LoadPreviousScenario.vue';
import { nameof } from 'ts-simple-nameof';
import { StoreNames } from '@/constants/store/store';
import IClientConfiguration from '@/interfaces/configuration/IClientConfiguration';
import { NavigationSettingsStoreMutations } from '@/constants/store/NavigationSettings';

@Component({ components: { HomeOptionHelp, LoadPreDefinedScenario, LoadPreviousScenario } })
export default class Home extends Vue {
  @State(nameof<IClientConfiguration>((s) => s.applicationTitle), { namespace: StoreNames.CLIENT_CONFIGURATION })
  applicationTitle!: string;

  @State(nameof<IClientConfiguration>((s) => s.applicationSponsor), { namespace: StoreNames.CLIENT_CONFIGURATION })
  applicationSponsor!: string;

  data = container.get<IHomeOptionsProvider>(TYPES.HomeOptionsProvider).getOptions();

  modalActive = false;

  componentName = '';

  getImage(name: string): unknown {
    return container.get<IImageProvider>(TYPES.ImageProvider).getImage(name);
  }

  async itemSelected(item: IHomeOptions): Promise<void> {
    if (item.action.initialActionAsync) {
      await item.action.initialActionAsync();
    }

    if (item.action.isModal()) {
      this.modalActive = true;
      this.componentName = item.action.getNext();
    } else {
      this.$router.push(item.action.getNext());
    }
  }

  created(): void {
    this.$store.commit(`${StoreNames.NAVIGATION_SETTINGS}/${NavigationSettingsStoreMutations.DISABLE_NAVIGATION_TABS}`);
  }
}
</script>

<style scoped lang="scss"></style>
