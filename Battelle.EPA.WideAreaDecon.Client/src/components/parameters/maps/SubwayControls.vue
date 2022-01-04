<template>
  <enumerated-parameter-display :parameterValue="current" :baseline="baseline" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ContaminationDefinition from '@/implementations/parameter/list/ContaminationDefinition';
import EnumeratedParameter from '@/implementations/parameter/list/enumeratedParameter';
import EnumeratedParameterDisplay from '../distributionDisplay/EnumeratedParameterDisplay.vue';

@Component({ components: { EnumeratedParameterDisplay } })
export default class SubwayControls extends Vue {
  @Prop() parameterValue!: ContaminationDefinition;

  baseline = new EnumeratedParameter();

  current = new EnumeratedParameter();

  @Watch('current', { deep: true })
  updateParameterValues(): void {
    this.parameterValue.subwayProtectionFactor = this.current.values['Subway Protection Factor'];
    this.parameterValue.subwayTunnelWidth = this.current.values['Subway Tunnel Width'];
  }

  created(): void {
    const { subwayProtectionFactor, subwayTunnelWidth, metaData } = this.$store.state.currentSelectedParameter
      .baseline as ContaminationDefinition;

    const baselineValues = {
      'Subway Protection Factor': subwayProtectionFactor,
      'Subway Tunnel Width': subwayTunnelWidth,
    };
    const currentValues = {
      'Subway Protection Factor': this.parameterValue.subwayProtectionFactor,
      'Subway Tunnel Width': this.parameterValue.subwayTunnelWidth,
    };

    this.baseline = new EnumeratedParameter(metaData, undefined, baselineValues);
    this.current = new EnumeratedParameter(metaData, undefined, currentValues);
  }
}
</script>

<style lang="less" scoped></style>
