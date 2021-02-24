import IJobPhaseResult from '@/interfaces/jobs/IJobPhaseResult';

export default class JobResult {
    indoor: IJobPhaseResult;

    outdoor: IJobPhaseResult;

    underground: IJobPhaseResult;

    constructor(indoor: IJobPhaseResult, outdoor: IJobPhaseResult, underground: IJobPhaseResult) {
        this.indoor = indoor;
        this.outdoor = outdoor;
        this.underground = underground;
    }
}