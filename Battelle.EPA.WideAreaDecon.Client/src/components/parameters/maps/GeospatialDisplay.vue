<template>
  <v-container class="pb-9">
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
      <v-col>
        <v-slider
          @change="setParameterValues"
          :max="loadingLimits.indoor.max"
          :min="loadingLimits.indoor.min"
          :step="0.01"
          hide-details
          thumb-label
          class="align-center"
          v-model="loading.indoor"
        >
          <template #prepend>
            <span class="grey--text">{{ loadingLimits.indoor.min }}</span>
          </template>
          <template #append>
            <span class="grey--text">{{ loadingLimits.indoor.max }}</span>
          </template>
        </v-slider>
      </v-col>

      <v-col>
        <v-slider
          @change="setParameterValues"
          :max="loadingLimits.outdoor.max"
          :min="loadingLimits.outdoor.min"
          :step="0.01"
          hide-details
          thumb-label
          class="align-center"
          v-model="loading.outdoor"
        >
          <template #prepend>
            <span class="grey--text">{{ loadingLimits.outdoor.min }}</span>
          </template>
          <template #append>
            <span class="grey--text">{{ loadingLimits.outdoor.max }}</span>
          </template>
        </v-slider>
      </v-col>

      <v-col>
        <v-slider
          @change="setParameterValues"
          :max="loadingLimits.underground.max"
          :min="loadingLimits.underground.min"
          :step="0.01"
          hide-details
          thumb-label
          class="align-center"
          v-model="loading.underground"
        >
          <template #prepend>
            <span class="grey--text">{{ loadingLimits.underground.min }}</span>
          </template>
          <template #append>
            <span class="grey--text">{{ loadingLimits.underground.max }}</span>
          </template>
        </v-slider>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-slider
          @change="setParameterValues"
          :max="pfMax"
          :min="pfMin"
          :step="0.01"
          hide-details
          thumb-label
          class="align-center"
          v-model="bpf"
        >
          <template #prepend>
            <span class="grey--text">{{ pfMin }}</span>
          </template>
          <template #append>
            <span class="grey--text">{{ pfMax }}</span>
          </template>
        </v-slider>
      </v-col>

      <v-col>
        <v-slider
          @change="setParameterValues"
          :max="pfMax"
          :min="pfMin"
          :step="0.01"
          hide-details
          thumb-label
          class="align-center"
          v-model="spf"
        >
          <template #prepend>
            <span class="grey--text">{{ pfMin }}</span>
          </template>
          <template #append>
            <span class="grey--text">{{ pfMax }}</span>
          </template>
        </v-slider>
      </v-col>

      <v-col>
        <v-slider
          @change="setParameterValues"
          :max="subwayWidthMax"
          :min="subwayWidthMin"
          :step="0.01"
          hide-details
          thumb-label
          class="align-center"
          v-model="subwayTunnelWidth"
        >
          <template #prepend>
            <span class="grey--text">{{ subwayWidthMin }}</span>
          </template>
          <template #append>
            <span class="grey--text">{{ subwayWidthMax }}</span>
          </template>
        </v-slider>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field label="Indoor Loading" type="number" hide-details v-model.number="loading.indoor">
            <template #append>
              <span class="grey--text">{{ parameterValue.loading.values.Indoor.metaData.units }}</span>
            </template>
          </v-text-field>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field label="Outdoor Loading" type="number" hide-details v-model.number="loading.outdoor">
            <template #append>
              <span class="grey--text">{{ parameterValue.loading.values.Outdoor.metaData.units }}</span>
            </template>
          </v-text-field>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field label="Underground Loading" type="number" hide-details v-model.number="loading.underground">
            <template #append>
              <span class="grey--text">{{ parameterValue.loading.values.Underground.metaData.units }}</span>
            </template>
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field
            :rules="[validationRulesPf]"
            label="Building Protection Factor"
            type="number"
            hide-details
            v-model.number="bpf"
          />
        </v-card>
      </v-col>

      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field
            :rules="[validationRulesPf]"
            label="Subway Protection Factor"
            type="number"
            hide-details
            v-model.number="spf"
          />
        </v-card>
      </v-col>

      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-text-field
            :rules="[validationRulesSubway]"
            label="Subway Tunnel Width"
            type="number"
            hide-details
            v-model.number="subwayTunnelWidth"
          >
            <template #append>
              <span class="grey--text">m</span>
            </template>
          </v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DrawShape } from '@/types';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import ContaminationDefinition from '@/implementations/parameter/list/ContaminationDefinition';
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
import { CycleColorProvider } from 'battelle-common-vue-charting';
import { intersect, lineIntersect, lineSlice, polygonToLine } from '@/utilities';
import Draw, { createBox, createRegularPolygon } from 'ol/interaction/Draw';
import Map from 'ol/Map';
import View, { ViewOptions } from 'ol/View';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import { defaults as defaultControls, ScaleLine } from 'ol/control';
import { getArea, getLength } from 'ol/sphere';
import { unByKey } from 'ol/Observable';
import Feature from 'ol/Feature';
import { Circle, Geometry, LineString, Polygon } from 'ol/geom';
import { fromCircle } from 'ol/geom/Polygon';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { GeoJSON } from 'ol/format';
import Overlay from 'ol/Overlay';
import { GeoJSONLineString, GeoJSONPolygon } from 'ol/format/GeoJSON';
import Constant from '@/implementations/parameter/distribution/Constant';
import VectorSource from 'ol/source/Vector';

