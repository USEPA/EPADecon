<template>
  <div>
    <!-- <enumerated-parameter-display :parameterValue="parameterValue.loading" /> -->
    <!-- <enumerated-parameter-display :parameterValue="parameterValue.areaContaminated" /> -->
  </div>
</template>

<script lang="ts">
import ContaminationDefinition from '@/implementations/parameter/list/ContaminationDefinition';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import { Prop, Component } from 'vue-property-decorator';
import Vue from 'vue';
import EnumeratedParameterDisplay from './distributionDisplay/EnumeratedParameterDisplay.vue';

@Component({
  components: {
    EnumeratedParameterDisplay,
  },
})
export default class ContaminationDefinitionDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: ContaminationDefinition;

  // TODO: create another EnumeratedParameterDisplay to handle contamination definition better - similar to current display
}
</script>
<style scoped lang="scss"></style>
