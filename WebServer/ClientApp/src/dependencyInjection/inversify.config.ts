import { Container } from 'inversify';
import 'reflect-metadata';
import DefaultClientConfigurationProvider from '@/implementations/providers/DefaultClientConfigurationProvider';
import BackendClientConfigurationProvider from '@/implementations/providers/BackendClientConfigurationProvider';
import TYPES from '@/dependencyInjection/types';
import DefaultNavigationItemProvider from '@/implementations/providers/DefaultNavigationItemProvider';
import DefaultApplicationActionProvider from '@/implementations/providers/DefaultApplicationActionProvider';
import INavigationItemProvider from '@/interfaces/providers/INavigationItemProvider';
import IApplicationActionProvider from '@/interfaces/providers/IApplicationActionProvider';
import IClientConfigurationProvider from '@/interfaces/providers/IClientConfigurationProvider';

const container = new Container();

container.bind<IClientConfigurationProvider>(TYPES.ClientConfigurationProvider).to(DefaultClientConfigurationProvider);

container.bind<IClientConfigurationProvider>(TYPES.ClientConfigurationProvider).to(BackendClientConfigurationProvider);

container
  .bind<BackendClientConfigurationProvider>(TYPES.BackendClientConfigurationProvider)
  .to(BackendClientConfigurationProvider);

container.bind<INavigationItemProvider>(TYPES.NavigationItemProvider).to(DefaultNavigationItemProvider);

container.bind<IApplicationActionProvider>(TYPES.ApplicationActionProvider).to(DefaultApplicationActionProvider);

export default container;