@Component
export default class GeospatialDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: ContaminationDefinition;

  readonly raster = new TileLayer({ source: new OSM() });

  areaTooltip: Overlay | null = null;

  areaTooltipEl: HTMLElement | null = null;

  buildingAreasInPlume: number[] = [];

  cityDataProvider = container.get<ICityDataProvider>(TYPES.CityDataProvider);

  /** Building Protection Factor (used for estimating indoor area contaminated) */
  bpf = this.parameterValue.buildingProtectionFactor;

  draw: Draw | null = null;

  drawShape: DrawShape = 'None';

  map: Map | null = null;

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

  loading = this.getLoadingValues();

  sketch: Feature<Geometry> | null = null;

  source: VectorSource<Geometry> = this.parameterValue.mapSource;

  /** Subway Protection Factor (used for estimating underground area contaminated) */
  spf = this.parameterValue.subwayProtectionFactor;

  subwayLineLengthsInPlume: number[] = [];

  subwayTunnelWidth = this.parameterValue.subwayTunnelWidth;

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

  get loadingLimits(): unknown {
    const { Indoor, Outdoor, Underground } = this.parameterValue.loading.values;

    return {
      indoor: {
        max: Indoor.metaData.upperLimit,
        min: Indoor.metaData.lowerLimit,
      },
      outdoor: {
        max: Outdoor.metaData.upperLimit,
        min: Outdoor.metaData.lowerLimit,
      },
      underground: {
        max: Underground.metaData.upperLimit,
        min: Underground.metaData.lowerLimit,
      },
    };
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
    }
    this.addInteraction();
    this.initAreaTooltip();
    this.clearArea();
    this.source.clear();
  }

  @Watch('mapLocation')
  changeMapLocation(): void {
    this.map?.setView(new View(this.viewOptions));
    this.resetMapDrawings();
  }

  @Watch('parameterValue')
  resetParameterValues(): void {
    this.changeMapLocation();

    this.bpf = this.parameterValue.buildingProtectionFactor;
    this.subwayTunnelWidth = this.parameterValue.subwayTunnelWidth;
    this.spf = this.parameterValue.subwayProtectionFactor;
    this.loading = this.getLoadingValues();
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
          this.updateAreaTooltip(polygon);
        });
      });

      this.draw.on('drawend', async ({ feature }: { feature: Feature<Polygon> }) => {
        feature.set('type', 'plume');
        const geom = feature.getGeometry() as Polygon | Circle;
        const polygon = geom.getType() === 'Circle' ? fromCircle(geom as Circle) : (geom as Polygon);
        await this.getBuildingAreasInPlume(polygon);
        await this.getSubwayAreasInPlume(polygon);

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

    this.map = new Map({
      layers: [this.raster, vector],
      target: 'map',
      view: new View({ ...this.viewOptions }),
      controls: defaultControls().extend([new ScaleLine({ units: 'metric' })]),
    });

    if (this.parameterValue.areaContaminated.isSet) {
      const feats = this.source.getFeatures();
      feats.forEach((feature) => {
        const type = feature.get('type');
        if (type === 'plume') {
          const geom = feature.getGeometry() as Polygon | Circle;
          const extent = geom.getExtent();
          this.totalArea = this.getAreaOfPolygon(
            geom.getType() === 'Circle' ? fromCircle(geom as Circle) : (geom as Polygon),
          );
          this.map?.getView().fit(extent);
          return;
        }
        if (type === 'building') {
          const area = this.getAreaOfPolygon(feature.getGeometry() as Polygon);
          this.buildingAreasInPlume.push(area);
          return;
        }
        if (type === 'subway') {
          const len = this.getLengthOfLine(feature.getGeometry() as LineString);
          this.subwayLineLengthsInPlume.push(len);
        }
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getAreaOfPolygon(polygon: Polygon): number {
    // transform polygon to projection capable of area calculations
    const geom = polygon.clone().transform('EPSG:4326', 'EPSG:3857');
    return getArea(geom);
  }

  // eslint-disable-next-line class-methods-use-this
  getLengthOfLine(line: LineString): number {
    // transform line to projection capable of length calculation
    const geom = line.clone().transform('EPSG:4326', 'EPSG:3857');
    return getLength(geom);
  }

  getLoadingValues(): { indoor: number; outdoor: number; underground: number } {
    const { Indoor, Outdoor, Underground } = this.parameterValue.loading.values as Record<string, Constant>;

    return {
      indoor: Indoor.value ?? (Indoor.metaData.lowerLimit + Indoor.metaData.upperLimit) / 2,
      outdoor: Outdoor.value ?? (Outdoor.metaData.lowerLimit + Outdoor.metaData.upperLimit) / 2,
      underground: Underground.value ?? (Underground.metaData.lowerLimit + Underground.metaData.upperLimit) / 2,
    };
  }

  async getBuildingAreasInPlume(polygon: Polygon): Promise<void> {
    const buildingCoords = await this.cityDataProvider.getInstersectingBuildingCoordinates(polygon, this.mapLocation);
    this.buildingAreasInPlume = buildingCoords.map((coords) => {
      const building = new Polygon([coords]);

      const overlap = this.formatter.readFeature(
        intersect(
          this.formatter.writeGeometryObject(polygon) as GeoJSONPolygon,
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
      overlap.set('type', 'building');
      this.source.addFeature(overlap);

      return overlap ? this.getAreaOfPolygon(overlap.getGeometry()) : 0;
    });
  }

  async getSubwayAreasInPlume(polygon: Polygon): Promise<void> {
    const subwayCoords = await this.cityDataProvider.getIntersectingSubwayCoordinates(polygon, this.mapLocation);
    const plumeAsLine = polygonToLine(this.formatter.writeGeometryObject(polygon) as GeoJSONPolygon);

    this.subwayLineLengthsInPlume = subwayCoords.map((coords) => {
      const lineString = this.formatter.writeGeometryObject(new LineString(coords)) as GeoJSONLineString;
      const intersectingPoints = lineIntersect(plumeAsLine, lineString);

      let lineFeat = new Feature<LineString>();
      if (!intersectingPoints.features.length) {
        lineFeat = new Feature(this.formatter.readGeometry(lineString) as LineString);
      } else if (intersectingPoints.features.length < 2) {
        const startsInPlume = this.source.getFeaturesAtCoordinate(lineString.coordinates[0]).length > 0;
        const start = startsInPlume ? lineString.coordinates[0] : intersectingPoints.features[0].geometry.coordinates;
        const stop = startsInPlume
          ? intersectingPoints.features[0].geometry.coordinates
          : lineString.coordinates[lineString.coordinates.length - 1];
        lineFeat = this.formatter.readFeature(lineSlice(start, stop, lineString));
      } else {
        const [start, stop] = intersectingPoints.features.map((p) => p.geometry.coordinates);
        lineFeat = this.formatter.readFeature(lineSlice(start, stop, lineString));
      }

      lineFeat.setStyle(
        new Style({
          stroke: new Stroke({
            color: 'rgba(0, 0, 0, 1)',
            lineDash: [5],
            width: 0.75,
          }),
        }),
      );
      lineFeat.set('type', 'subway');
      this.source.addFeature(lineFeat);

      return this.getLengthOfLine(lineFeat.getGeometry() as LineString);
    });
  }

  setParameterValues(): void {
    // indoor area
    const buildingAreaSum = this.buildingAreasInPlume.reduce((acc, cur) => acc + cur, 0);
    const indoorArea = (1 - this.bpf) * buildingAreaSum;
    this.$set(this.parameterValue.areaContaminated.values.Indoor, 'value', indoorArea);
    this.$set(this.parameterValue.loading.values.Indoor, 'value', this.loading.indoor);
    this.$set(this.parameterValue, 'buildingProtectionFactor', this.bpf);

    // underground
    const subwayLengthSum = this.subwayLineLengthsInPlume.reduce((acc, cur) => acc + cur, 0);
    const undergroundArea = (1 - this.spf) * (subwayLengthSum * this.subwayTunnelWidth); // TODO figure out area calc
    this.$set(this.parameterValue.areaContaminated.values.Underground, 'value', undergroundArea);
    this.$set(this.parameterValue.loading.values.Underground, 'value', this.loading.underground);
    this.$set(this.parameterValue, 'subwayProtectionFactor', this.spf);
    this.$set(this.parameterValue, 'subwayTunnelWidth', this.subwayTunnelWidth);

    // outdoor
    const outdoorArea = this.totalArea - indoorArea - undergroundArea;
    this.$set(this.parameterValue.areaContaminated.values.Outdoor, 'value', outdoorArea);
    this.$set(this.parameterValue.loading.values.Outdoor, 'value', this.loading.outdoor);

    this.parameterValue.mapSource = this.source;
  }

  updateAreaTooltip(polygon: Polygon): void {
    if (this.areaTooltipEl) {
      this.areaTooltip?.setPosition(polygon.getInteriorPoint().getCoordinates());
      this.areaTooltipEl.innerText = this.formattedArea;
    }
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
