import 'reflect-metadata';
import IClientConfiguration from '@/interfaces/configuration/IClientConfiguration';
import { injectable } from 'inversify';
import IClientConfigurationProvider from '@/interfaces/providers/IClientConfigurationProvider';

@injectable()
export default class DefaultClientConfigurationProvider implements IClientConfigurationProvider {
  defaultConfig: IClientConfiguration = {
    theme: {},

    applicationTitle: 'unknown',

    applicationVersion: 'unknown',

    publisherName: 'unknown',

    applicationAcronym: 'UNK',

    applicationSponsor: 'unkown',
  };

  // eslint-disable-next-line class-methods-use-this
  async getClientConfigurationAsync(): Promise<IClientConfiguration> {
    return this.getClientConfiguration();
  }

  getClientConfiguration(): IClientConfiguration {
    return this.defaultConfig;
  }
}
