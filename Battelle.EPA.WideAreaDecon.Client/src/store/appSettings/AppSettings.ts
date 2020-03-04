import IAppSettings from '@/interfaces/store/appSettings/IAppSettings';
import { UserVuetifyPreset } from 'vuetify';
import INavigationItem from '@/interfaces/configuration/INavigationItem';
import IApplicationAction from '@/interfaces/configuration/IApplicationAction';
import IRunSettings from '@/interfaces/store/runSettings/IRunSettings';
import container from '@/dependencyInjection/config';
import INavigationItemProvider from '@/interfaces/providers/INavigationItemProvider';
import IApplicationActionProvider from '@/interfaces/providers/IApplicationActionProvider';
import TYPES from '@/dependencyInjection/types';
import IClientConfiguration from '@/interfaces/configuration/IClientConfiguration';
import RunSettings from '../runSettings/RunSettings';

const navigationItemProvider = container.get<INavigationItemProvider>(TYPES.NavigationItemProvider);
const applicationActionProvider = container.get<IApplicationActionProvider>(TYPES.ApplicationActionProvider);

export default class AppSettings implements IAppSettings {
  theme: Partial<UserVuetifyPreset> = {};

  applicationTitle = 'unknown';

  applicationVersion = 'unknown';

  publisherName = 'unknown';

  errorIcon = 'fa-exclamation-triangle';

  navigationItems: INavigationItem[] = navigationItemProvider.getNavigationItems();

  applicationActions: IApplicationAction[] = applicationActionProvider.getApplicationActions();

  runSettings: IRunSettings = new RunSettings();

  updateSettings(other: IClientConfiguration) {
    this.applicationTitle = other.applicationTitle;
    this.applicationVersion = other.applicationVersion;
    this.publisherName = other.publisherName;
    this.theme = other.theme;
  }
}
