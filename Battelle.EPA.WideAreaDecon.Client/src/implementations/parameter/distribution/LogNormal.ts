import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class LogNormal implements IParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.logNormal;

  @JsonProperty()
  mean: number | undefined;

  @JsonProperty()
  stdDev: number | undefined;

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return !!this.mean && !!this.stdDev;
  }

  constructor(metaData = new ParameterMetaData(), mean?: number, stdDev?: number) {
    this.mean = mean;
    this.stdDev = stdDev;
    this.metaData = metaData;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as LogNormal);
  }

  compareValues(other?: LogNormal): boolean {
    return other ? this.type === other.type && this.mean === other.mean && this.stdDev === other.stdDev : false;
  }
}
