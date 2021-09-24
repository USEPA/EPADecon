import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { isEqual } from 'lodash';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import EnumeratedParameterDeserializer from '@/serialization/parameter/EnumeratedParameterDeserializer';
import ParameterMetaData from '../ParameterMetaData';
import Constant from '../distribution/Constant';
import Uniform from '../distribution/Uniform';

@Serializable()
export default class EnumeratedParameter implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.enumeratedParameter;

  public get isSet(): boolean {
    const valueEntries = Object.values(this.values);

    let result = valueEntries.every((val: IParameter) => val.isSet);

    if (this.metaData.name === 'Area Contaminated' && result) {
      result = valueEntries.some((val: IParameter) => {
        switch (val.type) {
          case ParameterType.constant: {
            const cast = val as Constant;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return cast.value! > 0;
          }
          case ParameterType.uniform:
          case ParameterType.pert:
          case ParameterType.truncatedNormal:
          case ParameterType.truncatedLogNormal:
          case ParameterType.logUniform:
          case ParameterType.bimodalTruncatedNormal: {
            // these distributions all have a min/max so casting to Uniform should be alright
            const cast = val as Uniform;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return cast.min! > 0;
          }
          default:
            return false;
        }
      });
    }

    return result;
  }

  isEquivalent(other: IParameter): boolean {
    return isEqual(this, other);
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  @JsonProperty({ ...{ isDictionary: true }, ...EnumeratedParameterDeserializer })
  values: Record<string, IParameter>;

  @JsonProperty()
  typeName?: string;

  constructor(metaData = new ParameterMetaData(), typeName?: string, values?: Record<string, IParameter>) {
    this.metaData = metaData;
    this.typeName = typeName;
    this.values = values ?? {};
  }
}
