import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import '@/plugins/axios';
import GetVuetify from '@/plugins/vuetify';
import App from '@/App.vue';
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

Vue.config.productionTip = false;

const clientConfigPromise = container
  .get<BackendClientConfigurationProvider>(TYPES.BackendClientConfigurationProvider)
  .getClientConfiguration();

const scenarioDefPromise = container
  .get<IScenarioDefinitionProvider>(TYPES.ScenarioDefinitionProvider)
  .getScenarioDefinition();

Promise.all([clientConfigPromise, scenarioDefPromise]).then(([clientConfig, scenarioDef]) => {
  // empty
  const vuetify = GetVuetify(clientConfig);
  const defineScenarioParameters = new DefineScenarioParameters(scenarioDef);
  store.replaceState({ ...store.state, ...clientConfig, ...defineScenarioParameters });
  // console.log(store);
  new Vue({
    vuetify,
    router,
    store,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    render: (h) => h(App),
  }).$mount('#app');
});
