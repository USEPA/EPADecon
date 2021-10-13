<template>
  <v-container>
    <v-row id="map-container">
      <div id="map" />

      <v-toolbar id="map-tools" dense floating rounded>
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tOn, attrs: tAttrs }">
            <v-menu bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="{ ...attrs, ...tAttrs }" v-on="{ ...on, ...tOn }">
                  <v-icon> {{ currentToolIcon }} </v-icon>
                </v-btn>
              </template>
              <v-list class="mt-2 ml-n1">
                <template v-for="tool of mapTools">
                  <v-tooltip left :key="tool.shape">
                    <template v-slot:activator="{ on, attrs }">
                      <v-list-item @click="drawShape = tool.shape" v-bind="attrs" v-on="on">
                        <v-icon :class="{ 'primary--text': tool.shape === drawShape }"> {{ tool.icon }} </v-icon>
                      </v-list-item>
                    </template>
                    {{ tool.tooltip }}
                  </v-tooltip>
                </template>
              </v-list>
            </v-menu>
          </template>
          Change tool
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ attrs, on }">
            <v-btn @click="resetMapDrawings" :disabled="!mapHasDrawing" icon v-bind="attrs" v-on="on">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </template>
          Remove plume
        </v-tooltip>

        <!-- <v-menu bottom left offset-y>
          <template v-slot:activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon> mdi-chart-box-outline </v-icon>
            </v-btn>
          </template>
          <v-list class="mt-2 ml-n1">
            <v-list-item v-for="dist of mapDistributions" @click="distMode = dist" :key="dist">
              <span :class="{ 'primary--text': dist === distMode }">{{ dist }}</span>
            </v-list-item>
          </v-list>
        </v-menu> -->

        <v-tooltip bottom>
          <template v-slot:activator="{ on: tOn, attrs: tAttrs }">
            <v-menu bottom left offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="{ ...attrs, ...tAttrs }" v-on="{ ...on, ...tOn }">
                  <v-icon> mdi-map-marker </v-icon>
                </v-btn>
              </template>
              <v-list class="mt-2 ml-n1">
                <v-list-item
                  v-for="location of Object.values(mapLocations)"
                  @click="mapLocation = location"
                  :key="location"
                >
                  <span :class="{ 'primary--text': location === mapLocation }">{{ location }}</span>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          Change location
        </v-tooltip>
      </v-toolbar>
    </v-row>

    <v-row>
      <v-col cols="3">
        <p>Building Protection Factor</p>

        <v-slider :max="pfMax" :min="pfMin" :step="0.01" hide-details thumb-label class="align-center" v-model="bpf">
          <template #append>
            <v-text-field :rules="[validationRulesPf]" hide-details type="number" v-model.number="bpf" />
          </template>
        </v-slider>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3">
        <p>Subway Protection Factor</p>

        <v-slider :max="pfMax" :min="pfMin" :step="0.01" hide-details thumb-label class="align-center" v-model="spf">
          <template #append>
            <v-text-field :rules="[validationRulesPf]" hide-details type="number" v-model.number="spf" />
          </template>
        </v-slider>
      </v-col>

      <v-col cols="3">
        <p>Subway Tunnel Width</p>

        <v-slider
          :max="subwayWidthMax"
          :min="subwayWidthMin"
          :step="0.01"
          hide-details
          thumb-label
          class="align-center"
          v-model="subwayTunnelWidth"
        >
          <template #append>
            <v-text-field
              :rules="[validationRulesSubway]"
              type="number"
              hide-details
              v-model.number="subwayTunnelWidth"
            />
          </template>
        </v-slider>
      </v-col>
    </v-row>
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
import { getArea, getLength } from 'ol/sphere';
import { unByKey } from 'ol/Observable';
import Feature from 'ol/Feature';
import { Circle, Geometry, LinearRing, LineString, Point, Polygon } from 'ol/geom';
import { fromCircle } from 'ol/geom/Polygon';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { CycleColorProvider } from 'battelle-common-vue-charting';
import intersect from '@turf/intersect';
import { GeoJSON } from 'ol/format';
import MapLocation from '@/enums/maps/mapLocation';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import ICityDataProvider from '@/interfaces/providers/ICityDataProvider';
import {
  bostonViewOptions,
  dcViewOptions,
  newOrleansViewOptions,
  nycViewOptions,
  phillyViewOptions,
  sanFranciscoViewOptions,
  validateWithLimits,
} from '@/constants';
import Overlay from 'ol/Overlay';
import { GeoJSONPolygon } from 'ol/format/GeoJSON';

