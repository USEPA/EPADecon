import PpeLevel from '@/enums/parameter/ppeLevel';

export default interface IResourceResult {
  ppeUnits: Record<PpeLevel, number>;
  [key: string]: number | Record<string, number>;
}
