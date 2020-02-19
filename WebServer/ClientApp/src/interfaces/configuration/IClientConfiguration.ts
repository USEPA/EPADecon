import { UserVuetifyPreset } from 'vuetify';
export interface IClientConfiguration {
  theme: Partial<UserVuetifyPreset>;
  applicationVersion: string;
}
