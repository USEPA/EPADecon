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
import defineScenarioDefinitionMutations from './scenarioDefinition/mutations';
import ScenarioDefinition from './scenarioDefinition/ScenarioDefinition';
import runSettingsGetters from './runSettings/getters';
import NavigationSettings from './navigationSettings/NavigationSettings';
import navigationSettingsMutations from './navigationSettings/mutations';
import ScenarioParameters from './scenarioParameters/ScenarioParameters';
import defineScenarioParametersMutations from './scenarioParameters/mutations';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  state: {
    ...new ClientConfiguration(),
    ...new AppSettings(),
    ...new RunSettings(),
    ...new ScenarioDefinition(),
    ...new ScenarioParameters(),
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
    ...defineScenarioDefinitionMutations,
    ...defineScenarioParametersMutations,
    ...navigationSettingsMutations,
  },
};

export default new Vuex.Store<IRootState>(store);
