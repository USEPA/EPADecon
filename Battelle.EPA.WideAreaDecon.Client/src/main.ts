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
import IApplicationActionProvider from './interfaces/providers/IApplicationActionProvider';
import INavigationItemProvider from './interfaces/providers/INavigationItemProvider';

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

const applicationActions = container
  .get<IApplicationActionProvider>(TYPES.ApplicationActionProvider)
  .getApplicationActions();

const navigationItems = container.get<INavigationItemProvider>(TYPES.NavigationItemProvider).getNavigationItems();

Promise.all([clientConfigPromise, scenarioDefPromise]).finally(() => {
  store.replaceState({
    ...store.state,
    ...defaultConfig,
    ...{ applicationActions },
    ...{ navigationItems },
  });
  const vuetify = GetVuetify(defaultConfig);
  new Vue({
    vuetify,
    router,
    store,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    render: (h) => h(App),
  }).$mount('#app');
});
