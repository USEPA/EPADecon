import MapLocation from '@/enums/maps/mapLocation';
import ICityDataProvider from '@/interfaces/providers/ICityDataProvider';
import { ArcGisBuildingData, SodaBuildingData, SodaSubwayData } from '@/types';
import { Polygon } from 'ol/geom';
import axios from 'axios';
import { injectable } from 'inversify';

@injectable()
export default class CityDataProvider implements ICityDataProvider {
  private readonly urls: Record<string, Record<string, string>> = {
    boston: {
      building: 'https://gis.cityofboston.gov/arcgis/rest/services/SAM/FinalImprovements/MapServer/0',
    },
    dc: {
      building: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Facility_and_Structure/MapServer/1',
    },
    newOrleans: {
      building: 'https://data.nola.gov/resource/wx44-n52t.json',
    },
    nyc: {
      building: 'https://data.cityofnewyork.us/resource/qb5r-6dgf.json',
      subway: 'https://data.cityofnewyork.us/resource/s7zz-qmyz.json',
    },
    philly: {
      building:
        'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/LI_BUILDING_FOOTPRINTS/FeatureServer/0',
    },
    sanFrancisco: {
      building: 'https://data.sfgov.org/resource/ynuv-fyni.json',
    },
  };

  async getInstersectingBuildingCoordinates(plume: Polygon, location: MapLocation): Promise<number[][][]> {
    const plumeCoords = this.getPlumeCoordinates(plume);
    const url = this.getUrlForLocation(location).building;
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
    const url = this.getUrlForLocation(location).subway;
    let request = '';

    if (!url) {
      throw new Error('Location does not have subway data');
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

  private getUrlForLocation(location: MapLocation): Record<string, string> {
    switch (location) {
      case MapLocation.Boston:
        return this.urls.boston;
      case MapLocation.NewOrleans:
        return this.urls.newOrleans;
      case MapLocation.NewYorkCity:
        return this.urls.nyc;
      case MapLocation.Philadelphia:
        return this.urls.philly;
      case MapLocation.SanFrancisco:
        return this.urls.sanFrancisco;
      case MapLocation.WashingtonDc:
        return this.urls.dc;
      default:
        throw new Error('invalid location');
    }
  }
}
