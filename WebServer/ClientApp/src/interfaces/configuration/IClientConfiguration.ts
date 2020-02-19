import { UserVuetifyPreset } from 'vuetify';
import { IVuetifyThemeSettings } from './IVuetifyThemeSettings';

export interface IClientConfiguration extends IVuetifyThemeSettings {
  theme: Partial<UserVuetifyPreset>;
  applicationVersion: string;
}
