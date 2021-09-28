<template>
  <div>
    <div id="map" ref="map" />

    <v-overflow-btn :items="['None', 'Box', 'Circle', 'Square']" label="Plume Shape" v-model="drawShape" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DrawShape } from '@/types';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import EnumeratedParameter from '@/implementations/parameter/list/enumeratedParameter';
import Draw, { createBox, createRegularPolygon } from 'ol/interaction/Draw';
import Map from 'ol/Map';
import View, { ViewOptions } from 'ol/View';
import Polygon from 'ol/geom/Polygon';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { defaults as DefaultControls, ScaleLine } from 'ol/control';

@Component
export default class GeospatialDisplay extends Vue implements IParameterDisplay {
  @Prop() parameterValue!: EnumeratedParameter;

  readonly raster = new TileLayer({ source: new OSM() });

  readonly source = new VectorSource({ wrapX: false });

  draw: Draw | null = null;

  map: Map | null = null;

  drawShape: DrawShape = 'None';

  static defaultViewOptions: ViewOptions = {
    projection: 'EPSG:4326',
    center: [0, 0],
    zoom: 2,
    extent: [-130, 22, -60, 51],
  };

  @Watch('drawShape')
  resetMapDrawings(): void {
    if (this.map && this.draw) {
      this.map.removeInteraction(this.draw);
    }
    this.addInteraction();
  }

  addInteraction(): void {
    let value = this.drawShape;
    if (value !== 'None') {
      let geometryFunction;
      switch (value) {
        case 'Square': {
          value = 'Circle';
          geometryFunction = createRegularPolygon(4);
          break;
        }
        case 'Box': {
          value = 'Circle';
          geometryFunction = createBox();
          break;
        }
        default:
          break;
      }

      this.draw = new Draw({
        source: this.source,
        type: value,
        geometryFunction,
      });

      this.map?.addInteraction(this.draw);
    }
  }

  initMap(): void {
    const vector = new VectorLayer({ source: this.source });

    this.map = new Map({
      layers: [this.raster, vector],
      target: 'map',
      view: new View({ ...GeospatialDisplay.defaultViewOptions }),
      controls: DefaultControls().extend([new ScaleLine({ units: 'degrees' })]),
    });
  }

  mounted(): void {
    this.initMap();
    this.addInteraction();
  }
}
</script>

<style lang="scss" scoped>
@import '~ol/ol.css';

#map {
  height: 500px;
  width: 100%;
}
</style>
