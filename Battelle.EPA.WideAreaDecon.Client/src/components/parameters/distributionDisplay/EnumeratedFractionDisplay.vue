<template>
  <v-container>
    <!-- <v-row v-for="([key, value], index) in list" :key="key">
      <v-col>
        <p>{{ key }} - {{ value.value }}</p>
        <constant-display @valueChanged="updateValue($event, key, index)" :parameter-value="value" />
      </v-col>
    </v-row> -->
    <v-row>
      <v-simple-table style="width: 100%">
        <template v-slot:default>
          <thead></thead>
          <tbody>
            <tr v-for="([key, value], index) in list" :key="key">
              <td style="width: 10%">
                <v-checkbox :value="lockedRows[index]" :ripple="false" @click="lockRow(index)"> </v-checkbox>
              </td>
              <td style="width: 20%">{{ key }} - {{ value.value }}</td>
              <td style="width: 50%">
                <v-slider
                  v-model="value.value"
                  :disabled="lockedRows[index]"
                  :max="max"
                  :min="min"
                  :step="step"
                  thumb-label
                  @change="onSliderStopped(value.value, index)"
                >
                </v-slider>
              </td>
              <td style="width: 20%">
                <v-card class="pa-2" outlined tile>
                  <v-text-field
                    ref="value"
                    :disabled="lockedRows[index]"
                    @keydown="onTextEnterPressed($event, index)"
                    @blur="updateOnTextChange(index)"
                    v-model="textValues[index]"
                    label="Value"
                    :rules="[validationRules]"
                    hide-details="auto"
                  >
                    <template v-slot:append>
                      <p class="grey--text">{{ value.metaData.units }}</p>
                    </template>
                  </v-text-field>
                </v-card>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import EnumeratedFraction from '@/implementations/parameter/list/enumeratedFraction';
import Constant from '@/implementations/parameter/distribution/Constant';
import { Key } from 'ts-keycode-enum';

@Component
export default class EnumeratedFractionDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: EnumeratedFraction;

  fractions: number[] = [];

  lockedRows: boolean[] = [];

  max = 1;

  min = 0;

  step = 0.01;

  textValues: string[] = [];

  currentValue: Constant = Object.values(this.parameterValue.values)[0];

  adjustmentsMade = false;

  get list(): [string, Constant][] {
    return Object.entries(this.parameterValue.values);
  }

  get sumOfFractions(): number {
    return this.fractions.reduce((acc, cur) => acc + cur);
  }

  get difference(): number {
    return this.max - this.sumOfFractions;
  }

  // the amount each fraction will need to be modified by
  get adjustments(): number {
    return this.difference / (this.fractions.length - 1);
  }

  get lockedRowsSum(): number {
    return this.fractions.reduce((acc, cur, index) => {
      if (this.lockedRows[index]) {
        return acc + cur;
      }
      return acc;
    }, 0);
  }

  get lockedRowCount(): number {
    return this.lockedRows.filter((row) => row).length;
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

  onSliderStopped(newValue: number, changedIndex: number): void {
    const val = newValue + this.lockedRowsSum > this.max ? this.max - this.lockedRowsSum : newValue;

    this.fractions.splice(changedIndex, 1, val);
    this.makeAdjustments(changedIndex);

    Object.entries(this.parameterValue.values).forEach((value, index) => {
      // update slider value
      [, this.currentValue] = value;
      this.currentValue.value = this.fractions[index];
      // update text value
      this.textValues.splice(index, 1, this.fractions[index].toFixed(2));
    });
  }

  onTextEnterPressed(event: KeyboardEvent, index: number): void {
    if (event.keyCode === Key.Enter) {
      this.onSliderStopped(+this.textValues[index], index);
    }
  }

  updateOnTextChange(index: number): void {
    this.onSliderStopped(+this.textValues[index], index);
  }

  makeAdjustments(changedIndex: number): void {
    this.adjustmentsMade = false;
    let counter = 50; // loop at most 50 times

    while (this.sumOfFractions !== this.max && counter) {
      this.fractions.forEach((fraction, index) => {
        const adjustedFraction = fraction + this.adjustments;
        const shouldAdjust = fraction && adjustedFraction >= this.min && adjustedFraction <= this.max;
        if (index !== changedIndex && shouldAdjust && !this.lockedRows[index]) {
          this.fractions.splice(index, 1, adjustedFraction);
          this.adjustmentsMade = true;
        }
      });

      // force an adjustment if needed
      if (!this.adjustmentsMade) {
        const fallback =
          this.lockedRowCount === this.list.length - 1
            ? changedIndex
            : this.fractions.findIndex((fraction, index) => index !== changedIndex && !this.lockedRows[index]);

        this.fractions.splice(fallback, 1, this.fractions[fallback] + this.difference);
        this.adjustmentsMade = true;
      }

      counter -= 1;
    }
  }

  lockRow(index: number): void {
    this.lockedRows.splice(index, 1, !this.lockedRows[index]);
  }

  @Watch('parameterValue')
  onParameterChanged(): void {
    // reset arrays
    this.fractions = [];
    this.textValues = [];
    this.lockedRows = [];
    this.setValues();
  }

  setValues(): void {
    // add values to arrays
    Object.values(this.parameterValue.values).forEach((constant: Constant) => {
      this.fractions.push(constant.value ?? 0);
      this.textValues.push(constant.value?.toString() ?? '');
      this.lockedRows.push(false);
    });
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
