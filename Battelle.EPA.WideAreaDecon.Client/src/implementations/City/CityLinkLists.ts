import { JsonProperty, Serializable } from 'typescript-json-serializer';
import CityLink from './CityLink';

@Serializable()
export default class CityLinkLists {
  @JsonProperty({ type: CityLink })
  cities: Array<CityLink> = [];

  constructor(list: Array<CityLink>) {
    this.cities = list;
  }
}
