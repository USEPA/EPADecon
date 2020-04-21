import IRunSettings from './runSettings/IRunSettings';
import IAppSettings from './appSettings/IAppSettings';
import IClientConfiguration from '../configuration/IClientConfiguration';
import INavigationSettings from './navigationSettings/INavigationSettings';
import IParameterSelection from './parameterSelection/IParameterSelection';

export default interface IRootState
  extends IClientConfiguration,
    IAppSettings,
    IRunSettings,
    IParameterSelection,
    INavigationSettings {}
