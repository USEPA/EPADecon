/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from '@/interfaces/configuration/IRootState';

Vue.use(Vuex);

// Vuex structure based on https://codeburst.io/vuex-and-typescript-3427ba78cfa8

const store: StoreOptions<IRootState> = {
  state: {
    applicationVersion: 'Unknown',
    applicationTitle: 'Wide Area Decontamination Tool',
    publisherName: 'Battelle Memorial Institute',
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
          enabled: 'Parameters which define costs and efficacy of decontamination efforts',
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
    applicationActions: [
      {
        title: 'Load Scenario',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSelected: () => {},
        enabled: true,
        icon: 'fa-upload',
      },
      {
        title: 'Load Parameters',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSelected: () => {},
        enabled: true,
        icon: 'fa-upload',
      },
      {
        title: 'Save Scenario',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSelected: () => {},
        enabled: true,
        icon: 'fa-save',
      },
      {
        title: 'Save Parameters',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSelected: () => {},
        enabled: true,
        icon: 'fa-save',
      },
      {
        title: 'Save Results',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSelected: () => {},
        enabled: false,
        icon: 'fa-save',
      },
    ],
  },
  modules: {},
};

export default new Vuex.Store<IRootState>(store);
