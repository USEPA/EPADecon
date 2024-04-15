<template>
  <v-row align="center" class="mt-16" justify="center">
    <v-col>
      <v-stepper vertical flat v-model="step" class="display-1">
        <v-stepper-step step="1" :complete="step > 1"
          >Enter contamination definition by selecting it from the left side menu</v-stepper-step
        >
        <v-stepper-step step="2" :complete="step > 2"
          >Review and/or edit remaining selections at the left</v-stepper-step
        >
        <v-stepper-step step="3" :complete="step > 3"
          >Click "RUN SCENARIO" in the top-right corner to run the model</v-stepper-step
        >
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import IParameter from '@/interfaces/parameter/IParameter';
import { StoreNames } from '@/constants/store/store';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import { nameof } from 'ts-simple-nameof';
import { Getter, State } from 'vuex-class';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import { JobsStoreGetters } from '@/constants/store/Jobs';

@Component
export default class NullParameterDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: IParameter;

  @State(nameof<IParameterSelection>((s) => s.scenarioDefinition), { namespace: StoreNames.PARAMETER_SELECTION })
  scenarioDefinition!: ParameterWrapperList;

  @Getter(JobsStoreGetters.HAS_RESULTS, { namespace: StoreNames.JOBS }) hasResults!: boolean;

  step = 1;

  created(): void {
    const contaminationDefinitionSet =
      this.scenarioDefinition.filters[0].parameters.find((p) => p.current.metaData.name === 'Contamination Definition')
        ?.current.isSet ?? false;

    if (contaminationDefinitionSet) {
      this.step++;

      if (this.hasResults) {
        this.step += 2;
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
