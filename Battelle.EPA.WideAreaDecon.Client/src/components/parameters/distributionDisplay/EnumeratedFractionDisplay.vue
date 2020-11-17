<template>
  <v-container>
    <!-- <v-row align="center" justify="center">
      <v-col>
        <p class="text-center display-3">Sum: {{ sumOfFractions }}</p>
      </v-col>
    </v-row> -->
    <v-row v-for="([key, value], index) in list" :key="key">
      <v-col>
        <p>{{ key }} - {{ value.value }}</p>
        <constant-display @valueChanged="updateValue($event, key, index)" :selected-parameter="value" />
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

import ConstantDisplay from '@/components/parameters/distributionDisplay/ConstantDisplay.vue';

@Component({
  components: {
    ConstantDisplay,
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

  currentValue: any = Object.values(this.parameterValue.values)[0];

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

  updateValue(newValue: number, key: string, index: number): void {
    this.fractions.splice(index, 1, newValue);
    this.makeAdjustments(index);

    // update parameter value passed to child components
    this.currentValue = this.parameterValue.values[key];
    Object.entries(this.parameterValue.values).forEach((el, i) => {
      [, this.currentValue] = el;
      this.currentValue.value = this.fractions[i];
    });
  }

  makeAdjustments(rowIndex: number): void {
    let counter = 30;
    while (this.sumOfFractions !== this.maxValue && counter) {
      this.fractions.map((fraction, index) => {
        const shouldAdjust =
          fraction && fraction + this.adjustments >= this.minValue && fraction + this.adjustments <= this.maxValue;
        if (index !== rowIndex && shouldAdjust) {
          this.fractions.splice(index, 1, fraction + this.adjustments);
        }
        return fraction;
      });
      counter -= 1;
    }
  }

  @Watch('selectedParameter')
  onSelectedParameterChanged(): void {
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
