import MapLocation from '@/enums/maps/MapLocation';
import IBuildingDataProvider from '@/interfaces/providers/IBuildingDataProvider';
import { ArcGisBuildingData, SodaBuildingData } from '@/types';
import Feature from 'ol/Feature';
import { Polygon } from 'ol/geom';
import axios from 'axios';
import { injectable } from 'inversify';

@injectable()
export default class BuildingDataProvider implements IBuildingDataProvider {
  private readonly urls = {
    boston: 'https://gis.cityofboston.gov/arcgis/rest/services/SAM/FinalImprovements/MapServer/0',
    dc: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Facility_and_Structure/MapServer/1',
    newOrleans: 'https://data.nola.gov/resource/wx44-n52t.json',
    nyc: 'https://data.cityofnewyork.us/resource/iues-xngg.json',
    philly: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/LI_BUILDING_FOOTPRINTS/FeatureServer/0',
    sanFrancisco: 'https://data.sfgov.org/resource/ynuv-fyni.json',
  };

  async getInstersectingBuildingCoordinates(plume: Feature<Polygon>, location: MapLocation): Promise<number[][][]> {
    const [plumeCoords] = plume.getGeometry()?.getCoordinates() ?? [];
    const url = this.getUrlForLocation(location);
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
        )} ]}&geometryType=esriGeometryPolygon&spatialRel=esriSpatialRelIntersects&inSR=4326&outSR=4326&outFields=&f=pjson`;
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

  private getUrlForLocation(location: MapLocation): string {
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
