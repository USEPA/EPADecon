import { UserVuetifyPreset } from 'vuetify';

interface ClientConfiguration {
  theme: Partial<UserVuetifyPreset>;
  version: string;
}

export default ClientConfiguration;
