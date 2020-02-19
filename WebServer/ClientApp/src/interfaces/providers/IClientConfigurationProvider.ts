import { IClientConfiguration } from '../configuration/IClientConfiguration';

export interface IClientConfigurationProvider {
  getClientConfiguration(): Promise<IClientConfiguration>;
}
