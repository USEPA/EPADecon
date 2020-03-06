import IRunSettings from './runSettings/IRunSettings';
import IAppSettings from './appSettings/IAppSettings';
import IClientConfiguration from '../configuration/IClientConfiguration';
import INavigationSettings from './navigationSettings/INavigationSettings';
import IScenarioDefinition from './defineScenarioParameters/IScenarioDefinition';
import IScenarioParameters from './defineScenarioParameters/IScenarioParameters';

export default interface IRootState
  extends IClientConfiguration,
    IAppSettings,
    IRunSettings,
    IScenarioDefinition,
    IScenarioParameters,
    INavigationSettings {}
