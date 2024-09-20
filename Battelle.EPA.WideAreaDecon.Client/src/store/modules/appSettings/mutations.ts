import { MutationTree } from 'vuex';
import INavigationItem from '@/interfaces/configuration/INavigationItem';
import IAppSettings from '@/interfaces/store/appSettings/IAppSettings';
import { AppSettingsStoreMutations } from '@/constants/store/appsettings';

const mutations: MutationTree<IAppSettings> = {
  [AppSettingsStoreMutations.SET_NAVIGATION_ITEMS]: (state: IAppSettings, newState: INavigationItem[]): void => {
    state.navigationItems = newState;
  },
  [AppSettingsStoreMutations.SET_DISCLAIMER_ACKNOWLEDGED]: (state: IAppSettings, newState: boolean): void => {
    state.disclaimerAcknowledged = newState;
  }
};

export default mutations;
