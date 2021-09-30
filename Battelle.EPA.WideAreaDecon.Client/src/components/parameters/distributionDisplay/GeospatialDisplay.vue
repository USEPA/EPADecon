<template>
  <div>
    <div id="map-container">
      <div id="map" />

      <v-select
        :items="['None', 'Box', 'Circle', 'Square']"
        background-color="white"
        class="plume-shape-selector"
        placeholder="Plume Shape"
        dense
        hide-details
        outlined
        v-model="drawShape"
      />
    </div>

    <v-text-field label="Area" readonly :value="area">
      <!-- <template v-slot:append>
        <span class="grey--text">{{ parameterValue.metaData.units }}</span>
      </template> -->
    </v-text-field>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DrawShape } from '@/types';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import EnumeratedParameter from '@/implementations/parameter/list/enumeratedParameter';
import Draw, { createBox, createRegularPolygon } from 'ol/interaction/Draw';
// import { Select, Translate, defaults as defaultInteractions } from 'ol/interaction';
import Map from 'ol/Map';
import View, { ViewOptions } from 'ol/View';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { defaults as defaultControls, ScaleLine } from 'ol/control';
import { getArea } from 'ol/sphere';
import { unByKey } from 'ol/Observable';
import Feature from 'ol/Feature';
import { Circle, Geometry, Polygon } from 'ol/geom';
import { fromCircle } from 'ol/geom/Polygon';
import { Circle as CircleStyle, Fill, Style } from 'ol/style';
import { CycleColorProvider } from 'battelle-common-vue-charting';

@Component
export default class GeospatialDisplay extends Vue implements IParameterDisplay {
  @Prop() parameterValue!: EnumeratedParameter;

  readonly defaultViewOptions: ViewOptions = {
    projection: 'EPSG:4326',
    center: [-73.98, 40.76], // Manhattan
    zoom: 12,
    extent: [-130, 22, -60, 51],
  };

  readonly raster = new TileLayer({ source: new OSM() });

  readonly source = new VectorSource({ wrapX: false });

  area = 0;

  draw: Draw | null = null;

  map: Map | null = null;

  drawShape: DrawShape = 'None';

  // select: Select = new Select(); // TODO potentially make readonly

  sketch: Feature<Geometry> | null = null;

  @Watch('drawShape')
  resetMapDrawings(): void {
    if (this.draw) {
      this.map?.removeInteraction(this.draw);
      this.source.clear();
    }
    this.addInteraction();
  }

  addInteraction(): void {
    let type = this.drawShape;
    if (type !== 'None') {
      let geometryFunction;
      switch (type) {
        case 'Square': {
          type = 'Circle';
          geometryFunction = createRegularPolygon(4);
          break;
        }
        case 'Box': {
          type = 'Circle';
          geometryFunction = createBox();
          break;
        }
        case 'Circle':
          break;
        default:
          return;
      }

      const color = new CycleColorProvider().getNextColor();

      this.draw = new Draw({
        source: this.source,
        type,
        geometryFunction,
        style: new Style({
          fill: new Fill({
            color,
          }),
          image: new CircleStyle({
            fill: new Fill({
              color,
            }),
            radius: 5,
            rotateWithView: true,
          }),
        }),
      });

      this.map?.addInteraction(this.draw);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let listener: any;

      this.draw.on('drawstart', ({ feature }) => {
        // clear existing plumes
        this.source.clear();

        this.sketch = feature as Feature<Geometry>;

        // set style of feature
        this.sketch.setStyle(
          new Style({
            fill: new Fill({
              color,
            }),
          }),
        );

        listener = this.sketch.getGeometry()?.on('change', ({ target }) => {
          const polygon = target as Polygon;
          this.area = polygon.getType() === 'Circle' ? this.getAreaOfCircle(polygon) : this.formatArea(polygon);
        });
      });

      this.draw.on('drawend', () => {
        // unset sketch
        this.sketch = null;
        // remove draw event listener
        unByKey(listener);
      });
    }
  }

  initMap(): void {
    const vector = new VectorLayer({ source: this.source });
    // const translate = new Translate({ features: this.select.getFeatures() });

    this.map = new Map({
      // interactions: defaultInteractions().extend([this.select, translate]),
      layers: [this.raster, vector],
      target: 'map',
      view: new View({ ...this.defaultViewOptions }),
      controls: defaultControls().extend([new ScaleLine({ units: 'degrees' })]),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  formatArea(polygon: Polygon): number {
    // transform polygon to projection capable of area calculations
    const geom = polygon.clone().transform('EPSG:4326', 'EPSG:3857');
    return getArea(geom);
  }

  getAreaOfCircle(polygon: Polygon): number {
    const circle = fromCircle((polygon as unknown) as Circle);
    return this.formatArea(circle);
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
#map-container {
  position: relative;
}
.plume-shape-selector {
  max-width: 12rem;
  opacity: 0.85;
  position: absolute;
  right: 0.75em;
  top: 0.75em;
}
</style>
