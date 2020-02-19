import { IClientConfiguration } from '../configuration/IClientConfiguration';

export interface IClientConfigurationProvider {
  getClientConfigurattion(): IClientConfiguration;
}
