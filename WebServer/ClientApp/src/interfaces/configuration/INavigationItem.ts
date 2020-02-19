import { ITooltipSelector } from './ITooltipSelector';

export interface INavigationItem {
  title: string;
  icon: string;
  link: string;
  enabled: boolean;
  tooltip: ITooltipSelector;
}
