<template>
  <v-container>
    <v-radio-group @change="onFrequencyChanged" v-model="frequency">
      <v-radio v-for="freq of frequencyValues" :key="freq" :label="freq" :value="freq"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import IParameter from '@/interfaces/parameter/IParameter';
import FrequencyValueType from '@/enums/parameter/frequencyValueType';
import FrequencyValue from '@/implementations/parameter/distribution/FrequencyValue';

@Component
export default class FrequencyValueDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: IParameter;

  frequency = FrequencyValueType.Once;

  get castParameterValue(): FrequencyValue {
    return this.parameterValue as FrequencyValue;
  }

  get frequencyValues(): string[] {
    return Object.keys(FrequencyValueType);
  }

  onFrequencyChanged(): void {
    this.castParameterValue.value = this.frequency;
  }

  @Watch('parameterValue')
  setValues(): void {
    this.frequency = this.castParameterValue.value;
  }

  created(): void {
    this.setValues();
  }
}
</script>

<style scoped lang="scss"></style>
