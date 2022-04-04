<template>
  <div id="map-container">
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

    <v-card id="map-legend">
      <v-card-text class="text-body-2">
        <v-row>
          <v-col cols="7" class="pb-0 pr-0">Building</v-col>
          <v-col cols="5" class="pb-0 d-flex align-center"><span class="legend-line solid" /></v-col>
        </v-row>
        <v-row>
          <v-col cols="7" class="pt-0">Subway</v-col>
          <v-col cols="5" class="pt-0 d-flex align-center"><span class="legend-line dotted" /></v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
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
} from '@/constants';
import { CycleColorProvider } from 'battelle-common-vue-charting';
import { intersect, lineIntersect, lineSlice, polygonToLine } from '@/utilities';
import { DrawShape } from '@/types';

import VectorSource from 'ol/source/Vector';
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
import ContaminationDefinition from '@/implementations/parameter/list/ContaminationDefinition';

@Component
export default class CityMap extends Vue {
  @Prop({ required: true }) parameterValue!: ContaminationDefinition;

  readonly raster = new TileLayer({ source: new OSM() });

  areaTooltip: Overlay | null = null;

  areaTooltipEl: HTMLElement | null = null;

  buildingAreasInPlume: number[] = [];

  cityDataProvider = container.get<ICityDataProvider>(TYPES.CityDataProvider);

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

  formatter = new GeoJSON();

  sketch: Feature<Geometry> | null = null;

  get source(): VectorSource<Geometry> {
    return this.parameterValue.mapSource;
  }

  subwayLineLengthsInPlume: number[] = [];

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
    }
    this.addInteraction();
    this.initAreaTooltip();
    this.source.clear();
    this.clearArea();
    this.$emit('values-changed');
  }

  @Watch('mapLocation')
  changeMapLocation(): void {
    this.map?.setView(new View(this.viewOptions));
    this.resetMapDrawings();
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
            width: 0.8,
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

      let lineFeat = new Feature<Geometry>();
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
            lineDash: [15],
            width: 1,
          }),
        }),
      );
      lineFeat.set('type', 'subway');
      this.source.addFeature(lineFeat);

      return this.getLengthOfLine(lineFeat.getGeometry() as LineString);
    });
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
            polygon = fromCircle(polygon as unknown as Circle);
          }

          this.totalArea = this.getAreaOfPolygon(polygon);
          this.updateAreaTooltip(polygon);
        });
      });
      // { event: BaseEvent }: { event: Feature<Geometry> }
      this.draw.on(['drawend'], async (event) => {
        const feature = (event as any).feature as Feature<Geometry>;
        feature.set('type', 'plume');
        const geom = feature.getGeometry() as Polygon | Circle;
        const polygon = geom.getType() === 'Circle' ? fromCircle(geom as Circle) : (geom as Polygon);
        await this.getBuildingAreasInPlume(polygon);
        await this.getSubwayAreasInPlume(polygon);
        this.$emit('values-changed');

        // unset sketch
        this.sketch = null;
        // remove draw event listener
        unByKey(listener);
      });
    }
  }

  clearArea(): void {
    this.totalArea = 0;
    this.buildingAreasInPlume.splice(0);
    this.subwayLineLengthsInPlume.splice(0);
  }

  // eslint-disable-next-line class-methods-use-this
  getAreaOfPolygon(polygon?: Geometry): number {
    if (polygon === undefined) {
      return 0.0;
    }
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

  updateAreaTooltip(polygon: Polygon): void {
    if (this.areaTooltipEl) {
      this.areaTooltip?.setPosition(polygon.getInteriorPoint().getCoordinates());
      this.areaTooltipEl.innerText = this.formattedArea;
    }
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

.legend-line {
  display: inline-block;
  height: 1px;
  width: 30px;

  &.dotted {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3e %3cline x2='100' stroke='%23000' stroke-dasharray='6, 5' stroke-width='3' stroke-linecap='square' /%3e%3c/svg%3e");
    height: 2px;
  }
  &.solid {
    background-color: #000;
  }
}
#map {
  height: 500px;
  width: 100%;
}
#map-container {
  position: relative;
}
#map-legend {
  bottom: 2em;
  opacity: 0.85;
  position: absolute;
  right: 0.1em;
}
#map-tools {
  opacity: 0.85;
  position: absolute;
  right: 0.75em;
  top: 0.75em;
}
</style>
