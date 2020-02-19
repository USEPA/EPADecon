import { IClientConfiguration } from '@/interfaces/configuration/IClientConfiguration';
import { injectable } from 'inversify';
import { IClientConfigurationProvider } from '@/interfaces/providers/IClientConfigurationProvider';

import axios from 'axios';

@injectable()
export class BackendClientConfigurationProvider implements IClientConfigurationProvider {
  getClientConfiguration(): Promise<IClientConfiguration> {
    return axios
      .get<IClientConfiguration>('/api/ClientConfiguration')
      .then<IClientConfiguration>((response) => response.data);
  }
}
