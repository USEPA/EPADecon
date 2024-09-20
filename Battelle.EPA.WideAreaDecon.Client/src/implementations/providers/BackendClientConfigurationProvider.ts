import 'reflect-metadata';
import IClientConfiguration from '@/interfaces/configuration/IClientConfiguration';
import { injectable } from 'inversify';
import IClientConfigurationProvider from '@/interfaces/providers/IClientConfigurationProvider';

import axios from 'axios';

@injectable()
export default class BackendClientConfigurationProvider implements IClientConfigurationProvider {
  private url = "/api/ClientConfiguration";
  
  getClientConfigurationAsync(): Promise<IClientConfiguration> {
    return axios
      .get<IClientConfiguration>(this.url)
      .then<IClientConfiguration>((response) => response.data);
  }

  getReport(): Promise<string> {
    return axios.get<string>(`${this.url}/report`).then<string>((response) => response.data);
  }
}
