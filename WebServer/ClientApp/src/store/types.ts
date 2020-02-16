import {UserVuetifyPreset} from 'vuetify';

export interface RootState {
  theme: Partial<UserVuetifyPreset>;
  version: string;
}
