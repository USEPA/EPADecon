<template>
  <v-card height="100%" width="100%">
    <v-card-title background="secondary">{{ selectedParameter.name }}</v-card-title>
    <v-divider></v-divider>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-slider
            v-model="slider"
            style="v-slider__track-container"
            class="align-center"
            :max="max"
            :min="min"
            hide-details
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
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
.v-slider__track-container {
  height: 10px;
}
</style>
