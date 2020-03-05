import IRunSettings from './runSettings/IRunSettings';
import IAppSettings from './appSettings/IAppSettings';
import IClientConfiguration from '../configuration/IClientConfiguration';
import IDefineScenarioParameters from './defineScenarioParameters/IDefineScenarioParameters';
import INavigationSettings from './navigationSettings/INavigationSettings';

export default interface IRootState
  extends IClientConfiguration,
    IAppSettings,
    IRunSettings,
    IDefineScenarioParameters,
    INavigationSettings {}
