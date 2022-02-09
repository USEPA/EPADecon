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
import PlumeConcentration from './PlumeConcentration.vue';

@Component({ components: { BuildingControls, CityMap, SubwayControls, PlumeConcentration } })
export default class GeospatialDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: ContaminationDefinition;

  plumeConcentration = 30;

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
      case 'plume concentration':
        return 'plume-concentration';
      default:
        return '';
    }
  }

  setParameterValues(): void {
    const [{ buildingAreasInPlume, source, subwayLineLengthsInPlume, totalArea }] = this.$refs.map as CityMap[];

    console.log('setting parameter values');

    const bpf = 0.5;
    const spf = 0.5;
    const subwayTunnelWidth = 30;

    // indoor area
    const buildingAreaSum = buildingAreasInPlume.reduce((acc, cur) => acc + cur, 0);
    const LoadingIndoor = bpf * this.plumeConcentration;
    this.$set(this.parameterValue.areaContaminated.values.Indoor, 'value', buildingAreaSum);
    this.$set(this.parameterValue.loading.values.Indoor, 'value', LoadingIndoor);
    this.$set(this.parameterValue, 'buildingProtectionFactor', bpf);

    // underground
    const undergroundArea = subwayLineLengthsInPlume.reduce((acc, cur) => acc + cur, 0) * subwayTunnelWidth;
    const LoadingUnderground = spf * this.plumeConcentration;
    this.$set(this.parameterValue.areaContaminated.values.Underground, 'value', undergroundArea);
    this.$set(this.parameterValue.loading.values.Underground, 'value', LoadingUnderground);
    this.$set(this.parameterValue, 'subwayProtectionFactor', spf);
    this.$set(this.parameterValue, 'subwayTunnelWidth', subwayTunnelWidth);

    // outdoor
    const outdoorArea = totalArea - buildingAreaSum - undergroundArea;
    this.$set(this.parameterValue.areaContaminated.values.Outdoor, 'value', outdoorArea);
    this.$set(this.parameterValue.loading.values.Outdoor, 'value', this.plumeConcentration);

    this.parameterValue.mapSource = source;

    console.log(this.parameterValue);
  }
}
</script>

<style lang="scss" scoped></style>
