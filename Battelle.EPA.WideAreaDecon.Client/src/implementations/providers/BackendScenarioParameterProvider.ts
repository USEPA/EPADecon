import { injectable } from 'inversify';
import IScenarioParameterProvider from '@/interfaces/providers/IScenarioParameterProvider';
import axios from 'axios';
import { deserialize } from 'typescript-json-serializer';

import ParameterList from '../parameter/ParameterList';

@injectable()
export default class DefaultScenarioDefinitionProvider implements IScenarioParameterProvider {
  // eslint-disable-next-line class-methods-use-this
  async getScenarioParameters(): Promise<ParameterList> {
    return axios
      .get<ParameterList>('/api/ScenarioDefinition')
      .then<ParameterList>((response) => deserialize<ParameterList>(response.data, ParameterList));
  }
}
