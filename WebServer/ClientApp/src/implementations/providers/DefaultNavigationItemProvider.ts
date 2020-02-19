import { injectable } from 'inversify';
import INavigationItemProvider from '@/interfaces/providers/INavigationItemProvider';
import { INavigationItem } from '@/interfaces/configuration/INavigationItem';

@injectable()
export default class DefaultNavigationItemProvider implements INavigationItemProvider {
  getNavigationItems(): INavigationItem[] {
    return [
      {
        title: 'Define Scenario',
        icon: 'fa-biohazard',
        link: '/DefineScenario',
        enabled: true,
        tooltip: {
          enabled: 'Parameters which construct the contamination scenario',
          disabled: 'ERROR - scenario definition should always be enabled',
        },
      },
      {
        title: 'Modify Parameters',
        icon: 'fa-shower',
        link: '/ModifyParameters',
        enabled: true,
        tooltip: {
          enabled: 'Parameters which define costs and efficacy of decontamination efforts',
          disabled: 'ERROR - modify parameters should always be enabled',
        },
      },
      {
        title: 'View Results',
        icon: 'fa-building',
        link: '/ViewResults',
        enabled: false,
        tooltip: {
          enabled: 'View the results from the latest model run',
          disabled: 'No results - run model to generate results...',
        },
      },
    ];
  }
}
