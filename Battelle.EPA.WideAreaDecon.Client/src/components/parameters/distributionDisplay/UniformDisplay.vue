<template>
  <v-container :style="vuetifyColorProps()">
    <v-row align="center" justify="center">
      <v-col>
        <v-container width="95%">
          <v-card height="300">Graph to go here...</v-card>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-range-slider v-model="sliderValue" :max="max" :min="min" :step="step" thumb-label>
          <template v-slot:prepend>
            <p class="grey--text">{{ min }}</p>
          </template>
          <template v-slot:append>
            <p class="grey--text">{{ max }}</p>
          </template>
        </v-range-slider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="mr-auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field ref="minValue" v-model="textMin" label="Min" :rules="[validationRules]" hide-details="auto">
            <template v-slot:append>
              <p class="grey--text">{{ parameterValue.metaData.units }}</p>
            </template>
          </v-text-field>
        </v-card>
      </v-col>
      <v-col cols="4" class="auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field ref="maxValue" v-model="textMax" label="Max" :rules="[validationRules]" hide-details="auto">
            <template v-slot:append>
              <p class="grey--text">{{ parameterValue.metaData.units }}</p>
            </template>
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import Uniform from '../../../implementations/parameter/distribution/Uniform';

@Component
export default class UniformDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) selectedParameter!: ParameterWrapper;

  get parameterValue(): Uniform {
    return this.selectedParameter.current as Uniform;
  }

  vuetifyColorProps() {
    return {
      '--primary-color': this.$vuetify.theme.currentTheme.primary,
    };
  }

  validationRules(value: string): boolean | string {
    const num = Number(value);
    if (Number.isNaN(num)) {
      return 'Value must be number!';
    }
    if (num > this.max) {
      return `Value must be less than or equal to ${this.max}`;
    }
    if (num < this.min) {
      return `Value must be greater than or equal to ${this.min}`;
    }
    return true;
  }

  sliderValue = [0, 0];

  textMin = '';

  textMax = '';

  min = -100;

  max = 10000;

  step = 0.1;

  setValues() {
    this.sliderValue[0] = this.parameterValue.min ?? 0;
    this.sliderValue[1] = this.parameterValue.max ?? 1;
    this.textMin = this.parameterValue.min?.toString() ?? '';
    this.textMax = this.parameterValue.max?.toString() ?? '';
    this.min = this.parameterValue.metaData.min ?? this.sliderValue[0] - 100;
    this.max = this.parameterValue.metaData.max ?? this.sliderValue[1] + 100;
    this.step = this.parameterValue.metaData.step ?? Math.max((this.max - this.min) / 1000, 0.1);
  }

  created() {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