@Component
export default class GeospatialDisplay extends Vue implements IParameterDisplay {
  @Prop() parameterValue!: EnumeratedParameter;

  readonly raster = new TileLayer({ source: new OSM() });

  readonly source = new VectorSource({ wrapX: false });

  areaTooltip: Overlay | null = null;

  areaTooltipEl: HTMLElement | null = null;

  buildingAreasInPlume: number[] = [];

  cityDataProvider = container.get<ICityDataProvider>(TYPES.CityDataProvider);

  /** Building Protection Factor (used for estimating indoor area contaminated) */
  bpf = 0.5;

  // distMode: 'Constant' | 'Uniform' = 'Constant';

  draw: Draw | null = null;

  drawShape: DrawShape = 'None';

  map: Map | null = null;

  // mapDistributions = ['Constant', 'Uniform'];

  mapTools = [
    {
      icon: 'mdi-cursor-move',
      shape: 'None',
      tooltip: 'Pan tool',
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

  mapLocation = MapLocation.NewYorkCity;

  mapLocations = MapLocation;

  pfMax = 0.5;

  pfMin = 0.2;

  formatter = new GeoJSON();

  // select: Select = new Select(); // TODO potentially make readonly

  sketch: Feature<Geometry> | null = null;

  /** Subway Protection Factor (used for estimating underground area contaminated) */
  spf = 0.3;

  subwayLineLengthsInPlume: number[] = [];

  subwayTunnelWidth = 4.27;

  subwayWidthMax = 4.5;

  subwayWidthMin = 4;

  totalArea = 0;

  get currentToolIcon(): string {
    return this.mapTools.find((c) => c.shape === this.drawShape)?.icon ?? '';
  }

  get formattedArea(): string {
    return this.totalArea > 10000
      ? `${Math.round((this.totalArea / 1000000) * 100) / 100} km^2`
      : `${Math.round(this.totalArea * 100) / 100} m^2`;
  }

  get mapHasDrawing(): boolean {
    return this.source.getFeatures().length > 0;
  }

  get viewOptions(): ViewOptions {
    switch (this.mapLocation) {
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
    this.initAreaTooltip();
    this.clearArea();
  }

  @Watch('parameterValue')
  @Watch('mapLocation')
  changeMapLocation(): void {
    this.map?.setView(new View(this.viewOptions));
    this.resetMapDrawings();
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

        this.initAreaTooltip();

        listener = this.sketch.getGeometry()?.on('change', ({ target }) => {
          let polygon = target as Polygon;

          if (polygon.getType() === 'Circle') {
            polygon = fromCircle((polygon as unknown) as Circle);
          }

          this.totalArea = this.getAreaOfPolygon(polygon);
          if (this.areaTooltipEl) {
            // update tooltip
            this.areaTooltip?.setPosition(polygon.getInteriorPoint().getCoordinates());
            this.areaTooltipEl.innerText = this.formattedArea;
          }
        });
      });

      this.draw.on('drawend', async ({ feature }: { feature: Feature<Polygon> }) => {
        // TODO work on different dist types...
        // if (this.distMode === 'Uniform') {
        //   const draw = new Draw({
        //     source: this.source,
        //     type,
        //     geometryFunction,
        //     features: new Collection([feature]),
        //   });

        //   draw.setActive(true);
        //   this.map?.addInteraction(draw);

        //   draw.on('drawend', (event) => {
        //     console.log(event.feature);
        //   });

        // const feat = feature as Feature<Circle>;
        // const center = feat.getGeometry()?.getCenter();
        // const radius = feat.getGeometry()?.getRadius();
        // const geometry = fromCircle(feat.getGeometry(radius));
        // // Create a second circle with radius divided by 2 with same center
        // const innerRing = fromCircle(new Circle(center, radius / 2));
        // // Create a linearRing to create the hole, based on innerRing coordinates
        // const linearRing = new LinearRing(innerRing.getCoordinates()[0]);
        // // Append it to the geometry
        // geometry.appendLinearRing(linearRing);
        // Overwrite the ol.geom.Circle geometry with the ol.geom.Polygon with hole
        // Caution: now you have an ol.geom.Polygon, you can't edit it with the radius
        // feature.setGeometry(geometry);
        // }

        const geom = feature.getGeometry() as Polygon | Circle;
        const feat = geom.getType() === 'Circle' ? new Feature(fromCircle(geom as Circle)) : feature;
        await this.getBuildingAreasInPlume(feat);
        await this.getSubwayAreasInPlume(feat);

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
    this.subwayLineLengthsInPlume.splice(0);
  }

  initAreaTooltip(): void {
    if (this.areaTooltipEl) {
      this.areaTooltipEl.parentElement?.removeChild(this.areaTooltipEl);
    }

    this.areaTooltipEl = document.createElement('div');
    this.areaTooltipEl.classList.add('ol-tooltip', 'v-tooltip__content');

    this.areaTooltip = new Overlay({ element: this.areaTooltipEl });
    this.map?.addOverlay(this.areaTooltip);
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
  getAreaOfPolygon(polygon: Polygon): number {
    // transform polygon to projection capable of area calculations
    const geom = polygon.clone().transform('EPSG:4326', 'EPSG:3857');
    return getArea(geom);
  }

  async getBuildingAreasInPlume(feat: Feature<Polygon>): Promise<void> {
    const buildingCoords = await this.cityDataProvider.getInstersectingBuildingCoordinates(feat, this.mapLocation);
    const poly = feat.getGeometry() as Polygon;
    this.buildingAreasInPlume = buildingCoords.map((coords) => {
      const building = new Polygon([coords]);

      const overlap = this.formatter.readFeature(
        intersect(
          this.formatter.writeGeometryObject(poly) as GeoJSONPolygon,
          this.formatter.writeGeometryObject(building) as GeoJSONPolygon,
        ),
      );
      // add building to map
      overlap.setStyle(
        new Style({
          stroke: new Stroke({
            color: 'rgba(0, 0, 0, 1)',
            width: 0.6,
          }),
        }),
      );
      this.source.addFeature(overlap);

      return overlap ? this.getAreaOfPolygon(overlap.getGeometry()) : 0;
    });
  }

  async getSubwayAreasInPlume(feat: Feature<Polygon>): Promise<void> {
    const subwayCoords = await this.cityDataProvider.getIntersectingSubwayCoordinates(feat, this.mapLocation);
    this.subwayLineLengthsInPlume = subwayCoords.map((coords) => {
      const coordsInPlume = coords.map((coord) => {
        return coord;
      });
      const lineFeat = new Feature(new LineString(coordsInPlume));

      lineFeat.setStyle(
        new Style({
          stroke: new Stroke({
            color: 'rgba(0, 0, 0, 1)',
            lineDash: [5],
            width: 0.7,
          }),
        }),
      );
      this.source.addFeature(lineFeat);

      const line = lineFeat.getGeometry()?.clone().transform('EPSG:4326', 'EPSG:3857') as Geometry;
      return getLength(line);
    });
  }

  setParameterValues(): void {
    // TODO handle multiple dist types
    // indoor
    const buildingAreaSum = this.buildingAreasInPlume.reduce((acc, cur) => acc + cur, 0);
    const indoorArea = (1 - this.bpf) * buildingAreaSum;
    this.$set(this.parameterValue.values.Indoor, 'value', indoorArea);
    // underground TODO
    const subwayLengthSum = this.subwayLineLengthsInPlume.reduce((acc, cur) => acc + cur, 0);
    const undergroundArea = (1 - this.spf) * (subwayLengthSum * this.subwayTunnelWidth);
    this.$set(this.parameterValue.values.Underground, 'value', undergroundArea);
    // outdoor
    const outdoorArea = this.totalArea - indoorArea - undergroundArea;
    this.$set(this.parameterValue.values.Outdoor, 'value', outdoorArea);
  }

  validationRulesPf(value: number): boolean | string {
    return validateWithLimits(this.pfMin, this.pfMax, value);
  }

  validationRulesSubway(value: number): boolean | string {
    return validateWithLimits(this.subwayWidthMin, this.subwayWidthMax, value);
  }

  mounted(): void {
    this.initMap();
    this.initAreaTooltip();
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
</style>
