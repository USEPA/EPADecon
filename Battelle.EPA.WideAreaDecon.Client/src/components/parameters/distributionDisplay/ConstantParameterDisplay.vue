<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-slider v-model="slider" class="align-center" :max="max" :min="min" />
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

  slider = 0;

  min = -50;

  max = 90;
}
</script>

<style scoped lang="scss">
</style>
