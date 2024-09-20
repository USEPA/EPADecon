import { AppSettingsStoreActions, AppSettingsStoreMutations } from '@/constants/store/appsettings';
import IAppSettings from '@/interfaces/store/appSettings/IAppSettings';
import IRootState from '@/interfaces/store/IRootState';
import { ActionContext, ActionTree } from 'vuex';

const actions: ActionTree<IAppSettings, IRootState> = {
  [AppSettingsStoreActions.ACKNOWLEDGE_DISCLAIMER]: (store: ActionContext<IAppSettings, IRootState>) => {
    store.commit(AppSettingsStoreMutations.SET_DISCLAIMER_ACKNOWLEDGED, true);
  },
};

export default actions;