import { injectable } from 'inversify';
import ICityDataAPI from '@/interfaces/providers/ICityDataAPI';
import Axios from 'axios';
import { deserialize } from 'typescript-json-serializer';
import CityLinkLists from '../City/CityLinkLists';

export default class CityDataAPI implements ICityDataAPI {
  readonly url = '/api/CityData';

  /* eslint-disable class-methods-use-this */
  getCityLinks(): Promise<CityLinkLists> {
    const data = Axios.get(this.url).then((response) => {
      return deserialize<CityLinkLists>(response.data, CityLinkLists);
    });
    return data;
  }
}
