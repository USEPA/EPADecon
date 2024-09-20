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
      </v-col>
    </v-row>

    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-container v-if="disclaimerAcknowledged">
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

            <v-row align="center" justify="center">
              <v-card>
                <v-card-title class="subtitle-1">More Information:</v-card-title>
                <v-card-actions class="justify-space-between">
                  <v-btn @click="openReport" outlined text color="primary darken-1"> View report </v-btn>
                  <v-btn @click="glossaryIsVisible = true" outlined text color="primary darken-1"
                    >View Distribution glossary</v-btn
                  ></v-card-actions
                >
              </v-card>
            </v-row>
          </v-container>

          <v-row v-else align="center" justify="center">
            <v-card class="mt-16" max-width="600">
              <v-card-title> Disclaimer </v-card-title>
              <v-card-text class="text-body-1">
                <p>
                  Execution of any WABRET, and modification to system configuration files must be made at the user's own
                  risk. Neither the U.S. EPA nor the program author(s) can assume responsibility for program
                  modification, content, output, interpretation, or usage.
                </p>
                <p>
                  WABRET has been extensively tested and verified. However, as for all complex software, these programs
                  may not be completely free of errors and may not be applicable for all cases. In no event will the
                  U.S. EPA be liable for direct, indirect, special, incidental, or consequential damages arising out of
                  the use of the programs and/or associated documentation.
                </p>
              </v-card-text>
              <v-card-actions center>
                <v-btn @click="acknowledgeDisclaimer" outlined text color="primary darken-1"
                  >Acknowledge and Continue</v-btn
                >
              </v-card-actions>
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

    <glossary v-model="glossaryIsVisible" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
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
import IClientConfigurationProvider from '@/interfaces/providers/IClientConfigurationProvider';
import { Buffer } from 'buffer';
import IAppSettings from '@/interfaces/store/appSettings/IAppSettings';
import { AppSettingsStoreActions } from '@/constants/store/appsettings';
import Glossary from '@/components/modals/Glossary.vue';

@Component({ components: { HomeOptionHelp, LoadPreDefinedScenario, LoadPreviousScenario, Glossary } })
export default class Home extends Vue {
  @State(nameof<IClientConfiguration>((s) => s.applicationTitle), { namespace: StoreNames.CLIENT_CONFIGURATION })
  applicationTitle!: string;

  @State(nameof<IClientConfiguration>((s) => s.applicationSponsor), { namespace: StoreNames.CLIENT_CONFIGURATION })
  applicationSponsor!: string;

  @State(nameof<IAppSettings>((s) => s.disclaimerAcknowledged), { namespace: StoreNames.APPSETTINGS })
  disclaimerAcknowledged!: boolean;

  @Action(AppSettingsStoreActions.ACKNOWLEDGE_DISCLAIMER, { namespace: StoreNames.APPSETTINGS })
  acknowledgeDisclaimer!: () => void;

  data = container.get<IHomeOptionsProvider>(TYPES.HomeOptionsProvider).getOptions();

  configProvider = container.get<IClientConfigurationProvider>(TYPES.BackendClientConfigurationProvider);

  modalActive = false;

  glossaryIsVisible = false;

  componentName = '';

  getImage(name: string): unknown {
    return container.get<IImageProvider>(TYPES.ImageProvider).getImage(name);
  }

  async openReport(): Promise<void> {
    const base64Report = await this.configProvider.getReport();
    const bytes = Buffer.from(base64Report, 'base64');
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
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
