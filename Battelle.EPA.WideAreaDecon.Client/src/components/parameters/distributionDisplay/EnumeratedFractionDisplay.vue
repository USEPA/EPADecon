<template>
  <v-container>
    <v-row v-for="([key, value], index) in list" :key="key">
      <v-col>
        <p>{{ key }} - {{ value.value }}</p>
        <constant-display @valueChanged="updateValue($event, key, index)" :parameter-value="value" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import EnumeratedFraction from '@/implementations/parameter/list/enumeratedFraction';
import ConstantDisplay from '@/components/parameters/distributionDisplay/ConstantDisplay.vue';
import Constant from '@/implementations/parameter/distribution/Constant';

@Component({
  components: {
    ConstantDisplay,
  },
})
export default class EnumeratedFractionDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: EnumeratedFraction;

  fractions: number[] = [];

  maxValue = 1;

  minValue = 0;

  currentValue: Constant = Object.values(this.parameterValue.values)[0];

  get list(): [string, Constant][] {
    return Object.entries(this.parameterValue.values);
  }

  get sumOfFractions(): number {
    return this.fractions.reduce((acc, cur) => acc + cur);
  }

  get difference(): number {
    return this.maxValue - this.sumOfFractions;
  }

  // the amount each fraction will need to be modified by
  get adjustments(): number {
    return this.difference / (this.fractions.length - 1);
  }

  updateValue(newValue: number, key: string, changedIndex: number): void {
    this.fractions.splice(changedIndex, 1, newValue);
    this.makeAdjustments(changedIndex);

    // update parameter value passed to child components
    Object.entries(this.parameterValue.values).forEach((value, index) => {
      [, this.currentValue] = value;
      this.currentValue.value = this.fractions[index];
    });
  }

  makeAdjustments(changedIndex: number): void {
    let counter = 50; // loop at most 50 times
    while (this.sumOfFractions !== this.maxValue && counter) {
      this.fractions.forEach((fraction, index) => {
        const adjustedFraction = fraction + this.adjustments;
        const shouldAdjust = fraction && adjustedFraction >= this.minValue && adjustedFraction <= this.maxValue;
        if (index !== changedIndex && shouldAdjust) {
          this.fractions.splice(index, 1, adjustedFraction);
        }
      });
      counter -= 1;
    }
  }

  @Watch('parameterValue')
  onParameterChanged(): void {
    // reset fractions array
    this.fractions = [];
    this.setValues();
  }

  setValues(): void {
    // add values to fractions array
    Object.values(this.parameterValue.values).forEach((constant: Constant) => this.fractions.push(constant.value ?? 0));
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
