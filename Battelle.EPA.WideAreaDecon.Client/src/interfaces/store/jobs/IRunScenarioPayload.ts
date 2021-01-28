import IJobProvider from "@/interfaces/providers/IJobProvider";

export default interface IRunScenarioPayload {
  jobProvider: IJobProvider;
  numberRealizations: number;
  seed1: number;
  seed2: number;
}