import { GetterTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import ICurrentJob from '@/interfaces/store/jobs/ICurrentJob';
import { JobsStoreGetters } from '@/constants/store/Jobs';

const getters: GetterTree<ICurrentJob, IRootState> = {
  [JobsStoreGetters.HAS_RESULTS]: (state) => {
    return state.currentJob.results.length > 0;
  },
};

export default getters;
