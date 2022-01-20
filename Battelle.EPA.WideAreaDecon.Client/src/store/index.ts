import Vue from 'vue';
import Vuex from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store<IRootState>({
  modules,
});

export default store;
