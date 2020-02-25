import IClientConfiguration from '@/interfaces/configuration/IClientConfiguration';
import { injectable } from 'inversify';
import IClientConfigurationProvider from '@/interfaces/providers/IClientConfigurationProvider';

@injectable()
export default class DefaultClientConfigurationProvider implements IClientConfigurationProvider {
  async getClientConfiguration(): Promise<IClientConfiguration> {
    return {
      theme: {},
      applicationVersion: 'unknown',
      applicationTitle: 'unknown',
      publisherName: 'unknown',
    };
  }
}
