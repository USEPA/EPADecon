import MapLocation from '@/enums/maps/mapLocation';
import { Polygon } from 'ol/geom';

/** Retrieve city data from various sources. **Data relies on external APIs** */
export default interface ICityDataProvider {
  /** Retrieves coordinates of buildings intersecting the passed plume
   * @param {Polygon} plume - The area to search for building data in
   * @param {MapLocation} location - The map location corresponding to the external API to use
   * @returns The coordinates of any building that intersects the plume
   */
  getInstersectingBuildingCoordinates(plume: Polygon, location: MapLocation): Promise<number[][][]>;

  /** Retrieve coordinates of subway lines intersecting the passed plume
   * @param {Polygon} plume - The area to search for subway lines in
   * @param {MapLocation} location - The map location corresponding to the external API to use
   * @returns The coordinates of any subway line that intersects the plume
   */
  getIntersectingSubwayCoordinates(plume: Polygon, location: MapLocation): Promise<number[][][]>;
}
