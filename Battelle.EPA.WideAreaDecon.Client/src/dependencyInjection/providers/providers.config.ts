import { ContainerModule, interfaces } from 'inversify';
import 'reflect-metadata';
import DefaultClientConfigurationProvider from '@/implementations/providers/DefaultClientConfigurationProvider';
import BackendClientConfigurationProvider from '@/implementations/providers/BackendClientConfigurationProvider';
import DefaultNavigationItemProvider from '@/implementations/providers/DefaultNavigationItemProvider';
import DefaultApplicationActionProvider from '@/implementations/providers/DefaultApplicationActionProvider';
import INavigationItemProvider from '@/interfaces/providers/INavigationItemProvider';
import IApplicationActionProvider from '@/interfaces/providers/IApplicationActionProvider';
import IClientConfigurationProvider from '@/interfaces/providers/IClientConfigurationProvider';
import IScenarioDefinitionProvider from '@/interfaces/providers/IScenarioDefinitionProvider';
import DefaultScenarioDefinitionProvider from '@/implementations/providers/DefaultScenarioDefinitionProvider';
import IImageProvider from '@/interfaces/providers/IImageProvider';
import DefaultImageProvider from '@/implementations/providers/DefaultImageProvider';
import IHomeOptionsProvider from '@/interfaces/providers/IHomeOptionsProvider';
import DefaultHomeOptionsProvider from '@/implementations/providers/DefaultHomeOptionsProvider';
import PROVIDER_TYPES from './providers.types';

const providersContainerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IClientConfigurationProvider>(PROVIDER_TYPES.ClientConfigurationProvider).to(DefaultClientConfigurationProvider);

  bind<IClientConfigurationProvider>(PROVIDER_TYPES.ClientConfigurationProvider).to(BackendClientConfigurationProvider);

  bind<BackendClientConfigurationProvider>(PROVIDER_TYPES.BackendClientConfigurationProvider).to(
    BackendClientConfigurationProvider,
  );

  bind<INavigationItemProvider>(PROVIDER_TYPES.NavigationItemProvider).to(DefaultNavigationItemProvider);

  bind<IApplicationActionProvider>(PROVIDER_TYPES.ApplicationActionProvider).to(DefaultApplicationActionProvider);

  bind<IScenarioDefinitionProvider>(PROVIDER_TYPES.ScenarioDefinitionProvider).to(DefaultScenarioDefinitionProvider);

  bind<IImageProvider>(PROVIDER_TYPES.ImageProvider).to(DefaultImageProvider);

  bind<IHomeOptionsProvider>(PROVIDER_TYPES.HomeOptionsProvider).to(DefaultHomeOptionsProvider);
});

export default providersContainerModule;
