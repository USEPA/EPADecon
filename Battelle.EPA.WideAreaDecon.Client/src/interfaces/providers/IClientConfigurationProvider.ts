import IClientConfiguration from '../configuration/IClientConfiguration';

export default interface IClientConfigurationProvider {
  getClientConfigurationAsync(): Promise<IClientConfiguration>;
  getReport(): Promise<string>;
}
