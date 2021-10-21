<template>
  <v-container>
    <v-row v-if="scenarioDefinitionMode === 'geospatial'">
      <v-col>
        <geospatial-display :parameterValue="parameterValue" />
      </v-col>
    </v-row>

    <v-row v-else class="d-block">
      <v-item-group class="d-flex justify-center mt-2" tag="div" mandatory v-model="window">
        <v-item v-for="parameter of parameters" :key="parameter" v-slot="{ active, toggle }">
          <div class="mr-5">
            <v-btn @click="toggle" :color="parameter.isSet ? '' : 'error'" :input-value="active" icon>
              <v-icon>mdi-record</v-icon>
            </v-btn>
            <v-tooltip top>
              <template v-slot:activator="{ attrs, on }">
                <span v-bind="attrs" v-on="on">{{ parameter.metaData.name }}</span>
              </template>
              {{ parameter.metaData.description }}
            </v-tooltip>
          </div>
        </v-item>
      </v-item-group>

      <v-window v-model="window">
        <v-window-item>
          <enumerated-parameter-display
            :baseline="baseline.areaContaminated"
            :parameterValue="parameterValue.areaContaminated"
          />
        </v-window-item>

        <v-window-item>
          <enumerated-parameter-display :baseline="baseline.loading" :parameterValue="parameterValue.loading" />
        </v-window-item>
      </v-window>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ContaminationDefinition from '@/implementations/parameter/list/ContaminationDefinition';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import { ScenarioDefinitionMode } from '@/types';
import EnumeratedParameter from '@/implementations/parameter/list/enumeratedParameter';
import EnumeratedParameterDisplay from '../distributionDisplay/EnumeratedParameterDisplay.vue';
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

  baseline = this.$store.state.currentSelectedParameter.baseline;

  window = 0;

  get parameters(): EnumeratedParameter[] {
    return [this.parameterValue.areaContaminated, this.parameterValue.loading];
  }
}
</script>

<style scoped lang="scss"></style>
