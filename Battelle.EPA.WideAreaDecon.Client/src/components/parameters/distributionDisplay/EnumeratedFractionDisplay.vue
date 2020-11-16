<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col>
        <p class="text-center display-3">Sum: {{ sumOfFractions }}</p>
        <!-- <p>Difference = {{ difference }}</p>
        <p>Adjustments = {{ adjustments }}</p> -->
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

  // values = this.parameterValue.values;

  fractions: number[] = [];

  get list() {
    return Object.entries(this.parameterValue.values);
  }
  // parameterType = '';

  get sumOfFractions(): number {
    return this.fractions.reduce((acc, cur) => acc + cur);
  }

  get difference(): number {
    return 1 - this.sumOfFractions;
  }

  get adjustments(): number {
    return this.difference / (this.fractions.length - 1);
  }

  updateValue(newValue: number, index: number): void {
    // first way doesn't update computed fractions property, one of the others need to be used
    // see https://vuejs.org/v2/guide/reactivity.html#For-Arrays

    // this.fractions[index] = newValue;
    // Vue.set(this.fractions, index, newValue);
    this.fractions.splice(index, 1, newValue);
    // this.adjustedFractions[index] = newValue;
    this.makeAdjustments(index);
    // this.fractions = this.makeAdjustments(this.fractions, index, 0, 1, 1);
    // this.fractions = this.makeAdjustments(index, newValue);
  }

  // makeAdjustments(
  //   array: number[],
  //   selectedRowIndex: number,
  //   minValue: number,
  //   maxValue: number,
  //   arraySum: number,
  // ): number[] {
  //   const sum = array.reduce((acc, cur) => acc + cur);
  //   if (sum === arraySum) return array;

  //   const adjust =
  //     (arraySum - sum) /
  //     array.reduce((carry, fraction, index) => {
  //       if (index === selectedRowIndex) {
  //         return carry;
  //       }
  //       if (this.sumOfFractions > 1) {
  //         return carry + (fraction < 1 ? 1 : 0);
  //       }
  //       return carry + (fraction > 0 ? 1 : 0);
  //     });

  //   const newArray = array.map((fraction, index) =>
  //     index === selectedRowIndex
  //       ? fraction
  //       : Math.round(+Math.max(minValue, Math.min(maxValue, fraction + adjust)).toFixed(4)),
  //   );

  //   return this.makeAdjustments(newArray, selectedRowIndex, minValue, maxValue, arraySum);
  // }
  //   if (this.difference !== 0) {
  //     const adjust =
  //       this.difference /
  //       this.fractions.reduce((carry, fraction, index) => {
  //         if (index === selectedRowIndex) {
  //           return carry;
  //         } else {
  //           if (this.sumOfFractions > 1) {
  //             return carry + (fraction < 1 ? 1 : 0);
  //           } else {
  //             return carry + (fraction > 0 ? 1 : 0);
  //           }
  //         }
  //       });
  //   }

  //   this.fractions = this.fractions.map((fraction, index) =>
  //     index === selectedRowIndex ? fraction : fraction - this.adjustments,
  //   );
  // }

  makeAdjustments(rowIndex: number): void {
    let flag = 100;
    while (this.sumOfFractions !== 1 && flag > 0) {
      this.fractions.map((fraction, index) => {
        const shouldAdjust = fraction && fraction + this.adjustments >= 0 && fraction + this.adjustments <= 1;
        if (index !== rowIndex && shouldAdjust) {
          this.fractions.splice(index, 1, fraction + this.adjustments);
        }
        return fraction;
      });
      flag -= 1;
    }
    // }

    // let flag = 2;
    // while (this.sumOfFractions !== 100 && flag > 0) {
    //   // this.fractions.forEach((fraction, index) => {
    //   //   if (index !== rowIndex && fraction < 100 && fraction > 0) {
    //   //     this.fractions.splice(index, 1, fraction - this.adjustments);
    //   //   }
    //   // });
    //   this.fractions.map((fraction, index) => {
    //     if (index !== rowIndex && fraction < 100 && fraction > 0) {
    //       this.fractions.splice(index, 1, fraction + this.adjustments);
    //     }
    //     return fraction;
    //   });
    //   flag -= 1;
    // }
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
