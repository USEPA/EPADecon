<template>
  <v-container :style="vuetifyColorProps()">
    <!-- <v-row>
      <v-col>
        <v-slider v-model="sliderValue" :max="max" :min="min" :step="step" thumb-label @change="onSliderStopped">
          <template v-slot:prepend>
            <p class="grey--text">{{ min }}</p>
          </template>
          <template v-slot:append>
            <p class="grey--text">{{ max }}</p>
          </template>
        </v-slider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="mr-auto">
        <v-card class="pa-2" outlined tile>
          <v-text-field
            ref="value"
            @keydown="onTextEnterPressed"
            @blur="updateOnTextChange"
            v-model="textValue"
            label="Value"
            :rules="[validationRules]"
            hide-details="auto"
          >
            <template v-slot:append>
              <p class="grey--text">{{ parameterValue.metaData.units }}</p>
            </template>
          </v-text-field>
        </v-card>
      </v-col>
    </v-row> -->
    <v-row justify="space-between">
      <v-col align="center">
        <v-btn @click="showModal = true">Edit Chart Data</v-btn>
      </v-col>
      <v-col align="center">
        <v-btn-toggle v-model="selectedSetName" dense mandatory background-color="primary">
          <v-btn v-for="set in variableSets" :key="set.name" :value="set.name">{{ set.name }}</v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-card v-if="displayChart" flat class="pa-5" tile width="100%" height="400">
      <scatter-plot-wrapper :options="chartOptions" :data="chartData" type="scatter" :width="400" :height="150" />
    </v-card>
    <v-container>
      <v-dialog v-model="showModal" width="unset">
        <v-card>
          <v-system-bar color="primary" height="60">
            <v-toolbar-title class="title white--text">Edit Chart Data</v-toolbar-title>
            <v-spacer />
            <v-icon @click="showModal = false" size="45">mdi-close</v-icon>
          </v-system-bar>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text--primary text-subtitle-2">
                    {{ parameterValue.metaData.description }}
                  </th>
                  <th class="text--primary text-subtitle-2">
                    Min {{ parameterValue.metaData.name }} ({{ parameterValue.metaData.units }})
                  </th>
                  <th class="text--primary text-subtitle-2">
                    Max {{ parameterValue.metaData.name }} ({{ parameterValue.metaData.units }})
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in selectedSet.indices" :key="i">
                  <td>{{ xValues[i] }}</td>
                  <td>
                    <v-edit-dialog :return-value.sync="yMinValues[i]">
                      {{ yMinValues[i] }}
                      <template v-slot:input>
                        <v-text-field
                          :ref="`min-${i}`"
                          v-model.number="yMinValues[i]"
                          type="number"
                          :rules="[validationRulesMin(yMinValues[i], i)]"
                          label="Edit"
                          single-line
                          :placeholder="`${yMinValues[i]}`"
                        ></v-text-field>
                      </template>
                    </v-edit-dialog>
                  </td>
                  <td>
                    <v-edit-dialog :return-value.sync="yMaxValues[i]">
                      {{ yMaxValues[i] }}
                      <template v-slot:input>
                        <v-text-field
                          :ref="`max-${i}`"
                          v-model.number="yMaxValues[i]"
                          type="number"
                          :rules="[validationRulesMax(yMaxValues[i], i)]"
                          label="Edit"
                          single-line
                          :placeholder="`${yMaxValues[i]}`"
                        ></v-text-field>
                      </template>
                    </v-edit-dialog>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-dialog>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import UniformXDependent from '@/implementations/parameter/distribution/UniformXDependent';
import {
  ScatterPlotWrapper,
  ChartPoint2D,
  CycleColorProvider,
  ScatterChartDataset,
  DefaultChartOptions,
  DefaultChartData,
} from 'battelle-common-vue-charting/src';
import { Key } from 'ts-keycode-enum';

interface IVariableSet {
  name: string;
  indices: number[];
  points: number[];
  value: number | undefined;
}

