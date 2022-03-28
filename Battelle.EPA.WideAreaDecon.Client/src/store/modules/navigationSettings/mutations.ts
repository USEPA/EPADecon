import { MutationTree } from 'vuex';
import INavigationSettings from '@/interfaces/store/navigationSettings/INavigationSettings';
import { NavigationSettingsStoreMutations } from '@/constants/store/NavigationSettings';

const mutations: MutationTree<INavigationSettings> = {
  [NavigationSettingsStoreMutations.ENABLE_NAVIGATION_TABS]: (state: INavigationSettings): void => {
    state.enableNavigationTabs = true;
  },

  [NavigationSettingsStoreMutations.DISABLE_NAVIGATION_TABS]: (state: INavigationSettings): void => {
    state.enableNavigationTabs = false;
  },
};

export default mutations;
