import MapLocation from '@/enums/maps/mapLocation';
import ICityDataProvider from '@/interfaces/providers/ICityDataProvider';
import { ArcGisBuildingData, SodaBuildingData, SodaSubwayData } from '@/types';
import { Polygon } from 'ol/geom';
import axios from 'axios';
import { injectable } from 'inversify';
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
      case MapLocation.NewOrleans:
      case MapLocation.NewYorkCity:
      case MapLocation.SanFrancisco: {
        const coords = plumeCoords.flatMap((xy) => xy.join(' ')).join(', ');
        const prop = location === MapLocation.SanFrancisco ? 'shape' : 'the_geom';
        const query = `$select=${prop}&$where=intersects(${prop}, 'POLYGON((${coords}))')`;
        request = `${url}?${query}`;
        break;
      }
      case MapLocation.Boston:
      case MapLocation.Philadelphia:
      case MapLocation.WashingtonDc: {
        const query = `query?where=1=1&geometry={ "rings": [ ${JSON.stringify(
          plumeCoords,
        )} ]}&geometryType=esriGeometryPolygon&spatialRel=esriSpatialRelIntersects&inSR=4326&outSR=4326&outFields=&f=json`;
        request = `${url}/${query}`;
        break;
      }
      default:
        throw new Error('invalid location');
    }

    const { data } = await axios.get(`${request}`); // TODO add token to soda reqs
    let buildingCoords: number[][][] = [];

    switch (location) {
      // SODA
      case MapLocation.NewOrleans:
      case MapLocation.NewYorkCity:
      case MapLocation.SanFrancisco: {
        buildingCoords = (data as SodaBuildingData[]).map(
          (building) => (building.the_geom ?? building.shape).coordinates[0][0],
        );
        break;
      }
      case MapLocation.Boston:
      case MapLocation.Philadelphia:
      case MapLocation.WashingtonDc: {
        // ArcGIS
        buildingCoords = (data as ArcGisBuildingData).features.map((building) => building.geometry.rings[0]);
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
      case MapLocation.NewOrleans:
        return (
          this.urls.cities.find((value) => {
            return value.name === MapLocation.NewOrleans;
          }) ?? new CityLink(MapLocation.NewOrleans)
        );
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
      case MapLocation.WashingtonDc:
        return (
          this.urls.cities.find((value) => {
            return value.name === MapLocation.WashingtonDc;
          }) ?? new CityLink(MapLocation.WashingtonDc)
        );
      default:
        throw new Error('invalid location');
    }
  }
}
