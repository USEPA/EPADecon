import IAppSettings from '@/interfaces/store/appSettings/IAppSettings';

const state: IAppSettings = {
  theme: {},

  applicationTitle: 'unknown',

  applicationVersion: 'unknown',

  publisherName: 'unknown',

  errorIcon: 'fa-exclamation-triangle',

  navigationItems: [],

  applicationActions: [],

  disclaimerAcknowledged: false,
};

export default state;
