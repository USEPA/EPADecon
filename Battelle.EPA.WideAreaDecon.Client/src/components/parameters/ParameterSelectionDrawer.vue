<template>
  <v-navigation-drawer color="grey" class="lighten-2" clipped app :width="450">
    <v-switch v-model="showMap" label="Geospatial Selection"></v-switch>
    <geospatial-selection v-if="showMap" />
    <parameter-list-expansion-panel :list="parameters" v-else />
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import ParameterList from '@/implementations/parameter/ParameterList';
import GeospatialSelection from './GeospatialSelection.vue';
import ParameterListExpansionPanel from './ParameterListExpansionPanel.vue';

@Component({
  components: {
    ParameterListExpansionPanel,
    GeospatialSelection,
  },
})
export default class ParameterSelectionDrawer extends Vue {
  @Prop({ required: true }) parameters!: ParameterList;

  showMap = false;
}
</script>
