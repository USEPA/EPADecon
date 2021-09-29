<template>
  <div>
    <div>{{ areaInMeters }} m<sup>2</sup></div>

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
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { defaults as DefaultControls, ScaleLine } from 'ol/control';
import { getArea } from 'ol/sphere';
import { unByKey } from 'ol/Observable';
import Feature from 'ol/Feature';
import { Circle, Geometry, Polygon } from 'ol/geom';
import { fromCircle } from 'ol/geom/Polygon';
import { getCenter, getWidth } from 'ol/extent';
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

  sketch: Feature<Geometry> | null = null;

  get areaInMeters(): number {
    const metersPerUnit = this.map?.getView().getProjection().getMetersPerUnit() ?? 1;
    return this.area * metersPerUnit ** 2;
  }

  @Watch('drawShape')
  resetMapDrawings(): void {
    if (this.draw) {
      this.map?.removeInteraction(this.draw);
    }
    this.addInteraction();
  }

  addInteraction(): void {
    let type = this.drawShape;
    if (type !== 'None' && !this.area) {
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
            radius: 5,
            fill: new Fill({
              color,
            }),
          }),
        }),
      });

      this.map?.addInteraction(this.draw);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let listener: any;

      this.draw.on('drawstart', ({ feature }) => {
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
          // TODO figure out area computation
          this.area = polygon.getType() === 'Circle' ? this.getAreaOfCircle(polygon) : polygon.getArea();
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

    this.map = new Map({
      layers: [this.raster, vector],
      target: 'map',
      view: new View({ ...this.defaultViewOptions }),
      controls: DefaultControls().extend([new ScaleLine({ units: 'degrees' })]),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getAreaOfCircle(polygon: Polygon): number {
    const extent = polygon.getExtent();
    const circle = fromCircle(new Circle(getCenter(extent), getWidth(extent) / 2));
    return getArea(circle);
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
