import MapLocation from '@/enums/maps/mapLocation';
import Feature from 'ol/Feature';
import { Polygon } from 'ol/geom';

export default interface IBuildingDataProvider {
  /** Retrieves coordinates of buildings intersecting the passed plume.
   *  **Data relies on external APIs**
   * @param {Feature<Polygon>} plume - The area to search for building data in
   * @param {MapLocation} location - The map location corresponding to the external API to use
   * @returns The coordinates of any building that intersects the plume
   */
  getInstersectingBuildingCoordinates(plume: Feature<Polygon>, location: MapLocation): Promise<number[][][]>;
}
