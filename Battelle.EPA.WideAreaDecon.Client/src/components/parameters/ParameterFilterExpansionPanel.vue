<template>
  <v-container>
    <v-list-item
      v-for="(param, i) in getSubParameters()"
      :key="'parameter_' + i"
      @click="setNewParameter(param)"
      active-class="secondary--text"
      :class="param.current.isSet() ? '' : 'error lighten-2'"
    >
      <v-list-item-icon />
      <v-list-item-title :class="getParameterClass(param)" v-text="param.current.name"></v-list-item-title>
    </v-list-item>

    <v-list-group active-class="secondary--text" v-for="(filt, j) in getSubFilters()" :key="'filter_' + j" sub-group>
      <template v-slot:activator>
        <v-list-item-icon>
          <v-badge
            offset-y="20"
            v-if="filt.numberInvalidParameters() > 0"
            color="error"
            :content="filt.numberInvalidParameters()"
          />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="filt.name"></v-list-item-title>
        </v-list-item-content>
      </template>
      <parameter-list-expansion-panel :filter="filt" />
    </v-list-group>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterWrapperFilter from '@/implementations/parameter/ParameterWrapperFilter';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';

@Component
export default class ParameterListExpansionPanel extends Vue {
  @State errorIcon!: string;

  @State currentSelectedParameter!: ParameterWrapper;

  @Prop() filter!: ParameterWrapperFilter;

  getSubFilters(): ParameterWrapperFilter[] {
    return this.filter.filters;
  }

  getSubParameters(): ParameterWrapper[] {
    return this.filter.parameters;
  }

  // eslint-disable-next-line class-methods-use-this
  setNewParameter(param: ParameterWrapper) {
    this.$store.commit('changeCurrentSelectedParameter', param);
  }

  // eslint-disable-next-line class-methods-use-this
  getParameterClass(param: ParameterWrapper): string {
    let classText = '';
    if (param === this.currentSelectedParameter) {
      classText += 'secondary--text';
    }
    return classText;
  }

  getClassForFilter(filt: ParameterWrapperFilter): string {
    return filt.parameters.some((p) => p === this.currentSelectedParameter) ||
      filt.filters.some((f) => f.subItemSelected(this.currentSelectedParameter))
      ? 'secondary--text'
      : '';
  }
}
</script>

<style scoped lang="scss"></style>
