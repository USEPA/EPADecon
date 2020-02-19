import { Container } from 'inversify';
import 'reflect-metadata';
import { DefaultClientConfigurationProvider } from '@/implementations/providers/DefaultClientConfigurationProvider';
import { BackendClientConfigurationProvider } from '@/implementations/providers/BackendClientConfigurationProvider';
import { TYPES } from './types';

let container = new Container();

container
  .bind<DefaultClientConfigurationProvider>(TYPES.ClientConfigurationProvider)
  .to(DefaultClientConfigurationProvider);
container
  .bind<BackendClientConfigurationProvider>(TYPES.ClientConfigurationProvider)
  .to(BackendClientConfigurationProvider);
container
  .bind<BackendClientConfigurationProvider>(TYPES.BackendClientConfigurationProvider)
  .to(BackendClientConfigurationProvider);

export default container;
