import IClientConfiguration from '@/interfaces/configuration/IClientConfiguration';
import { injectable } from 'inversify';
import IClientConfigurationProvider from '@/interfaces/providers/IClientConfigurationProvider';

@injectable()
export default class DefaultClientConfigurationProvider implements IClientConfigurationProvider {
  // eslint-disable-next-line class-methods-use-this
  async getClientConfiguration(): Promise<IClientConfiguration> {
    return {
      theme: {},
      applicationVersion: 'unknown',
      applicationTitle: 'unknown',
      publisherName: 'unknown',
    };
  }
}
