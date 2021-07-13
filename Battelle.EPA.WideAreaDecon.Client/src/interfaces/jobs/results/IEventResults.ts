import IOtherResult from './phase/IOtherResult';

export default interface IEventResults {
  totalEventCost: number;
  totalEventDuration: number;
  totalContaminationArea: number;
  otherResults: IOtherResult;
}
