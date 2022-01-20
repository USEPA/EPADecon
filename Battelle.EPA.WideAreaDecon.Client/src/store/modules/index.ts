import { ModuleTree } from 'vuex';
import { StoreNames } from '@/constants/store/store';
import IRootState from '@/interfaces/store/IRootState';
import appSettings from './appSettings';
import clientConfiguration from './clientConfiguration';
import jobs from './jobs';
import navigationSettings from './navigationSettings';
import parameterSelection from './parameterSelection';
import runSettings from './runSettings';

const modules: ModuleTree<IRootState> = {
  [StoreNames.APPSETTINGS]: appSettings,
  [StoreNames.CLIENT_CONFIGURATION]: clientConfiguration,
  [StoreNames.JOBS]: jobs,
  [StoreNames.NAVIGATION_SETTINGS]: navigationSettings,
  [StoreNames.PARAMETER_SELECTION]: parameterSelection,
  [StoreNames.RUN_SETTINGS]: runSettings,
};

export default modules;
