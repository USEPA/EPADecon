/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from '@/interfaces/configuration/IRootState';
import container from '@/dependencyInjection/inversify.config';
import INavigationItemProvider from '@/interfaces/providers/INavigationItemProvider';
import { TYPES } from '@/dependencyInjection/types';
import IApplicationActionProvider from '@/interfaces/providers/IApplicationActionProvider';

Vue.use(Vuex);

// Vuex structure based on https://codeburst.io/vuex-and-typescript-3427ba78cfa8

const navigationItemProvider = container.get<INavigationItemProvider>(TYPES.NavigationItemProvider);
const applicationActionProvider = container.get<IApplicationActionProvider>(TYPES.ApplicationActionProvider);

const store: StoreOptions<IRootState> = {
  state: {
    applicationVersion: 'Unknown',
    applicationTitle: 'Unknown',
    publisherName: 'Unknown',
    theme: {},
    navigationItems: navigationItemProvider.getNavigationItems(),
    applicationActions: applicationActionProvider.getApplicationActions(),
  },
  modules: {},
};

export default new Vuex.Store<IRootState>(store);
