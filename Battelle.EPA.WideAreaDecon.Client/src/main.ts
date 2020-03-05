import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import '@/plugins/axios';
import GetVuetify from '@/plugins/vuetify';
import App from '@/components/App.vue';
import router from '@/router';
import store from '@/store/index';
import '@fortawesome/fontawesome-free/css/all.css';
import BackendClientConfigurationProvider from '@/implementations/providers/BackendClientConfigurationProvider';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _ from 'lodash';
import IScenarioDefinitionProvider from './interfaces/providers/IScenarioDefinitionProvider';
import DefineScenarioParameters from './store/defineScenarioParameters/DefineScenarioParameters';
import DefaultClientConfigurationProvider from './implementations/providers/DefaultClientConfigurationProvider';

Vue.config.productionTip = false;

let defaultConfig = new DefaultClientConfigurationProvider().getClientConfiguration();

const clientConfigPromise = container
  .get<BackendClientConfigurationProvider>(TYPES.BackendClientConfigurationProvider)
  .getClientConfigurationAsync()
  .then((clientConfig) => {
    defaultConfig = { ...defaultConfig, ...clientConfig };
  });

const scenarioDefPromise = container
  .get<IScenarioDefinitionProvider>(TYPES.ScenarioDefinitionProvider)
  .getScenarioDefinition()
  .then((scenarioDef) => {
    const defineScenarioParameters = new DefineScenarioParameters(scenarioDef);
    store.replaceState({ ...store.state, ...defaultConfig, ...defineScenarioParameters });
  });

Promise.all([clientConfigPromise, scenarioDefPromise]).finally(() => {
  store.replaceState({ ...store.state, ...defaultConfig });
  const vuetify = GetVuetify(defaultConfig);
  new Vue({
    vuetify,
    router,
    store,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    render: (h) => h(App),
  }).$mount('#app');
});
