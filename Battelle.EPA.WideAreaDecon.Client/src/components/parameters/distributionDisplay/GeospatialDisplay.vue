<template>
  <v-container>
    <v-row id="map-container">
      <div id="map" />

      <v-toolbar id="map-tools" dense floating rounded>
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon> {{ currentToolIcon }} </v-icon>
            </v-btn>
          </template>
          <v-list class="mt-2 ml-n1">
            <template v-for="control of mapControls">
              <v-tooltip left :key="control.shape">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item @click="drawShape = control.shape" v-bind="attrs" v-on="on">
                    <v-icon :class="{ 'primary--text': control.shape === drawShape }"> {{ control.icon }} </v-icon>
                  </v-list-item>
                </template>
                {{ control.tooltip }}
              </v-tooltip>
            </template>
          </v-list>
        </v-menu>

        <v-btn icon>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-toolbar>
    </v-row>

    <v-row>
      <v-col cols="3">
        <p>Building Protection Factor</p>

        <v-slider :max="0.5" :min="0.2" :step="0.01" thumb-label class="align-center" v-model="bpf">
          <template #prepend>
            <span class="grey--text">{{ bpfMin }}</span>
          </template>

          <template #append>
            <span class="grey--text">{{ bpfMax }}</span>

            <!-- <v-card class="pa-2" outlined tile>
              <v-text-field :rules="[validationRulesBpf]" type="number" v-model.number="bpf" />
            </v-card> -->
          </template>
        </v-slider>
      </v-col>

      <!-- <v-col> </v-col> -->
    </v-row>

    <!-- <v-text-field label="Area" readonly :value="totalArea">
      <template v-slot:append>
        <span class="grey--text">m^2</span>
      </template>
    </v-text-field> -->

    <!-- <v-select :items="['Constant', 'Uniform']" v-model="distType" /> -->

    <!-- <v-btn>Remove Plume</v-btn> -->

    <v-select :items="Object.values(mapLocation)" id="city-selector" label="City" v-model="location" />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DrawShape } from '@/types';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import EnumeratedParameter from '@/implementations/parameter/list/enumeratedParameter';
import Draw, { createBox, createRegularPolygon } from 'ol/interaction/Draw';
import { Select, Translate, defaults as defaultInteractions } from 'ol/interaction';
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
import intersect from '@turf/intersect';
import { GeoJSON } from 'ol/format';
import MapLocation from '@/enums/maps/mapLocation';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IBuildingDataProvider from '@/interfaces/providers/IBuildingDataProvider';
import {
  bostonViewOptions,
  dcViewOptions,
  newOrleansViewOptions,
  nycViewOptions,
  phillyViewOptions,
  sanFranciscoViewOptions,
} from '@/constants';

@Component
export default class GeospatialDisplay extends Vue implements IParameterDisplay {
  @Prop() parameterValue!: EnumeratedParameter;

  readonly raster = new TileLayer({ source: new OSM() });

  readonly source = new VectorSource({ wrapX: false });

  buildingAreasInPlume: number[] = [];

  buildingDataProvider = container.get<IBuildingDataProvider>(TYPES.BuildingDataProvider);

  /** Building Protection Factor (used for estimating indoor area contaminated) */
  bpf = 0.5;

  bpfMax = 0.5;

  bpfMin = 0.2;

  draw: Draw | null = null;

  location = MapLocation.NewYorkCity;

  map: Map | null = null;

  mapControls = [
    {
      icon: 'mdi-cursor-move',
      shape: 'None',
      tooltip: 'Drag tool',
    },
    {
      icon: 'mdi-circle-outline',
      shape: 'Circle',
      tooltip: 'Circle tool',
    },
    {
      icon: 'mdi-rectangle-outline',
      shape: 'Box',
      tooltip: 'Box tool',
    },
    {
      icon: 'mdi-square-outline',
      shape: 'Square',
      tooltip: 'Square tool',
    },
  ];

  mapLocation = MapLocation;

  // distType: 'Constant' | 'Uniform' = 'Constant';

  drawShape: DrawShape = 'None';

