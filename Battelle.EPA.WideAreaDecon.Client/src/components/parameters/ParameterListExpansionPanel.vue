<template>
  <v-list>
    <v-list-group v-for="(item, i) in getFilters()" :key="i">
      <template v-slot:activator>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-list-item-icon v-if="!item.allParametersValid()">
          <v-icon color="error">{{ errorIcon }}</v-icon>
        </v-list-item-icon>
      </template>
      <parameter-filter-expansion-panel :filter="item" />
    </v-list-group>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterList from '../../implementations/parameter/ParameterList';
import ParameterFilter from '../../implementations/parameter/ParameterFilter';
import ParameterFilterExpansionPanel from './ParameterFilterExpansionPanel.vue';

@Component({
  components: { ParameterFilterExpansionPanel },
})
export default class ParameterListExpansionPanel extends Vue {
  @State errorIcon!: string;

  @Prop()
  list!: ParameterList;

  getFilters(): ParameterFilter[] {
    return this.list.filters;
  }
}
</script>

<style scoped lang="scss"></style>
