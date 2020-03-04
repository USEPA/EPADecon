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
import defineScenarioParametersMutations from './defineScenarioParameters/mutations';
import DefineScenarioParameters from './defineScenarioParameters/DefineScenarioParameters';
import runSettingsGetters from './runSettings/getters';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  state: {
    ...new ClientConfiguration(),
    ...new AppSettings(),
    ...new RunSettings(),
    ...new DefineScenarioParameters(),
  },
  modules: {},
  getters: {
    ...runSettingsGetters,
  },
  mutations: {
    ...appSettingsMutations,
    ...clientConfigurationMutations,
    ...runSettingsMutations,
    ...defineScenarioParametersMutations,
  },
};

export default new Vuex.Store<IRootState>(store);
