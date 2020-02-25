import IClientConfiguration from '@/interfaces/configuration/IClientConfiguration';
import { injectable } from 'inversify';
import IClientConfigurationProvider from '@/interfaces/providers/IClientConfigurationProvider';

import axios from 'axios';

@injectable()
export default class BackendClientConfigurationProvider implements IClientConfigurationProvider {
  getClientConfiguration(): Promise<IClientConfiguration> {
    axios.get('/api/ClientConfiguration').then((response) => console.log(response.data));
    return axios
      .get<IClientConfiguration>('/api/ClientConfiguration')
      .then<IClientConfiguration>((response) => response.data);
  }
}
