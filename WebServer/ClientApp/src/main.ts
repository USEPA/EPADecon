import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import axios from 'axios';
import './plugins/axios';
import GetVuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import GetStore from '@/store/index';
import ClientConfiguration from './interface/clientConfiguration';
import '@fortawesome/fontawesome-free/css/all.css';
import { RootState } from './store/types';
 

Vue.config.productionTip = false;
axios.get<RootState>('/api/ClientConfiguration').then(
  (data) => {
    let vuetify = GetVuetify(data.data);
    let store = GetStore(data.data);
    new Vue({
      vuetify,
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app')
  });
