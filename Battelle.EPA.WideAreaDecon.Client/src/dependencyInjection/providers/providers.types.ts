const PROVIDER_TYPES = {
  ClientConfigurationProvider: Symbol('IClientConfigurationProvider'),
  BackendClientConfigurationProvider: Symbol('BackendClientConfigurationProvider'),
  NavigationItemProvider: Symbol('INavigationItemProvider'),
  ApplicationActionProvider: Symbol('IApplicationActionProvider'),
  ScenarioDefinitionProvider: Symbol('IScenarioDefinitionProvider'),
  ImageProvider: Symbol('IImageProvider'),
  HomeOptionsProvider: Symbol('IHomeOptionsProvider'),
};

export default PROVIDER_TYPES;
