import { UserVuetifyPreset } from 'vuetify';
import IVuetifyThemeSettings from './IVuetifyThemeSettings';

export default interface ClientConfiguration extends IVuetifyThemeSettings {
  theme: Partial<UserVuetifyPreset>;
  applicationTitle: string;
  applicationVersion: string;
  publisherName: string;
}
