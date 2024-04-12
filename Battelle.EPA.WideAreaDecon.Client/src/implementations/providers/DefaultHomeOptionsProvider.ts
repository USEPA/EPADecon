import IHomeOptionsProvider from '@/interfaces/providers/IHomeOptionsProvider';
import IHomeOptions from '@/interfaces/configuration/IHomeOptions';
import { injectable } from 'inversify';
import HomeOptions from '../configuration/HomeOptions';
import HomeOptionRouterAction from '../configuration/HomeOptionRouterAction';
import store from '@/store';
import { StoreNames } from '@/constants/store/store';
import { ParameterSelectionStoreActions, ParameterSelectionStoreGetters } from '@/constants/store/ParameterSelection';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IScenarioDefinitionProvider from '@/interfaces/providers/IScenarioDefinitionProvider';
import IScenarioParameterProvider from '@/interfaces/providers/IScenarioParameterProvider';
import { JobsStoreGetters } from '@/constants/store/Jobs';
// import HomeOptionModalAction from '../configuration/HomeOptionModalAction';

@injectable()
export default class DefaultHomeOptionsProvider implements IHomeOptionsProvider {
  defaultOptions = [
    new HomeOptions(
      'Create New Scenario',
      'CreateScenario',
      'Creates a new wide area contamination scenario - requires extensive user input if not using default values',
      new HomeOptionRouterAction('/DefineScenario', this.createNewScenario),
    ),
    // new HomeOptions(
    //   'Load Pre-Defined Scenario',
    //   'LoadPresetScenario',
    //   'Loads a default scenario from a predefined data set - minimal user input required',
    //   new HomeOptionModalAction('load-pre-defined-scenario'),
    // ),
    // new HomeOptions(
    //   'Load Previous Scenario',
    //   'LoadPreviousScenario',
    //   'Loads a previously saved scenario from a data file',
    //   new HomeOptionModalAction('load-previous-scenario'),
    // ),
  ];

  getOptions(): IHomeOptions[] {
    return this.defaultOptions;
  }

  async createNewScenario(): Promise<void> {
    const anyParametersChanged: boolean =
      store.getters[`${StoreNames.PARAMETER_SELECTION}/${ParameterSelectionStoreGetters.PARAMETERS_HAVE_CHANGED}`];
    const hasResults: boolean = store.getters[`${StoreNames.JOBS}/${JobsStoreGetters.HAS_RESULTS}`];

    if (anyParametersChanged || hasResults) {
      // reset all parameters
      const defaultScenario = (
        await container
          .get<IScenarioDefinitionProvider>(TYPES.BackendScenarioDefinitionProvider)
          .getScenarioDefinition()
      ).toWrapperList();
      const defaultParams = (
        await container.get<IScenarioParameterProvider>(TYPES.BackendScenarioParameterProvider).getScenarioParameters()
      ).toWrapperList();

      store.dispatch(
        `${StoreNames.PARAMETER_SELECTION}/${ParameterSelectionStoreActions.SET_SCENARIO_DEFINITION}`,
        defaultScenario,
      );
      store.dispatch(
        `${StoreNames.PARAMETER_SELECTION}/${ParameterSelectionStoreActions.SET_SCENARIO_PARAMETERS}`,
        defaultParams,
      );
      store.dispatch(
        `${StoreNames.PARAMETER_SELECTION}/${ParameterSelectionStoreActions.SET_SCENARIO_DEFINITION_MODE}`,
        null,
      );
    }
  }
}
