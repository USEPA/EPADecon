import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

Vue.use(Vuex);

// Vuex structure based on https://codeburst.io/vuex-and-typescript-3427ba78cfa8

let store: StoreOptions<RootState> = {
  state: {
    version: 'Unknown',
    theme: {},
  },
  modules: {
  },
};

function GetStore(state: RootState){
  store.state = {...state};
  return new Vuex.Store<RootState>(store);
}

export default GetStore;
