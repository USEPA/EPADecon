import Vue from 'vue';
import Router from 'vue-router';
import DefineScenario from '@/components/adjustmentPages/DefineScenario.vue';
import ModifyParameters from '@/components/adjustmentPages/ModifyParameters.vue';
import LoadPreDefinedScenario from '@/components/load/LoadPreDefinedScenario.vue';
import LoadPreviousScenario from '@/components/load/LoadPreviousScenario.vue';
import Home from '@/components/base/Home.vue';

Vue.use(Router);

export default new Router({
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
  ],
});
