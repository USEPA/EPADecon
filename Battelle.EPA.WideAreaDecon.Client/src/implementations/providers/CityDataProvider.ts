import MapLocation from '@/enums/maps/mapLocation';
import ICityDataProvider from '@/interfaces/providers/ICityDataProvider';
import { ArcGisBuildingData, SodaBuildingData, SodaSubwayData } from '@/types';
import { Polygon } from 'ol/geom';
import axios from 'axios';
import { injectable } from 'inversify';
import { range } from 'lodash';
import CityDataAPI from './CityDataAPI';
import CityLinkLists from '../City/CityLinkLists';
import CityLink from '../City/CityLink';

@injectable()
export default class CityDataProvider implements ICityDataProvider {
  private citydata = new CityDataAPI();

  private urls!: CityLinkLists;

  constructor() {
    this.citydata.getCityLinks().then((value) => {
      this.urls = value;
    });
  }

  async getInstersectingBuildingCoordinates(plume: Polygon, location: MapLocation): Promise<number[][][]> {
    const plumeCoords = this.getPlumeCoordinates(plume);
    const url = this.getUrlForLocation(location).buildingLink;
    let request = '';

    // build request based on location
    switch (location) {
      // case MapLocation.NewOrleans:
      case MapLocation.NewYorkCity:
      case MapLocation.SanFrancisco: {
        const coords = plumeCoords.flatMap((xy) => xy.join(' ')).join(', ');
        const prop = location === MapLocation.SanFrancisco ? 'shape' : 'the_geom';
        const query = `$select=${prop}&$where=intersects(${prop}, 'POLYGON((${coords}))')&$limit=1500000`;
        request = `${url}?${query}`;
        break;
      }
      case MapLocation.Boston:
      case MapLocation.Philadelphia:
      case MapLocation.Custom:
      case MapLocation.WashingtonDc: {
        return await this.getArcGisFeatures(url, plumeCoords);
      }
      default:
        throw new Error('invalid location');
    }

    const { data } = await axios.get(`${request}`); // TODO add token to soda reqs
    let buildingCoords: number[][][] = [];

    switch (location) {
      // SODA
      // case MapLocation.NewOrleans:
      case MapLocation.NewYorkCity:
      case MapLocation.SanFrancisco: {
        buildingCoords = (data as SodaBuildingData[]).map(
          (building) => (building.the_geom ?? building.shape).coordinates[0][0],
        );
        break;
      }
      default:
        throw new Error('invalid location');
    }

    return buildingCoords;
  }

  async getIntersectingSubwayCoordinates(plume: Polygon, location: MapLocation): Promise<number[][][]> {
    const plumeCoords = this.getPlumeCoordinates(plume);
    const url = this.getUrlForLocation(location).subwayLink;
    let request = '';

    if (!url) {
      console.log('No subway data for city'); // TODO:: print warning to user
      return [];
    }

    // build request based on location
    switch (location) {
      case MapLocation.NewYorkCity: {
        const coords = plumeCoords.flatMap((xy) => xy.join(' ')).join(', ');
        const query = `$select=the_geom&$where=intersects(the_geom, 'POLYGON((${coords}))')`;
        request = `${url}?${query}`;
        break;
      }
      default:
        throw new Error('invalid location');
    }

    const { data } = await axios.get(`${request}`); // TODO add token to soda reqs
    let subwayCoords: number[][][] = [];

    switch (location) {
      // SODA
      case MapLocation.NewYorkCity: {
        subwayCoords = (data as SodaSubwayData[]).map((subway) => subway.the_geom.coordinates);
        break;
      }
      default:
        throw new Error('invalid location');
    }

    return subwayCoords;
  }

  // eslint-disable-next-line class-methods-use-this
  private getPlumeCoordinates(plume: Polygon): number[][] {
    const [coords] = plume.getCoordinates();
    return coords;
  }

  private getUrlForLocation(location: MapLocation): CityLink {
    switch (location) {
      case MapLocation.Boston:
        return (
          this.urls.cities.find((value) => {
            return value.name === MapLocation.Boston;
          }) ?? new CityLink(MapLocation.Boston)
        );
      // case MapLocation.NewOrleans:
      //   return (
      //     this.urls.cities.find((value) => {
      //       return value.name === MapLocation.NewOrleans;
      //     }) ?? new CityLink(MapLocation.NewOrleans)
      //   );
      case MapLocation.NewYorkCity:
        return (
          this.urls.cities.find((value) => {
            return value.name === MapLocation.NewYorkCity;
          }) ?? new CityLink(MapLocation.NewYorkCity)
        );
      case MapLocation.Philadelphia:
        return (
          this.urls.cities.find((value) => {
            return value.name === MapLocation.Philadelphia;
          }) ?? new CityLink(MapLocation.Philadelphia)
        );
      case MapLocation.SanFrancisco:
        return (
          this.urls.cities.find((value) => {
            return value.name === MapLocation.SanFrancisco;
          }) ?? new CityLink(MapLocation.SanFrancisco)
        );
      // case MapLocation.WashingtonDc:
      //   return (
      //     this.urls.cities.find((value) => {
      //       return value.name === MapLocation.WashingtonDc;
      //     }) ?? new CityLink(MapLocation.WashingtonDc)
      //   );
      default: {
        const link = new CityLink(MapLocation.Custom);
        link.buildingLink = this.urls.general;
        return link;
      }
    }
  }

  // Run multiple queries to server to get around imposed limit
  // inspired by https://toarches.medium.com/easy-way-to-bypass-rest-api-request-limits-2dc9afc0f027
  private async getArcGisFeatures(baseUrl: string, plumeCoords: number[][]): Promise<number[][][]> {
    // get map server info as json
    const jsonFormatUrl = baseUrl + '?f=json';
    const serverInfoJson: { maxRecordCount: number } = (await axios.get(jsonFormatUrl)).data;
    const { maxRecordCount } = serverInfoJson;

    // get ids of buildings in plume
    const idQueryUrl = baseUrl + `/query?where=1=1&${this.getPlumeCoordsQuery(plumeCoords)}&returnIdsOnly=true&f=json`;
    const idResponse: { objectIds: number[]; objectIdFieldName: string } = (await axios.get(idQueryUrl)).data;

    if (!idResponse.objectIds) {
      return [];
    }

    const buildingIds = idResponse.objectIds.sort((a, b) => a - b);
    const idField = idResponse.objectIdFieldName;

    let buildingCoords: number[][][] = [];
    const idRange = range(0, buildingIds.length, maxRecordCount);

    for await (const i of idRange) {
      let step = i + (maxRecordCount - 1);
      if (step > buildingIds.length) {
        step = buildingIds.length - 1;
      }

      const fromId = buildingIds[i];
      const toId = buildingIds[step];

      const where = `${idField} >= ${fromId} AND ${idField} <= ${toId}`;
      const featureQueryUrl =
        baseUrl + `/query?where=${where}&${this.getPlumeCoordsQuery(plumeCoords)}&outSR=4326&f=json`;

      const { data } = await axios.get(featureQueryUrl);
      const subsetBuildingCoords = (data as ArcGisBuildingData).features.map((building) => building.geometry.rings[0]);
      buildingCoords = buildingCoords.concat(subsetBuildingCoords);
    }

    return buildingCoords;
  }

  private getPlumeCoordsQuery(plumeCoords: number[][]): string {
    return `geometry=${encodeURIComponent(
      `{ "rings": [ ${JSON.stringify(plumeCoords)} ]}`,
    )}&geometryType=esriGeometryPolygon&spatialRel=esriSpatialRelIntersects&inSR=4326`;
  }
}
