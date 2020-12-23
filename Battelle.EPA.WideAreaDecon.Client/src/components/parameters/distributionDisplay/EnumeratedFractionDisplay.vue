<template>
  <v-container>
    <v-row>
      <v-simple-table style="width: 100%">
        <template v-slot:default>
          <thead></thead>
          <tbody>
            <tr v-for="([key, value], index) in listOfParameterValues" :key="key">
              <td style="width: 20%" class="text-subtitle-1 text-center font-weight-medium">{{ key }}</td>
              <td style="width: 50%">
                <v-slider
                  class="large-slider"
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
              <td style="width: 10%">
                <v-checkbox
                  v-model="value.locked"
                  off-icon="fa-lock-open"
                  on-icon="fa-lock"
                  color="grey"
                  :value="lockedRows[index]"
                  :ripple="false"
                  @click="lockRow(lockedRows[index], index)"
                >
                </v-checkbox>
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

  adjustmentsMade = false;

  get listOfParameterValues(): [string, Constant][] {
    return Object.entries(this.parameterValue.values);
  }

  get sumOfFractions(): number {
    return this.fractions.reduce((acc, cur) => acc + cur, 0);
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

    // update parameter and slider values
    Object.entries(this.parameterValue.values).forEach((value, index) => {
      const [valueName] = value;
      this.parameterValue.values[valueName].value = this.fractions[index];
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
        const fallback = // holds index to force change on
          this.lockedRowCount === this.listOfParameterValues.length - 1
            ? changedIndex // the only unlocked row will be changed
            : this.fractions.findIndex((fraction, index) => index !== changedIndex && !this.lockedRows[index]);

        this.fractions.splice(fallback, 1, this.fractions[fallback] + this.difference);
        this.adjustmentsMade = true;
      }

      counter -= 1;
    }
  }

  // toggle lock on a row
  lockRow(lockValue: boolean, index: number): void {
    const valueName = this.listOfParameterValues[index][0];
    this.parameterValue.values[valueName].locked = !lockValue;
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
      this.textValues.push(constant.value?.toFixed(2) ?? '');
      this.lockedRows.push(constant.locked ?? false);
    });
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style lang="scss">
.large-slider .v-slider__track-container {
  height: 20px !important;
}
.large-slider .v-slider__track-fill {
  border-radius: 15px !important;
}
.large-slider .v-slider__track-background {
  border-radius: 15px !important;
}
.v-data-table__wrapper {
  overflow: visible !important;
}
.v-messages {
  display: none;
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
