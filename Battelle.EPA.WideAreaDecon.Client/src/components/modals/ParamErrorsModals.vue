<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="600">
      <v-card>
        <v-card-title class="headline"> Scenario Errors </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col>
                  <h4>Unset Parameters:</h4>
                  <v-list dense>
                    <v-list-item v-for="(item, i) of unsetParams" :key="i">{{ item }}</v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn outlined color="primary darken-1" text @click="closeOrCancel"> close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, VModel } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import ParameterWrapperFilter from '@/implementations/parameter/ParameterWrapperFilter';
import { nameof } from 'ts-simple-nameof';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import { StoreNames } from '@/constants/store/store';

@Component
export default class ParamErrorsModals extends Vue {
  @VModel({ default: () => false }) isVisible!: boolean;

  @State(nameof<IParameterSelection>((s) => s.scenarioDefinition), { namespace: StoreNames.PARAMETER_SELECTION })
  scenarioDefinition!: ParameterWrapperList;

  @State(nameof<IParameterSelection>((s) => s.scenarioParameters), { namespace: StoreNames.PARAMETER_SELECTION })
  scenarioParameters!: ParameterWrapperList;

  get unsetParams(): string[] {
    return [
      ...this.recursiveUnset(this.scenarioDefinition.filters),
      ...this.recursiveUnset(this.scenarioParameters.filters),
    ];
  }

  recursiveUnset(filter: ParameterWrapperFilter[]): string[] {
    const ans: string[] = [];
    filter.forEach((f) => {
      ans.concat(this.recursiveUnset(f.filters));
      f.parameters.forEach((p) => {
        if (!p.current.isSet) {
          ans.push(p.baseline.metaData.name);
        }
      });
    });

    return ans;
  }

  closeOrCancel(): void {
    this.isVisible = false;
  }

  viewResults(): void {
    this.$router.push({ name: 'viewResults' });
    this.isVisible = false;
  }
}
</script>

<style lang="scss" scoped></style>
