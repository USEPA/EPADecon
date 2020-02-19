import { IClientConfiguration } from "@/interfaces/configuration/IClientConfiguration";
import { injectable } from 'inversify';
import { IClientConfigurationProvider } from '@/interfaces/providers/IClientConfigurationProvider';

@injectable()
export class DefaultClientConfigurationProvider implements IClientConfigurationProvider {
  getClientConfigurattion(): IClientConfiguration {
    return {
      theme: {},
      applicationVersion: 'unkown',
    };
  }
}
