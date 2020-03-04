import IRunSettings from './runSettings/IRunSettings';
import IAppSettings from './appSettings/IAppSettings';
import IClientConfiguration from '../configuration/IClientConfiguration';
import IDefineScenarioParameters from './defineScenarioParameters/IDefineScenarioParameters';

export default interface IRootState
  extends IClientConfiguration,
    IAppSettings,
    IRunSettings,
    IDefineScenarioParameters {}
