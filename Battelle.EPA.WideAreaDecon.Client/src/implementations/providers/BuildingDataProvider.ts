import MapLocation from '@/enums/maps/MapLocation';
import IBuildingDataProvider from '@/interfaces/providers/IBuildingDataProvider';
import { IBostonBulildingData, INycBuildingData } from '@/interfaces/maps';
import Feature from 'ol/Feature';
import { Polygon } from 'ol/geom';
import axios from 'axios';
import { injectable } from 'inversify';

@injectable()
export default class BuildingDataProvider implements IBuildingDataProvider {
  private readonly urls = {
    nyc: 'https://data.cityofnewyork.us/resource/iues-xngg.json',
    boston: 'https://gis.cityofboston.gov/arcgis/rest/services/SAM/FinalImprovements/MapServer/0',
  };

  async getInstersectingBuildingCoordinates(plume: Feature<Polygon>, location: MapLocation): Promise<number[][][]> {
    let request = '';
    const [plumeCoords] = plume.getGeometry()?.getCoordinates() ?? [];

    // build request based on location
    switch (location) {
      case MapLocation.NewYorkCity: {
        const coords = plumeCoords.flatMap((xy) => xy.join(' ')).join(', ');
        const query = `$where=intersects(the_geom, 'POLYGON((${coords}))')`; // TODO add token
        request = `${this.urls.nyc}?${query}`;
        break;
      }
      case MapLocation.Boston: {
        const query = `query?geometry={ "rings": [ ${JSON.stringify(
          plumeCoords,
        )} ]}&geometryType=esriGeometryPolygon&spatialRel=esriSpatialRelIntersects&inSR=4326&outSR=4326&outFields=&f=json`;
        request = `${this.urls.boston}/${query}`;
        break;
      }
      default:
        throw new Error('invalid location');
    }

    const { data } = await axios.get(`${request}`);
    let buildingCoords: number[][][] = [];

    switch (location) {
      case MapLocation.NewYorkCity: {
        buildingCoords = (data as INycBuildingData[]).map((building) => building.the_geom.coordinates[0][0]);
        break;
      }
      case MapLocation.Boston: {
        buildingCoords = (data as IBostonBulildingData).features.map((building) => building.geometry.rings[0]);
        break;
      }
      default:
        throw new Error('invalid location');
    }

    return buildingCoords;
  }
}
