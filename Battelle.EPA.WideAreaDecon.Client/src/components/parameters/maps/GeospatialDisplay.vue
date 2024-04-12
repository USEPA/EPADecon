<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab v-for="tab of tabNames" :key="tab"> {{ tab }} </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tab of tabNames" :key="tab">
        <component
          @param-changed="setParameterValues"
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
import Constant from '@/implementations/parameter/distribution/Constant';
import CityMap from './CityMap.vue';
import BuildingControls from './BuildingControls.vue';
import SubwayControls from './SubwayControls.vue';
import PlumeConcentration from './PlumeConcentration.vue';
import { nameof } from 'ts-simple-nameof';

@Component({ components: { BuildingControls, CityMap, SubwayControls, PlumeConcentration } })
export default class GeospatialDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: ContaminationDefinition;

  tab = 0;

  tabNames = ['map', 'plume concentration', 'buildings', 'subways'];

  parameterWasReset = false;

  @Watch('parameterValue')
  resetParameterValueAndMap(): void {
    this.parameterWasReset = true;
    const [map] = this.$refs.map as CityMap[];

    map.changeMapLocation(this.parameterValue.mapLocation);
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

    this.parameterValue.mapSource = source;

    if (this.parameterWasReset) {
      this.parameterWasReset = false;
      return;
    }

    const bpf = (this.parameterValue.buildingProtectionFactor as Constant).value ?? 0.2;
    const spf = (this.parameterValue.subwayProtectionFactor as Constant).value ?? 0.2;
    const subwayTunnelWidth = (this.parameterValue.subwayTunnelWidth as Constant).value ?? 4;
    const plumeConcentration = (this.parameterValue.plumeConcentrationFactor as Constant).value ?? 5;

    // indoor area
    const buildingAreaSum = buildingAreasInPlume.reduce((acc, cur) => acc + cur, 0);
    const LoadingIndoor = bpf * plumeConcentration;
    this.$set(this.parameterValue.loading.values.Indoor, 'value', LoadingIndoor);
    this.$set(
      this.parameterValue,
      nameof<ContaminationDefinition>((cd) => cd.buildingAreasInPlume),
      buildingAreasInPlume.filter((a) => a > 0),
    );
    this.$set(this.parameterValue.areaContaminated.values.Indoor, 'value', buildingAreaSum);

    // underground
    const undergroundArea = subwayLineLengthsInPlume.reduce((acc, cur) => acc + cur, 0) * subwayTunnelWidth;
    const LoadingUnderground = spf * plumeConcentration;
    this.$set(this.parameterValue.areaContaminated.values.Underground, 'value', undergroundArea);
    this.$set(this.parameterValue.loading.values.Underground, 'value', LoadingUnderground);

    // outdoor
    const outdoorArea = totalArea - buildingAreaSum - undergroundArea;
    this.$set(this.parameterValue.areaContaminated.values.Outdoor, 'value', outdoorArea);
    this.$set(this.parameterValue.loading.values.Outdoor, 'value', plumeConcentration);
  }
}
</script>

<style lang="scss" scoped></style>
