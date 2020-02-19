import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import './plugins/axios';
import { GetVuetify } from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from '@/store/index';
import '@fortawesome/fontawesome-free/css/all.css';
import { BackendClientConfigurationProvider } from './implementations/providers/BackendClientConfigurationProvider';
import container from './dependencyInjection/inversify.config';
import { TYPES } from './dependencyInjection/types';

Vue.config.productionTip = false;

container
  .get<BackendClientConfigurationProvider>(TYPES.BackendClientConfigurationProvider)
  .getClientConfiguration()
  .then((data) => {
    const vuetify = GetVuetify(data);
    store.replaceState({ ...store.state, ...data });

    new Vue({
      vuetify,
      router,
      store,
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      render: (h) => h(App),
    }).$mount('#app');
  });
