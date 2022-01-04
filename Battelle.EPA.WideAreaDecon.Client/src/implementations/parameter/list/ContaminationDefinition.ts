import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { isEqual } from 'lodash';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import { protectionFactorMin, protectionFactorMax } from '@/constants';
import { Vector as VectorSource } from 'ol/source';
import ParameterMetaData from '../ParameterMetaData';
import EnumeratedParameter from './enumeratedParameter';
import Constant from '../distribution/Constant';

@Serializable()
export default class ContaminationDefinition implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.contaminationDefinition;

  public get isSet(): boolean {
    return this.loading.isSet && this.areaContaminated.isSet;
  }

  static protectionFactorMetaData = {
    category: 'Contamination Definition',
    lowerLimit: protectionFactorMin,
    upperLimit: protectionFactorMax,
    units: '', // TODO figure out units
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
    return isEqual(this, other);
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  @JsonProperty({ predicate: () => EnumeratedParameter })
  loading: EnumeratedParameter;

  @JsonProperty({ predicate: () => EnumeratedParameter })
  areaContaminated: EnumeratedParameter;

  mapSource = new VectorSource({ wrapX: false });

  buildingProtectionFactor: IParameter = new Constant(
    ContaminationDefinition.protectionFactorMetaData as ParameterMetaData,
    0.5,
  );

  subwayProtectionFactor: IParameter = new Constant(
    ContaminationDefinition.protectionFactorMetaData as ParameterMetaData,
    0.3,
  );

  subwayTunnelWidth: IParameter = new Constant(ContaminationDefinition.subwayMetaData as ParameterMetaData, 4.27);

  constructor(metaData = new ParameterMetaData(), loading: EnumeratedParameter, areaContaminated: EnumeratedParameter) {
    this.metaData = metaData;
    this.loading = loading;
    this.areaContaminated = areaContaminated;
  }
}
