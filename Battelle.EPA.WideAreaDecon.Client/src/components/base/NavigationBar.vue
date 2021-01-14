<template>
  <!-- Navigation Bar -->
  <v-app-bar app color="primary" clipped-left>
    <!-- Navigate to home icon -->
    <v-tab :to="'/'">
      <v-avatar color="white">
        <v-img :src="imageProvider.getImage('EpaLogo')" />
      </v-avatar>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col>
            <v-flex class="text-center title" v-text="applicationAcronym" />
          </v-col>
        </v-row>
      </v-container>
    </v-tab>
    <v-spacer></v-spacer>

    <!-- Application title -->
    <v-toolbar-title class="title" v-text="applicationTitle"></v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- Run button -->
    <v-tooltip bottom :color="canRun ? 'info' : 'error'">
      <template v-slot:activator="{ on }">
        <div v-on="on" :class="canRun ? 'v-btn' : 'disabled-tool-tip'" :color="canRun ? 'secondary' : ''">
          <v-btn v-on="on" @click="runScenario()" :disabled="!canRun" :color="canRun ? 'secondary' : ''">
            Run Scenario
          </v-btn>
        </div>
      </template>
      <span v-if="canRun">Runs the model and generates results</span>
      <span v-if="!canRun">Please define scenario to run model...</span>
    </v-tooltip>

    <!-- Dropdown menu -->
    <v-menu left bottom v-if="false">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <template v-for="(action, i) in applicationActions">
          <v-list-item :key="i" @click="action.onSelected" v-if="action.enabled">
            <v-list-item-icon>
              <v-icon v-text="action.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ action.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>

    <!-- Navigation tabs -->
    <v-tabs
      v-if="enableNavigationTabs"
      v-model="selectedNavigationRoute"
      dark
      color="secondary"
      slot="extension"
      :centered="true"
      :grow="true"
      :icons-and-text="true"
    >
      <v-tabs-slider></v-tabs-slider>
      <template v-for="(item, i) in navigationItems">
        <v-tooltip bottom :key="i" v-if="item.enabled" color="info">
          <template v-slot:activator="{ on }">
            <v-tab :class="getClassName(item.link)" v-on="on" :to="item.link" :disabled="!item.enabled">
              {{ item.title }}
              <v-icon :class="getClassName(item.link)">{{ item.icon }}</v-icon>
              <v-badge
                v-if="item.getNumberInvalid() > 0"
                color="error"
                :content="item.getNumberInvalid()"
                offset-x="-150"
                offset-y="20"
              />
            </v-tab>
          </template>
          <span>{{ item.tooltip.enabled }}</span>
        </v-tooltip>

        <v-tooltip bottom :key="i" v-if="!item.enabled" color="error">
          <template v-slot:activator="{ on }">
            <div v-on="on" class="v-tab disabled-tool-tip">
              <v-tab value="true" :to="item.link" :disabled="!item.enabled">
                {{ item.title }}
                <v-icon>{{ item.icon }}</v-icon>
              </v-tab>
            </div>
          </template>
          <span>{{ item.tooltip.disabled }}</span>
        </v-tooltip>
      </template>
    </v-tabs>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Getter, Action } from 'vuex-class';
import { Component } from 'vue-property-decorator';
import IApplicationAction from '@/interfaces/configuration/IApplicationAction';
import INavigationItem from '@/interfaces/configuration/INavigationItem';
import container from '@/dependencyInjection/config';
import IImageProvider from '@/interfaces/providers/IImageProvider';
import TYPES from '@/dependencyInjection/types';

@Component
export default class NavigationBar extends Vue {
  @State applicationTitle!: string;

  @State applicationAcronym!: string;

  @Getter canRun!: boolean;

  @State applicationActions!: IApplicationAction[];

  @State navigationItems!: INavigationItem[];

  @State enableNavigationTabs!: boolean;

  @Action runScenario!: () => void;

  imageProvider = container.get<IImageProvider>(TYPES.ImageProvider);

  selectedNavigationRoute: string | null = null;

  selectedTabName!: never;

  getClassName(name: string): string {
    return this.$vuetify.theme.dark ? this.getDarkClassName(name) : this.getLightClassName(name);
  }

  getLightClassName(name: string): string {
    return name === this.selectedNavigationRoute ? 'secondary--text text--darken-1' : 'info--text text--lighten-2';
  }

  getDarkClassName(name: string): string {
    return name === this.selectedNavigationRoute ? 'secondary--text text--lighten-3' : 'info--text text--lighten-4';
  }

  mounted(): void {
    if (this.selectedNavigationRoute && this.$router.currentRoute.path !== this.selectedNavigationRoute) {
      this.$router.push(this.selectedNavigationRoute);
    }
  }
}
</script>

<style scoped lang="scss">
.disabled-tool-tip {
  cursor: no-drop;
}
</style>
