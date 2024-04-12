import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { isEqual } from 'lodash';
import store from '@/store';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import { protectionFactorMin, protectionFactorMax } from '@/constants';
import { Vector as VectorSource } from 'ol/source';
import ParameterMetaData from '../ParameterMetaData';
import EnumeratedParameter from './enumeratedParameter';
import Constant from '../distribution/Constant';
import MapLocation from '@/enums/maps/mapLocation';

@Serializable()
export default class ContaminationDefinition implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.contaminationDefinition;

  public get isSet(): boolean {
    const { scenarioDefinitionMode } = store.state.PARAMETER_SELECTION;

    switch (scenarioDefinitionMode) {
      case 'geospatial': {
        const outdoorAreaIsSet = this.areaContaminated.values.Outdoor.isSet;
        const undergroundAreaIsSet = this.areaContaminated.values.Underground.isSet;
        const plumeIsDrawn = this.mapSource.getFeatures().length > 0;

        return this.loading.isSet && outdoorAreaIsSet && undergroundAreaIsSet && plumeIsDrawn;
      }
      case 'manual':
        return this.loading.isSet && this.areaContaminated.isSet;
      default:
        return false;
    }
  }

  static protectionFactorMetaData = {
    category: 'Contamination Definition',
    lowerLimit: protectionFactorMin,
    upperLimit: protectionFactorMax,
    units: '', // TODO figure out units
    step: 0.01,
  };

  static plumeFactorMetaData = {
    category: 'Contamination Definition',
    lowerLimit: -1,
    upperLimit: 10,
    units: 'log(cfu / m^2)', // TODO figure out units
    step: 0.01,
  };

  static subwayMetaData = {
    category: 'Contamination Definition',
    lowerLimit: 4,
    upperLimit: 5,
    units: 'm',
    step: 0.01,
  };

  isEquivalent(other: IParameter): boolean {
    const castOther: ContaminationDefinition = other as ContaminationDefinition;

    const geoSpatialComparisons =
      isEqual(this.buildingProtectionFactor, castOther.buildingProtectionFactor) &&
      isEqual(this.subwayProtectionFactor, castOther.subwayProtectionFactor) &&
      isEqual(this.subwayTunnelWidth, castOther.subwayTunnelWidth) &&
      isEqual(this.plumeConcentrationFactor, castOther.plumeConcentrationFactor);

    return (
      isEqual(this.areaContaminated, castOther.areaContaminated) &&
      isEqual(this.loading, castOther.loading) &&
      geoSpatialComparisons
    );
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  @JsonProperty({ predicate: () => EnumeratedParameter })
  loading: EnumeratedParameter;

  @JsonProperty({ predicate: () => EnumeratedParameter })
  areaContaminated: EnumeratedParameter;

  @JsonProperty()
  buildingAreasInPlume: number[];

  mapSource = new VectorSource({ wrapX: false });

  mapLocation: MapLocation = MapLocation.NewYorkCity;

  buildingProtectionFactor: IParameter = new Constant(
    ContaminationDefinition.protectionFactorMetaData as ParameterMetaData,
    0.5,
  );

  subwayProtectionFactor: IParameter = new Constant(
    ContaminationDefinition.protectionFactorMetaData as ParameterMetaData,
    0.3,
  );

  plumeConcentrationFactor: IParameter = new Constant(
    ContaminationDefinition.plumeFactorMetaData as ParameterMetaData,
    5,
  );

  subwayTunnelWidth: IParameter = new Constant(ContaminationDefinition.subwayMetaData as ParameterMetaData, 4.27);

  constructor(metaData = new ParameterMetaData(), loading: EnumeratedParameter, areaContaminated: EnumeratedParameter) {
    this.metaData = metaData;
    this.loading = loading;
    this.areaContaminated = areaContaminated;
    this.buildingAreasInPlume = [];
  }
}
