/** Building data from cities using Socratis Open Data Api (SODA)
 * San Francisco names coordinates with 'shape', others I've seen use 'the_geom'
 */
type SodaBuildingData = Record<'the_geom' | 'shape', { coordinates: number[][][][] }>;

export default SodaBuildingData;