  formatter = new GeoJSON();

  // select: Select = new Select(); // TODO potentially make readonly

  selectedMode = '';

  sketch: Feature<Geometry> | null = null;

  totalArea = 0;

  get currentToolIcon(): string {
    return this.mapControls.find((c) => c.shape === this.drawShape)?.icon ?? '';
  }

  get viewOptions(): ViewOptions {
    switch (this.location) {
      case MapLocation.Boston:
        return bostonViewOptions;
      case MapLocation.NewOrleans:
        return newOrleansViewOptions;
      case MapLocation.NewYorkCity:
        return nycViewOptions;
      case MapLocation.Philadelphia:
        return phillyViewOptions;
      case MapLocation.SanFrancisco:
        return sanFranciscoViewOptions;
      case MapLocation.WashingtonDc:
        return dcViewOptions;
      default:
        return {};
    }
  }

  @Watch('drawShape')
  resetMapDrawings(): void {
    if (this.draw) {
      this.map?.removeInteraction(this.draw);
      this.source.clear();
    }
    this.addInteraction();
    this.clearArea();
  }

  @Watch('parameterValue')
  @Watch('location')
  changeMapLocation(): void {
    this.map?.setView(new View(this.viewOptions));
    this.resetMapDrawings();
    this.clearArea();
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

      this.draw.on('drawend', async ({ feature }: { feature: Feature<Polygon> }) => {
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
        const geom = feature.getGeometry() as Polygon | Circle;
        const feat = geom.getType() === 'Circle' ? new Feature(fromCircle(geom as Circle)) : feature;
        await this.getBuildingAreasInPlume(feat);

        // unset sketch
        this.sketch = null;
        // remove draw event listener
        unByKey(listener);
        // set area values for parameter
        this.setParameterValues();
      });
    }
  }

  clearArea(): void {
    this.totalArea = 0;
    this.buildingAreasInPlume.splice(0);
  }

  initMap(): void {
    const vector = new VectorLayer({ source: this.source });
    // const translate = new Translate({ features: this.select.getFeatures() });

    this.map = new Map({
      // interactions: defaultInteractions().extend([this.select, translate]),
      layers: [this.raster, vector],
      target: 'map',
      view: new View({ ...this.viewOptions }),
      controls: defaultControls().extend([new ScaleLine({ units: 'metric' })]),
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
    const buildingCoords = await this.buildingDataProvider.getInstersectingBuildingCoordinates(feat, this.location);
    this.buildingAreasInPlume = buildingCoords.map((coords) => {
      const buildingFeat = new Feature(new Polygon([coords]));

      const overlap = this.formatter.readFeature(
        intersect(this.formatter.writeFeatureObject(feat), this.formatter.writeFeatureObject(buildingFeat)),
      );
      // add building to map
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

  setParameterValues(): void {
    // TODO handle multiple dist types
    // indoor
    const buildingAreaSum = this.buildingAreasInPlume.reduce((acc, cur) => acc + cur, 0);
    const indoorArea = (1 - this.bpf) * buildingAreaSum;
    this.$set(this.parameterValue.values.Indoor, 'value', indoorArea);
    // underground TODO
    const undergroundArea = 0;
    this.$set(this.parameterValue.values.Underground, 'value', undergroundArea);
    // outdoor
    const outdoorArea = this.totalArea - indoorArea; // TODO account for underground?
    this.$set(this.parameterValue.values.Outdoor, 'value', outdoorArea);
  }

  validationRulesBpf(input: number): boolean | string {
    if (input > this.bpfMax) {
      return `Value must be less than or equal to ${this.bpfMax}`;
    }
    if (input < this.bpfMin) {
      return `Value must be greater than or equal to ${this.bpfMin}`;
    }
    return true;
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
#map-tools {
  opacity: 0.85;
  position: absolute;
  right: 0.75em;
  top: 0.75em;
}
// TODO potentially remove this class
.plume-shape-selector {
  max-width: 12rem;
  opacity: 0.85;
  position: absolute;
  right: 0.75em;
  top: 0.75em;
}
</style>
