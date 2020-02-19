import { UserVuetifyPreset } from 'vuetify';
import IClientConfiguration from './IClientConfiguration';
import IApplicationAction from './IApplicationAction';
import INavigationItem from './INavigationItem';

export default interface IRootState extends IClientConfiguration {
  theme: Partial<UserVuetifyPreset>;
  applicationTitle: string;
  applicationVersion: string;
  publisherName: string;
  navigationItems: INavigationItem[];
  applicationActions: IApplicationAction[];
}