@Component({ components: { ScatterPlotWrapper } })
export default class UniformXDependentDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: UniformXDependent;

  showModal = false;

  sliderValue = 0;

  textValue = '';

  step = 0.1;

  ignoreNextSliderChange = false;

  chartOptions = new DefaultChartOptions();

  xValues: number[] = [];

  yMaxValues: number[] = [];

  yMinValues: number[] = [];

  dependentVariables?: string[] = [];

  selectedSetName = '';

  get variableSets(): IVariableSet[] {
    const uniqueVariables = [...new Set(this.dependentVariables)];
    const sets = uniqueVariables.map((name) => {
      const indices: number[] = [];
      const points: number[] = [];
      return {
        name,
        indices,
        points,
        value: undefined,
      };
    });

    // group points and indices with sets
    this.xValues.forEach((x, i) => {
      const currentSet = this.dependentVariables ? this.dependentVariables[i] : undefined;
      if (currentSet !== undefined) {
        const setIndex = sets.map((set) => set.name).indexOf(currentSet);
        sets[setIndex].points.push(x);
        sets[setIndex].indices.push(i);
      }
    });

    return sets;
  }

  get selectedSet(): IVariableSet {
    return this.variableSets.filter((set) => set.name === this.selectedSetName)[0];
  }

  get min(): number {
    return Math.min(...this.selectedSet.points);
  }

  get max(): number {
    return Math.max(...this.selectedSet.points);
  }

  get displayChart(): boolean {
    return this.selectedSet && this.yMinValues.length > 0 && this.yMaxValues.length > 0;
  }

  get chartData(): DefaultChartData {
    const dataSets: ScatterChartDataset[] = [];
    const colorProvider = new CycleColorProvider();

    const selectedXValues = this.selectedSet.points.sort((a, b) => a - b);

    const selectedYMins = this.yMinValues.filter((y, i) => this.selectedSet.indices.includes(i));
    const selectedYMaxs = this.yMaxValues.filter((y, i) => this.selectedSet.indices.includes(i));

    const mins: ChartPoint2D[] = selectedXValues.map((x, i) => new ChartPoint2D(x, selectedYMins[i]));
    const maxs: ChartPoint2D[] = selectedXValues.map((x, i) => new ChartPoint2D(x, selectedYMaxs[i]));

    if (mins.length) {
      const minScatter = new ScatterChartDataset(mins, 'Min', colorProvider);
      // minScatter.pointRadius = 0;
      dataSets.push(minScatter);
    }

    if (maxs.length) {
      const maxScatter = new ScatterChartDataset(maxs, 'Max', colorProvider);
      // maxScatter.pointRadius = 0;
      dataSets.push(maxScatter);
    }

    // const min = this.interpolate(selectedYMins, selectedXValues, this.sliderValue);
    // const max = this.interpolate(selectedYMaxs, selectedXValues, this.sliderValue);

    // Vue.set(this.parameterValue, 'min', min);
    // Vue.set(this.parameterValue, 'max', max);

    // const currentMin = new ChartPoint2D(this.sliderValue, min);
    // const currentMax = new ChartPoint2D(this.sliderValue, max);

    // const current = new ScatterChartDataset([currentMin, currentMax], 'Current', colorProvider);
    // dataSets.push(current);

    return new DefaultChartData(dataSets);
  }

  @Watch('sliderValue')
  onSliderValueChanged(newValue: number): void {
    if (!this.ignoreNextSliderChange) {
      this.textValue = newValue.toString();
      this.selectedSet.value = newValue;
    } else {
      this.ignoreNextSliderChange = false;
    }
  }

  @Watch('parameterValue')
  onParameterChanged(): void {
    this.setValues();
  }

  onSliderStopped(): void {
    this.parameterValue.set = this.selectedSet;
  }

  // eslint-disable-next-line class-methods-use-this
  interpolate(Y: number[], X: number[], val: number): number {
    let minIndex = 0;
    let maxIndex = X.length - 1;
    // there has got to be a better way to loop through X
    for (let i = 0; i < X.length; i += 1) {
      if (X[i] <= val) {
        minIndex = i;
      } else if (X[i] >= val) {
        maxIndex = i;
        break;
      }
    }
    const slope = (Y[maxIndex] - Y[minIndex]) / (X[maxIndex] - X[minIndex]);
    const yDelta = slope * (val - X[minIndex]);
    return yDelta + Y[minIndex];
  }

  onTextEnterPressed(event: KeyboardEvent): void {
    if (event.keyCode === Key.Enter) {
      this.updateOnTextChange();
    }
  }

  updateOnTextChange(): void {
    const value = Number(this.textValue);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.value as any;
    if (this.textValue === '') {
      this.selectedSet.value = undefined;
    } else if (value === this.sliderValue) {
      this.selectedSet.value = value;
    } else if (!this.parameterValue.isSet && !castComponent.validate(true)) {
      this.textValue = '';
    } else if (castComponent.validate && castComponent.validate(true)) {
      this.sliderValue = value;
      this.selectedSet.value = value;
    } else {
      this.textValue = this.sliderValue.toString();
    }
  }

  validationRulesMin(value: number, index: number): boolean | string {
    if (value > this.yMaxValues[index]) {
      return `Value must be less than maximum value: ${this.yMaxValues[index]}`;
    }
    if (value < 0) {
      return 'Value must be greater than or equal to zero';
    }
    if (value === undefined) {
      return 'Value must be set';
    }
    return true;
  }

  validationRulesMax(value: number, index: number): boolean | string {
    if (value < this.yMinValues[index]) {
      return `Value must be greater than minimum value: ${this.yMinValues[index]}`;
    }
    if (value < 0) {
      return 'Value must be greater than zero';
    }
    return true;
  }

  vuetifyColorProps(): unknown {
    return {
      '--primary-color': this.$vuetify.theme.currentTheme.primary,
    };
  }

  setValues(): void {
    this.step = this.parameterValue.metaData.step ?? Math.max((this.max - this.min) / 1000, 0.1);

    this.ignoreNextSliderChange = true;

    this.xValues = this.parameterValue.xValues ?? [];
    this.yMinValues = this.parameterValue.yMinimumValues ?? [];
    this.yMaxValues = this.parameterValue.yMaximumValues ?? [];
    this.dependentVariables = this.parameterValue.dependentVariable;

    this.selectedSetName = this.parameterValue.set?.name ?? this.variableSets[0].name;
    this.sliderValue = this.parameterValue.set?.value ?? this.selectedSet.value ?? this.min;

    this.textValue = this.sliderValue.toString();
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
