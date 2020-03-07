<template>
  <v-container :fill-height="false" :fluid="false">
    <v-row align="start" justify="center">
      <v-col>
        <p class="text-center display-3">Constant parameter display under construction...</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import Constant from '@/implementations/parameter/distribution/Constant';

@Component
export default class ConstantParameterDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) selectedParameter!: Constant;
}
</script>

<style scoped lang="scss"></style>
