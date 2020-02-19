import { UserVuetifyPreset } from 'vuetify';
import { IVuetifyThemeSettings } from './IVuetifyThemeSettings';

export interface IClientConfiguration extends IVuetifyThemeSettings {
  theme: Partial<UserVuetifyPreset>;
  applicationTitle: string;
  applicationVersion: string;
  publisherName: string;
}
