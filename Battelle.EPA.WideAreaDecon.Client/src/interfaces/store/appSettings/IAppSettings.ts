import { UserVuetifyPreset } from 'vuetify';
import INavigationItem from '@/interfaces/configuration/INavigationItem';
import IApplicationAction from '@/interfaces/configuration/IApplicationAction';

export default interface IAppSettings {
  theme: Partial<UserVuetifyPreset>;
  navigationItems: INavigationItem[];
  applicationActions: IApplicationAction[];
  applicationTitle: string;
  applicationVersion: string;
  publisherName: string;
  errorIcon: string;
}
