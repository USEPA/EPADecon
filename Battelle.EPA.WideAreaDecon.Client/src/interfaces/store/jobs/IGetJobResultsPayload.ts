import IJobProvider from '@/interfaces/providers/IJobProvider';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';

export default interface IGetJobResultsPayload {
  jobProvider: IJobProvider;
  resultProvider: IJobResultProvider;
}
