import { JsonProperty, Serializable } from 'typescript-json-serializer';

@Serializable()
export default class CityLink {
  @JsonProperty()
  name: string;

  @JsonProperty()
  buildingLink: string;

  @JsonProperty()
  subwayLink: string;

  constructor(name: string) {
    this.name = name;
    this.subwayLink = '';
    this.buildingLink = '';
  }
}
