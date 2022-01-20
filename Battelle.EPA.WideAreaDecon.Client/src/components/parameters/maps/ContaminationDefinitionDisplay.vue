<template>
  <v-container>
    <v-row v-if="scenarioDefinitionMode === 'geospatial'">
      <v-col>
        <geospatial-display :parameterValue="parameterValue" />
      </v-col>
    </v-row>

    <v-row v-else class="d-block">
      <v-col>
        <v-item-group class="d-flex justify-center mt-2" tag="div" mandatory v-model="window">
          <v-item v-for="parameter of parameters" :key="parameter.metaData.name" v-slot="{ active, toggle }">
            <div class="mr-5">
              <v-btn @click="toggle" :color="parameter.isSet ? '' : 'error'" :input-value="active" icon>
                <v-icon>mdi-record</v-icon>
              </v-btn>
              <v-tooltip bottom>
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
      </v-col>
    </v-row>

    <v-row>
      <v-col class="ml-auto" cols="auto">
        <v-btn @click="switchModes">switch to {{ otherMode }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { ParameterSelectionStoreActions } from '@/constants/store/ParameterSelection';
import ContaminationDefinition from '@/implementations/parameter/list/ContaminationDefinition';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import { ScenarioDefinitionMode } from '@/types';
import EnumeratedParameter from '@/implementations/parameter/list/enumeratedParameter';
import { nameof } from 'ts-simple-nameof';
import { StoreNames } from '@/constants/store/store';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
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

  @State(nameof<IParameterSelection>((s) => s.scenarioDefinitionMode), { namespace: StoreNames.PARAMETER_SELECTION })
  scenarioDefinitionMode!: ScenarioDefinitionMode;

  @Action(ParameterSelectionStoreActions.SET_SCENARIO_DEFINITION_MODE, { namespace: StoreNames.PARAMETER_SELECTION })
  setScenarioDefinitionMode!: (newMode: ScenarioDefinitionMode) => void;

  @Action(ParameterSelectionStoreActions.RESET_CURRENT_SELECTED_PARAMETER, {
    namespace: StoreNames.PARAMETER_SELECTION,
  })
  resetCurrentSelectedParameter!: () => void;

  @State(nameof<IParameterSelection>((s) => s.currentSelectedParameter), { namespace: StoreNames.PARAMETER_SELECTION })
  currentSelectedParameter!: ParameterWrapper;

  get baseline(): IParameter {
    return this.currentSelectedParameter.baseline;
  }

  window = 0;

  get otherMode(): ScenarioDefinitionMode {
    return this.scenarioDefinitionMode === 'geospatial' ? 'manual' : 'geospatial';
  }

  get parameters(): EnumeratedParameter[] {
    return [this.parameterValue.areaContaminated, this.parameterValue.loading];
  }

  switchModes(): void {
    this.resetCurrentSelectedParameter();
    this.setScenarioDefinitionMode(this.otherMode);
  }
}
</script>

<style scoped lang="scss"></style>
