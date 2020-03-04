const PROVIDER_TYPES = {
  ClientConfigurationProvider: Symbol('IClientConfigurationProvider'),
  BackendClientConfigurationProvider: Symbol('BackendClientConfigurationProvider'),
  NavigationItemProvider: Symbol('INavigationItemProvider'),
  ApplicationActionProvider: Symbol('IApplicationActionProvider'),
  ScenarioDefinitionProvider: Symbol('IScenarioDefinitionProvider'),
};

export default PROVIDER_TYPES;
