<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab v-for="tab of tabNames" :key="tab"> {{ tab }} </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tab of tabNames" :key="tab">
        <component
          @values-changed="setParameterValues"
          :is="getTabComponent(tab)"
          :parameterValue="parameterValue"
          :ref="tab"
        />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import ContaminationDefinition from '@/implementations/parameter/list/ContaminationDefinition';
import CityMap from './CityMap.vue';
import BuildingControls from './BuildingControls.vue';
import SubwayControls from './SubwayControls.vue';

@Component({ components: { BuildingControls, CityMap, SubwayControls } })
export default class GeospatialDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: ContaminationDefinition;

  tab = 0;

  tabNames = ['map', 'plume concentration', 'buildings', 'subways'];

  @Watch('parameterValue')
  resetParameterValues(): void {
    // const [buildingControls] = this.$refs.buildings as BuildingControls[];
    // const [subwayControls] = this.$refs.subways as SubwayControls[];
    const [map] = this.$refs.map as CityMap[];

    map.changeMapLocation();
  }

  // eslint-disable-next-line class-methods-use-this
  getTabComponent(tab: string): string {
    switch (tab) {
      case 'map':
        return 'city-map';
      case 'buildings':
        return 'building-controls';
      case 'subways':
        return 'subway-controls';
      default:
        return '';
    }
  }

  setParameterValues(): void {
    const [{ buildingAreasInPlume, source, subwayLineLengthsInPlume, totalArea }] = this.$refs.map as CityMap[];

    // indoor area
    // const buildingAreaSum = buildingAreasInPlume.reduce((acc, cur) => acc + cur, 0);
    // const indoorArea = (1 - bpf) * buildingAreaSum;
    // this.$set(this.parameterValue.areaContaminated.values.Indoor, 'value', indoorArea);
    // this.$set(this.parameterValue.loading.values.Indoor, 'value', this.loading.indoor);
    // this.$set(this.parameterValue, 'buildingProtectionFactor', bpf);

    // underground
    // const subwayLengthSum = subwayLineLengthsInPlume.reduce((acc, cur) => acc + cur, 0);
    // const undergroundArea = (1 - spf) * (subwayLengthSum * subwayTunnelWidth); // TODO figure out area calc
    // this.$set(this.parameterValue.areaContaminated.values.Underground, 'value', undergroundArea);
    // this.$set(this.parameterValue.loading.values.Underground, 'value', this.loading.underground);
    // this.$set(this.parameterValue, 'subwayProtectionFactor', spf);
    // this.$set(this.parameterValue, 'subwayTunnelWidth', subwayTunnelWidth);

    // outdoor
    // const outdoorArea = totalArea - indoorArea - undergroundArea;
    // this.$set(this.parameterValue.areaContaminated.values.Outdoor, 'value', outdoorArea);
    // this.$set(this.parameterValue.loading.values.Outdoor, 'value', this.loading.outdoor);

    this.parameterValue.mapSource = source;
  }
}
</script>

<style lang="scss" scoped></style>
