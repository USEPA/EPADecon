<template>
  <!-- Navigation Bar -->
  <v-app-bar app color="primary" clipped-left>
    <v-avatar color="white">
      <img src="../../assets/epaLogo.png" />
    </v-avatar>
    <v-spacer></v-spacer>
    <v-toolbar-title v-text="applicationTitle"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tooltip bottom :color="canRun ? 'info' : 'error'">
      <template v-slot:activator="{ on }">
        <div v-on="on" :class="canRun ? 'v-btn' : 'disabled-tool-tip'" :color="canRun ? 'secondary' : ''">
          <v-btn v-on="on" :disabled="!canRun" :color="canRun ? 'secondary' : ''">
            Run Scenario
          </v-btn>
        </div>
      </template>
      <span v-if="canRun">Runs the model and generates results</span>
      <span v-if="!canRun">Please define scenario to run model...</span>
    </v-tooltip>
    <v-menu left bottom>
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
    <v-tabs
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
import { State, Getter } from 'vuex-class';
import { Component } from 'vue-property-decorator';
import IApplicationAction from '@/interfaces/configuration/IApplicationAction';
import INavigationItem from '@/interfaces/configuration/INavigationItem';

@Component
export default class NavigationBar extends Vue {
  @State applicationTitle!: string;

  @Getter canRun!: boolean;

  @State applicationActions!: IApplicationAction[];

  @State navigationItems!: INavigationItem[];

  selectedNavigationRoute: string | null = null;

  selectedTabName!: never;

  getClassName(name: string) {
    return this.$vuetify.theme.dark ? this.getDarkClassName(name) : this.getLightClassName(name);
  }

  getLightClassName(name: string) {
    return name === this.selectedNavigationRoute ? 'secondary--text text--darken-1' : 'info--text text--lighten-2';
  }

  getDarkClassName(name: string) {
    return name === this.selectedNavigationRoute ? 'secondary--text text--lighten-3' : 'info--text text--lighten-4';
  }

  mounted() {
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
