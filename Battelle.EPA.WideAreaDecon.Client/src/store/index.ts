/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import RunSettings from './runSettings/RunSettings';
import AppSettings from './appSettings/AppSettings';
import ClientConfiguration from './clientConfiguration/ClientConfiguration';
import appSettingsMutations from './appSettings/mutations';
import clientConfigurationMutations from './clientConfiguration/mutations';
import runSettingsMutations from './runSettings/mutations';
import runSettingsGetters from './runSettings/getters';
import NavigationSettings from './navigationSettings/NavigationSettings';
import navigationSettingsMutations from './navigationSettings/mutations';
import parameterSelectionMutations from './parameterSelection/mutations';
import ParameterSelection from './parameterSelection/ParameterSelection';
import jobActions from './jobs/actions';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  state: {
    ...new ClientConfiguration(),
    ...new AppSettings(),
    ...new RunSettings(),
    ...new ParameterSelection(),
    ...new NavigationSettings(),
  },
  modules: {},
  getters: {
    ...runSettingsGetters,
  },
  mutations: {
    ...appSettingsMutations,
    ...clientConfigurationMutations,
    ...runSettingsMutations,
    ...parameterSelectionMutations,
    ...navigationSettingsMutations,
  },
  actions: {
    ...jobActions,
  },
};

export default new Vuex.Store<IRootState>(store);
