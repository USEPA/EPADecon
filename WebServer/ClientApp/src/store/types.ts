import { UserVuetifyPreset } from 'vuetify';

export interface RootState {
  theme: Partial<UserVuetifyPreset>;
  applicationTitle: string;
  applicationVersion: string;
  publisherName: string;
  navigationItems: NavigationItem[];
  applicationActions: ApplicationAction[];
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

export interface ApplicationAction {
  title: string;
  onSelected(): void;
  enabled: boolean;
  icon: string;
}

export interface ClientConfiguration {
  theme: Partial<UserVuetifyPreset>;
  version: string;
}
