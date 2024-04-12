const PROVIDER_TYPES = {
  ClientConfigurationProvider: Symbol('IClientConfigurationProvider'),
  BackendClientConfigurationProvider: Symbol('BackendClientConfigurationProvider'),
  NavigationItemProvider: Symbol('INavigationItemProvider'),
  ApplicationActionProvider: Symbol('IApplicationActionProvider'),
  ScenarioDefinitionProvider: Symbol('IScenarioDefinitionProvider'),
  ImageProvider: Symbol('IImageProvider'),
  HomeOptionsProvider: Symbol('IHomeOptionsProvider'),
  ScenarioParameterProvider: Symbol('IScenarioParameterProvider'),
  BackendScenarioDefinitionProvider: Symbol('BackendScenarioDefinitionProvider'),
  BackendScenarioParameterProvider: Symbol('BackendScenarioParameterProvider'),
  CityDataProvider: Symbol('CityDataProvicer'),
  ChartOptionsProvider: Symbol('ChartOptionsProvider'),
  DistributionDisplayProvider: Symbol('DistributionDisplayProvider'),
  JobProvider: Symbol('IJobProvider'),
  JobResultProvider: Symbol('IJobResultProvider'),
  CityDataAPI: Symbol('ICityDataAPI'),
  GeospatialFileProvider: Symbol('IGeospatialFileProvider'),
};

export default PROVIDER_TYPES;
