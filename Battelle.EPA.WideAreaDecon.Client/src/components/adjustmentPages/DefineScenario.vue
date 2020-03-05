<template>
  <v-container fill-height fluid>
    <parameter-selection-drawer />
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col>
          <p class="text-center display-3">Scenario definition page under construction...</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterSelectionDrawer from '@/components/parameters/ParameterSelectionDrawer.vue';
import NullParameter from '@/implementations/parameter/NullParameter';
import IParameter from '@/interfaces/parameter/IParameter';

@Component({
  components: { ParameterSelectionDrawer },
})
export default class DefineScenario extends Vue {
  @State selectedScenarioParameter!: IParameter;

  created() {
    this.$store.commit('changeSelectedScenarioParameter', new NullParameter());
  }
}
</script>

<style scoped lang="scss"></style>
