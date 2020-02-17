import Vue from 'vue';
import Router from 'vue-router';
import DefineScenario from '@/components/scenario/DefineScenario.vue';
import ModifyParameters from '@/components/parameters/ModifyParameters.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
  ],
});
