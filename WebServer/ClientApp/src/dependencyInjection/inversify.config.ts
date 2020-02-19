import { Container } from 'inversify';
import 'reflect-metadata';
import { DefaultClientConfigurationProvider } from '@/implementations/providers/DefaultClientConfigurationProvider';
import { BackendClientConfigurationProvider } from '@/implementations/providers/BackendClientConfigurationProvider';
import { TYPES } from './types';
import DefaultNavigationItemProvider from '@/implementations/providers/DefaultNavigationItemProvider';
import DefaultApplicationActionProvider from '@/implementations/providers/DefaultApplicationActionProvider';

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

container
  .bind<DefaultNavigationItemProvider>(TYPES.NavigationItemProvider)
  .to(DefaultNavigationItemProvider);

container
  .bind<DefaultApplicationActionProvider>(TYPES.ApplicationActionProvider)
  .to(DefaultApplicationActionProvider);

export default container;
