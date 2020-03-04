import { injectable } from 'inversify';
import IScenarioDefinitionProvider from '@/interfaces/providers/IScenarioDefinitionProvider';
import mockDefineScenario from '@/dataMocks/defineScenarioMock.json';
import { deserialize } from 'typescript-json-serializer';
import ParameterList from '../parameter/ParameterList';

@injectable()
export default class DefaultScenarioDefinitionProvider implements IScenarioDefinitionProvider {
  // eslint-disable-next-line class-methods-use-this
  async getScenarioDefinition(): Promise<ParameterList> {
    const data = deserialize<ParameterList>(mockDefineScenario, ParameterList);
    return data;
  }
}
