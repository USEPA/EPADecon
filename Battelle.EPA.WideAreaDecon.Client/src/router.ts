import Vue from 'vue';
import Router, { NavigationGuardNext, Route } from 'vue-router';
import DefineScenario from '@/components/adjustmentPages/DefineScenario.vue';
import ModifyParameters from '@/components/adjustmentPages/ModifyParameters.vue';
import LoadPreDefinedScenario from '@/components/modals/load/LoadPreDefinedScenario.vue';
import LoadPreviousScenario from '@/components/modals/load/LoadPreviousScenario.vue';
import Home from '@/components/base/Home.vue';
import ViewResults from '@/components/results/ViewResults.vue';
import RealizationSummary from '@/components/results/RealizationSummary.vue';
import store from '@/store';
import { StoreNames } from './constants/store/store';
import { JobsStoreGetters } from './constants/store/Jobs';

Vue.use(Router);

const pageRequiresResults = (to: Route, from: Route, next: NavigationGuardNext) => {
  if (!store.getters[`${StoreNames.JOBS}/${JobsStoreGetters.HAS_RESULTS}`]) {
    next({ name: 'defineScenario' });
  } else {
    next();
  }
};

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/DefineScenario',
      name: 'defineScenario',
      component: DefineScenario,
    },
    {
      path: '/ModifyParameters',
      name: 'modifyParameters',
      component: ModifyParameters,
    },
    {
      path: '/LoadPreDefinedScenario',
      name: 'loadPreDefinedScenario',
      component: LoadPreDefinedScenario,
    },
    {
      path: '/LoadPreviousScenario',
      name: 'loadPreviousScenario',
      component: LoadPreviousScenario,
    },
    {
      path: '/ViewResults',
      name: 'viewResults',
      component: ViewResults,
      beforeEnter: pageRequiresResults,
    },
    {
      path: '/JobSummary',
      name: 'jobSummary',
      component: RealizationSummary,
      beforeEnter: pageRequiresResults,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

router.beforeEach((to, _, next) => {
  if (store.state.APPSETTINGS.disclaimerAcknowledged || to.name === 'home') {
    next();
  } else {
    next({ name: 'home' });
  }
});

export default router;
