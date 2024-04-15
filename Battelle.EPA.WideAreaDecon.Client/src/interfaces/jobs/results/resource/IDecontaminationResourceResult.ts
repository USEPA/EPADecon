import ApplicationMethod from '@/enums/parameter/applicationMethod';
import IResourceResult from './IResourceResult';

export default interface IDecontaminationResourceResult extends IResourceResult {
  deconAgentVolume: Record<ApplicationMethod, number>;
}
