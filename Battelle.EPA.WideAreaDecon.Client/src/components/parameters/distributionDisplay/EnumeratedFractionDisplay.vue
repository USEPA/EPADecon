<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col>
        <p class="text-center display-3">Sum: {{ sumOfFractions }}</p>
      </v-col>
    </v-row>
    <v-row v-for="([key, value], index) in list" :key="key">
      <v-col>
        <p>{{ key }} - {{ value.value }}</p>
        <!-- <component
          @valueChanged="updateValue($event, i)"
          :is="distComponent(value.type)"
          :selected-parameter="value"
        ></component> -->
        <constant-display @valueChanged="updateValue($event, index)" :selected-parameter="value" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import EnumeratedFraction from '@/implementations/parameter/list/enumeratedFraction';
import ParameterType from '@/enums/parameter/parameterType';

import ConstantDisplay from '@/components/parameters/distributionDisplay/ConstantDisplay.vue';
import BetaPertDisplay from '@/components/parameters/distributionDisplay/BetaPertDisplay.vue';

@Component({
  components: {
    ConstantDisplay,
    BetaPertDisplay,
  },
})
export default class EnumeratedFractionDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) selectedParameter!: ParameterWrapper;

  get parameterValue(): EnumeratedFraction {
    return this.selectedParameter.current as EnumeratedFraction;
  }

  fractions: number[] = [];

  maxValue = 1;

  minValue = 0;

  get list(): [string, any][] {
    return Object.entries(this.parameterValue.values);
  }

  get sumOfFractions(): number {
    return this.fractions.reduce((acc, cur) => acc + cur);
  }

  get difference(): number {
    return this.maxValue - this.sumOfFractions;
  }

  get adjustments(): number {
    return this.difference / (this.fractions.length - 1);
  }

  updateValue(newValue: number, index: number): void {
    this.fractions.splice(index, 1, newValue);
    this.makeAdjustments(index);
  }

  makeAdjustments(rowIndex: number): void {
    let flag = 15;
    while (this.sumOfFractions !== this.maxValue && flag) {
      this.fractions.map((fraction, index) => {
        const shouldAdjust =
          fraction && fraction + this.adjustments >= this.minValue && fraction + this.adjustments <= this.maxValue;
        if (index !== rowIndex && shouldAdjust) {
          this.fractions.splice(index, 1, fraction + this.adjustments);
        }
        return fraction;
      });
      flag -= 1;
    }
  }

  // distComponent(type: string) {
  //   // get around es-lint error
  //   this.parameterType = type;
  //   switch (this.parameterType) {
  //     case ParameterType.constant:
  //       return 'constant-display';
  //     case ParameterType.pert:
  //       return 'beta-pert-display';
  //     default:
  //       return null;
  //   }
  // }

  @Watch('selectedParameter')
  onSelectedParameterChanged(): void {
    // reset fractions on param change
    this.fractions = [];
    this.setValues();
  }

  setValues(): void {
    // add values to fractions array
    Object.values(this.parameterValue.values).map((el: any) => this.fractions.push(el.value));
  }

  created(): void {
    this.setValues();
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
