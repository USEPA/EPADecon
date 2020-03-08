<template>
  <v-container :style="vuetifyColorProps()">
    <v-card-title>TEST</v-card-title>
    <v-row
      ><v-col><v-spacer /></v-col
    ></v-row>
    <v-row>
      <v-col>
        <v-slider v-model="sliderValue" :max="max" :min="min" :step="0.1" thumb-label @change="onSliderStopped">
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
              <p class="grey--text">{{ parameterValue.units }}</p>
            </template>
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import Constant from '@/implementations/parameter/distribution/Constant';
import { Key } from 'ts-keycode-enum';

@Component
export default class ConstantParameterDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) selectedParameter!: ParameterWrapper;

  vuetifyColorProps() {
    return {
      '--primary-color': this.$vuetify.theme.currentTheme.primary,
    };
  }

  get parameterValue(): Constant {
    return this.selectedParameter.current as Constant;
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

  sliderValue = 0;

  textValue: number | string = '';

  min = -100;

  max = 10000;

  @Watch('sliderValue')
  onSliderValueChanged(newValue: number) {
    this.textValue = newValue;
    // this.parameterValue.value = newValue;
  }

  @Watch('selectedParameter')
  onParameterChanged(newValue: ParameterWrapper) {
    const cast = newValue.current as Constant;
    if (cast.value) {
      this.sliderValue = cast.value;
      this.textValue = cast.value;
      this.min = this.sliderValue - 100;
      this.max = this.sliderValue + 100;
    } else {
      this.textValue = '';
    }
  }

  onTextEnterPressed(event: KeyboardEvent) {
    if (event.keyCode === Key.Enter) {
      this.updateOnTextChange();
    }
  }

  onSliderStopped(value: number) {
    this.parameterValue.value = value;
  }

  updateOnTextChange() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const castComponent = this.$refs.value as any;
    if (this.textValue === '') {
      this.parameterValue.value = undefined;
    } else if (Number(this.textValue) === this.sliderValue) {
      this.parameterValue.value = Number(this.textValue);
    } else if (!this.selectedParameter.current.isSet() && !castComponent.validate(true)) {
      this.textValue = '';
    } else if (castComponent.validate && castComponent.validate(true)) {
      this.sliderValue = Number(this.textValue);
      this.parameterValue.value = Number(this.textValue);
    } else {
      this.textValue = this.sliderValue;
    }
  }

  created() {
    this.sliderValue = 0;
    this.textValue = '';
    if (this.parameterValue.value) {
      this.sliderValue = this.parameterValue.value;
      this.textValue = this.parameterValue.value;
    }
    this.min = this.sliderValue - 100;
    this.max = this.sliderValue + 100;
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

<style scoped lang="scss"></style>
