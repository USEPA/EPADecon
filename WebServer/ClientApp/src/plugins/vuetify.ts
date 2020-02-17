import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify, {
  VAlert,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VToolbar,
  VDataTable,
  VProgressLinear,
} from 'vuetify/lib';
import { RootState } from '@/store/types';

// vue-cli a-la-carte installation
Vue.use(Vuetify, {
  components: {
    VAlert,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VToolbar,
    VDataTable,
    VProgressLinear,
  },
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function GetVuetify(config: RootState) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cast: any = config;
  return new Vuetify(cast);
}

export default GetVuetify;
