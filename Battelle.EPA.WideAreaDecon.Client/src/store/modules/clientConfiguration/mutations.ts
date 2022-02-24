import { MutationTree } from 'vuex';
import IClientConfiguration from '@/interfaces/configuration/IClientConfiguration';
import { ClientConfigurationStoreMutations } from '@/constants/store/ClientConfiguration';

const mutations: MutationTree<IClientConfiguration> = {
  [ClientConfigurationStoreMutations.EXAMPLE_CLIENT_CONFIGURATION]: (state: IClientConfiguration): void => {
    // console.log()
  },
};

export default mutations;
