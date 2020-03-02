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
import IVuetifyThemeSettings from '@/interfaces/configuration/IVuetifyThemeSettings';

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
export default function GetVuetifyInstance(config: IVuetifyThemeSettings) {
  return new Vuetify(config as never);
}
