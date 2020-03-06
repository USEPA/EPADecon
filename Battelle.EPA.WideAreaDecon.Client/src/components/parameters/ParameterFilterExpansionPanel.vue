<template>
  <v-container>
    <v-list-item v-for="(param, i) in getSubParameters()" :key="param.name + i" @click="setNewParameter(param)">
      <v-list-item-title v-text="param.name"></v-list-item-title>
      <v-list-item-icon v-if="!param.isSet()">
        <v-icon color="error">{{ errorIcon }}</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-list-group v-for="(filt, j) in getSubFilters()" :key="filt.name + j" sub-group>
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="filt.name"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon v-if="!filt.allParametersValid()">
          <!-- <v-icon color="error">{{ errorIcon }}</v-icon> -->
          <v-badge v-if="filt.numberInvalidParameters() > 0" color="error" :content="filt.numberInvalidParameters()" />
        </v-list-item-icon>
      </template>
      <parameter-list-expansion-panel :filter="filt" :parameterMutationPath="parameterMutationPath" />
    </v-list-group>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterFilter from '@/implementations/parameter/ParameterFilter';
import IParameter from '@/interfaces/parameter/IParameter';

@Component
export default class ParameterListExpansionPanel extends Vue {
  @State errorIcon!: string;

  @Prop({ required: true }) parameterMutationPath!: string;

  @Prop() filter!: ParameterFilter;

  getSubFilters(): ParameterFilter[] {
    return this.filter.filters;
  }

  getSubParameters(): IParameter[] {
    return this.filter.parameters;
  }

  // eslint-disable-next-line class-methods-use-this
  setNewParameter(param: IParameter) {
    this.$store.commit(this.parameterMutationPath, param);
  }
}
</script>

<style scoped lang="scss"></style>
