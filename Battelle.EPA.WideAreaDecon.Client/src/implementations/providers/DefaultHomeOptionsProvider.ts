import IHomeOptionsProvider from '@/interfaces/providers/IHomeOptionsProvider';
import IHomeOptions from '@/interfaces/configuration/IHomeOptions';
import { injectable } from 'inversify';
import HomeOptions from '../configuration/HomeOptions';

@injectable()
export default class DefaultHomeOptionsProvider implements IHomeOptionsProvider {
  defaultOptions = [
    new HomeOptions(
      'Create New Scenario',
      'CreateScenario',
      'Creates a new wide are contamination scenario - requires extensive user input',
      '/DefineScenario',
    ),
    new HomeOptions(
      'Load Pre-Defined Scenario',
      'LoadPresetScenario',
      'Loads a default scenario from a predefined data set - minimal user input required',
      '/LoadPreDefinedScenario',
    ),
    new HomeOptions(
      'Load Previous Scenario',
      'LoadPreviousScenario',
      'Loads a previously saved scenario from a data file',
      '/LoadPreviousScenario',
    ),
  ];

  getOptions(): IHomeOptions[] {
    return this.defaultOptions;
  }
}
