import { UserVuetifyPreset } from 'vuetify';

export interface RootState {
  theme: Partial<UserVuetifyPreset>;
  applicationTitle: string;
  applicationVersion: string;
  navigationItems: NavigationItem[];
}

export interface TooltipSelector {
  enabled: string;
  disabled: string;
}

export interface NavigationItem {
  title: string;
  icon: string;
  link: string;
  enabled: boolean;
  tooltip: TooltipSelector;
}
