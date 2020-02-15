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
import ClientConfiguration from '@/interface/clientConfiguration';

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

let opts = {
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
      },
      // dark: {
      // }
    },
  },
};

function GetVuetify(config : ClientConfiguration){
  let cast : any = config;
  return new Vuetify(cast);
}

export default GetVuetify;
