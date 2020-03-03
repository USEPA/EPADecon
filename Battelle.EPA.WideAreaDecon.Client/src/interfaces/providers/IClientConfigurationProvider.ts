import IClientConfiguration from '../configuration/IClientConfiguration';

export default interface IClientConfigurationProvider {
  getClientConfiguration(): Promise<IClientConfiguration>;
}
