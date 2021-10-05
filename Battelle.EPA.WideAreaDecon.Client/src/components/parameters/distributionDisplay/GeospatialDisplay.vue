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

    <v-text-field label="Area" readonly :value="totalArea">
      <template v-slot:append>
        <span class="grey--text">m^2</span>
      </template>
    </v-text-field>

    <!-- <v-select :items="['Constant', 'Uniform']" v-model="distType" /> -->

    <!-- <v-btn>Remove Plume</v-btn> -->

    <!-- <v-select :items="" v-model="location" /> -->
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
import { Circle, Geometry, LinearRing, Polygon } from 'ol/geom';
import { fromCircle } from 'ol/geom/Polygon';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { CycleColorProvider } from 'battelle-common-vue-charting';
import axios from 'axios';
import intersect from '@turf/intersect';
import { GeoJSON } from 'ol/format';

// TODO
interface IOpenDataBuilding {
  // eslint-disable-next-line camelcase
  the_geom: {
    coordinates: number[][][][];
  };
}

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

  buildingAreasInPlume: number[] = [];

  draw: Draw | null = null;

  map: Map | null = null;

  // distType: 'Constant' | 'Uniform' = 'Constant';

  drawShape: DrawShape = 'None';

  // select: Select = new Select(); // TODO potentially make readonly

  sketch: Feature<Geometry> | null = null;

  totalArea = 0;

  get indoorArea(): number {
    return this.buildingAreasInPlume.reduce((acc, cur) => acc + cur, 0);
  }

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
          this.totalArea = polygon.getType() === 'Circle' ? this.getAreaOfCircle(polygon) : this.formatArea(polygon);
        });
      });

      this.draw.on('drawend', ({ feature }) => {
        // TODO work on different dist types...
        // if (this.distType === 'Uniform') {
        //   const feat = feature as Feature<Circle>;
        //   const center = feat.getGeometry()?.getCenter();
        //   const radius = feat.getGeometry()?.getRadius();
        //   const geometry = fromCircle(feat.getGeometry(radius));
        //   // Create a second circle with radius divided by 2 with same center
        //   const innerRing = fromCircle(new Circle(center, radius / 2));
        //   // Create a linearRing to create the hole, based on innerRing coordinates
        //   const linearRing = new LinearRing(innerRing.getCoordinates()[0]);
        //   // Append it to the geometry
        //   geometry.appendLinearRing(linearRing);
        //   // Overwrite the ol.geom.Circle geometry with the ol.geom.Polygon with hole
        //   // Caution: now you have an ol.geom.Polygon, you can't edit it with the radius
        //   feature.setGeometry(geometry);
        // }
        this.getBuildingAreasInPlume(feature);

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

  async getBuildingAreasInPlume(feat: Feature<Polygon>): Promise<void> {
    // TODO may need to update url also may need account token
    const url = 'https://data.cityofnewyork.us/resource/iues-xngg.json';

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const coords = feat
      .getGeometry()!
      .getCoordinates()[0]
      .flatMap((xy) => xy.join(' '))
      .join(', ');
    const query = `$where=intersects(the_geom, 'POLYGON((${coords}))')`;

    const { data } = await axios.get<IOpenDataBuilding[]>(`${url}?${query}`);
    const formatter = new GeoJSON();

    this.buildingAreasInPlume = data.map((building) => {
      // approximate area for each building
      const [buildingCoords] = building.the_geom.coordinates;
      const buildingFeat = new Feature<Polygon>(new Polygon(buildingCoords));

      const overlap = formatter.readFeature(
        intersect(formatter.writeFeatureObject(feat), formatter.writeFeatureObject(buildingFeat)),
      );
      // show building on map
      overlap.setStyle(
        new Style({
          stroke: new Stroke({
            color: 'rgba(0, 0, 0, 255)',
            width: 0.4,
          }),
        }),
      );
      this.source.addFeature(overlap);

      return overlap ? this.formatArea(overlap.getGeometry()) : 0;
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
