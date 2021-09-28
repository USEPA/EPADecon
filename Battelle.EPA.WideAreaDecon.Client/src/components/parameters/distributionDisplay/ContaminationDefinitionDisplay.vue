<template>
  <v-container>
    <v-row v-if="scenarioDefinitionMode === 'geospatial'">
      <v-col>
        <geospatial-display :parameterValue="parameterValue.areaContaminated" />
      </v-col>
    </v-row>

    <v-row v-else>
      <div>TODO</div>
      <!-- <enumerated-parameter-display :parameterValue="parameterValue.areaContaminated" />

      <enumerated-parameter-display :parameterValue="parameterValue.loading" /> -->
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ContaminationDefinition from '@/implementations/parameter/list/ContaminationDefinition';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import { ScenarioDefinitionMode } from '@/types';
import EnumeratedParameterDisplay from './EnumeratedParameterDisplay.vue';
import GeospatialDisplay from './GeospatialDisplay.vue';

@Component({
  components: {
    EnumeratedParameterDisplay,
    GeospatialDisplay,
  },
})
export default class ContaminationDefinitionDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: ContaminationDefinition;

  @State scenarioDefinitionMode!: ScenarioDefinitionMode;

  // TODO: create another EnumeratedParameterDisplay to handle contamination definition better - similar to current display
}
</script>

<style scoped lang="scss"></style>
