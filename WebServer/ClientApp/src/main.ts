import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import axios from 'axios';
import './plugins/axios';
import GetVuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from '@/store/index';
import ClientConfiguration from './interface/clientConfiguration';

Vue.config.productionTip = false;
axios.get<ClientConfiguration>('/api/ClientConfiguration').then(
  (data) => {
    let vuetify = GetVuetify(data.data);
    console.log(vuetify);
    new Vue({
      vuetify,
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app')
  });
