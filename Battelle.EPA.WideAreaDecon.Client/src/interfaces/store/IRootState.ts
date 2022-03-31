import { StoreNames } from '@/constants/store/store';
import IRunSettings from './runSettings/IRunSettings';
import IAppSettings from './appSettings/IAppSettings';
import IClientConfiguration from '../configuration/IClientConfiguration';
import INavigationSettings from './navigationSettings/INavigationSettings';
import IParameterSelection from './parameterSelection/IParameterSelection';
import ICurrentJob from './jobs/ICurrentJob';

export default interface IRootState {
  [StoreNames.CLIENT_CONFIGURATION]: IClientConfiguration;
  [StoreNames.APPSETTINGS]: IAppSettings;
  [StoreNames.RUN_SETTINGS]: IRunSettings;
  [StoreNames.PARAMETER_SELECTION]: IParameterSelection;
  [StoreNames.NAVIGATION_SETTINGS]: INavigationSettings;
  [StoreNames.JOBS]: ICurrentJob;
}
