<template>
  <v-container>
    <v-row>
      <v-col><v-spacer /></v-col>
    </v-row>
    <v-row>
      <v-col><v-spacer /></v-col>
    </v-row>
    <v-row>
      <v-col><v-spacer /></v-col>
    </v-row>
    <v-row>
      <v-col><v-spacer /></v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col>
        <p class="text-center display-3">
          Truncated Normal Display under construction...
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';

@Component
export default class TruncatedNormalDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) selectedParameter!: ParameterWrapper;
}
</script>

<style scoped lang="scss"></style>
