import { JsonProperty, Serializable } from 'typescript-json-serializer';
import CityLink from './CityLink';

@Serializable()
export default class CityLinkLists {
  @JsonProperty({ type: CityLink })
  cities: Array<CityLink> = [];

  @JsonProperty()
  general = '';

  constructor(list: Array<CityLink>, general: string) {
    this.cities = list;
    this.general = general;
  }
}
