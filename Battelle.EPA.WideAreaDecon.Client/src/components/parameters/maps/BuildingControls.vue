<template>
  <enumerated-parameter-display :parameterValue="current" :baseline="baseline" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ContaminationDefinition from '@/implementations/parameter/list/ContaminationDefinition';
import EnumeratedParameter from '@/implementations/parameter/list/enumeratedParameter';
import { State } from 'vuex-class';
import { nameof } from 'ts-simple-nameof';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import { StoreNames } from '@/constants/store/store';
import EnumeratedParameterDisplay from '../distributionDisplay/EnumeratedParameterDisplay.vue';

@Component({ components: { EnumeratedParameterDisplay } })
export default class BuildingControls extends Vue {
  @Prop() parameterValue!: ContaminationDefinition;

  baseline = new EnumeratedParameter();

  current = new EnumeratedParameter();

  // @Watch('current', { deep: true })
  // updateParameterValue(): void {
  //   this.parameterValue.buildingProtectionFactor = this.current.values['Building Protection Factor'];
  // }

  @State(nameof<IParameterSelection>((s) => s.currentSelectedParameter), { namespace: StoreNames.PARAMETER_SELECTION })
  currentSelectedParameter!: ParameterWrapper;

  created(): void {
    const { buildingProtectionFactor, metaData } = this.currentSelectedParameter.baseline as ContaminationDefinition;

    const baselineValues = {
      'Building Protection Factor': buildingProtectionFactor,
    };
    const currentValues = {
      'Building Protection Factor': this.parameterValue.buildingProtectionFactor,
    };

    this.baseline = new EnumeratedParameter(metaData, undefined, baselineValues);
    this.current = new EnumeratedParameter(this.parameterValue.metaData, undefined, currentValues);
  }
}
</script>

<style lang="less" scoped></style>
