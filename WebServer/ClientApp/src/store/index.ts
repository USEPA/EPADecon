import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

Vue.use(Vuex);

// Vuex structure based on https://codeburst.io/vuex-and-typescript-3427ba78cfa8

let store: StoreOptions<RootState> = {
  state: {
    applicationVersion: 'Unknown',
    applicationTitle: 'Wide Area Decontamination Tool',
    theme: {},
    navigationItems: [
      {
        title: 'Define Scenario',
        icon: 'fa-biohazard',
        link: '/DefineScenario',
        enabled: true,
        tooltip: {
          enabled: 'Parameters which construct the contamination scenario',
          disabled: 'ERROR - scenario definition should always be enabled',
        },
      },
      {
        title: 'Modify Parameters',
        icon: 'fa-shower',
        link: '/ModifyParameters',
        enabled: true,
        tooltip: {
          enabled:
            'Parameters which define costs and efficacy of decontamination efforts',
          disabled: 'ERROR - modify parameters should always be enabled',
        },
      },
      {
        title: 'View Results',
        icon: 'fa-building',
        link: '/ViewResults',
        enabled: false,
        tooltip: {
          enabled: 'View the results from the latest model run',
          disabled: 'No results - run model to generate results...',
        },
      },
    ],
  },
  modules: {
  },
  
};

export default new Vuex.Store<RootState>(store);
