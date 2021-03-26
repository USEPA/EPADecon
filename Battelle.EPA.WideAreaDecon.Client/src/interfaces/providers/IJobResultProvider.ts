import JobRequest from "@/implementations/jobs/JobRequest";
import IJobResultRealization from "../jobs/results/IJobResultRealization";

export default interface IJobResultProvider {
  exportJobResults(job: JobRequest): void;
  getRealizationResults(job: JobRequest, realization: number): IJobResultRealization | undefined;
}
