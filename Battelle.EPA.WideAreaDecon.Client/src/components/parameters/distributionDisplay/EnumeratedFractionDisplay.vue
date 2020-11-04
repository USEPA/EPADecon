<template>
  <v-container :style="vuetifyColorProps()">
    <v-row align="center" justify="center">
      <v-col>
        <p class="text-center display-3">Enumerated Fraction Display Under Construction...</p>
      </v-col>
    </v-row>
    <v-row v-for="[key, value] in Object.entries(parameterValue.values)" :key="key">
      <v-col>
        <p class="text-center display-3">{{ value.value }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import EnumeratedFraction from '@/implementations/parameter/list/enumeratedFraction';

@Component
export default class EnumeratedFractionDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) selectedParameter!: ParameterWrapper;

  get parameterValue(): EnumeratedFraction {
    return this.selectedParameter.current as EnumeratedFraction;
  }

  test(): void {
    Object.entries(this.parameterValue.values).forEach(([key, value]) => console.log(key, value));
  }

  vuetifyColorProps(): unknown {
    return {
      '--primary-color': this.$vuetify.theme.currentTheme.primary,
    };
  }
}
</script>

<style lang="scss">
.v-slider__track-container {
  height: 8px !important;
}
.v-slider__track-fill {
  border-radius: 5px !important;
}
.v-slider__track-background {
  border-radius: 5px !important;
}
.v-slider__thumb {
  width: 24px !important;
  height: 24px !important;
  left: -12px !important;
}
.v-slider__thumb:before {
  left: -6px !important;
  top: -6px !important;
}
.theme--light.v-card.v-card--outlined {
  border: 2px solid !important;
  border-color: var(--primary-color) !important;
  border-radius: 5px !important;
}
</style>

<style scoped lang="scss4"></style>
