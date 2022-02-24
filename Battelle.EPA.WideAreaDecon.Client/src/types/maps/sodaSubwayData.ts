/** Subway data from cities using Socratis Open Data Api (SODA) */
type SodaSubwayData = Record<'the_geom', { coordinates: number[][] }>;

export default SodaSubwayData;
