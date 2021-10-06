/** Building data from cities using ArcGIS APIs */
type ArcGisBuildingData = Record<'features', { geometry: { rings: number[][][] } }[]>;

export default ArcGisBuildingData;
