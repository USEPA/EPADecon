import IOtherResult from './element/IOtherResult';
import IIncidentCommandResult from './element/IIncidentCommandResult';

export default interface IEventResults {
  totalEventCost: number;
  totalEventDuration: number;
  totalContaminationArea: number;
  totalSolidWasteProduced: number;
  totalAqueousWasteProduced: number;
  otherResults: IOtherResult;
  incidentCommandResults: IIncidentCommandResult;
  [key: string]: number | IOtherResult | IIncidentCommandResult;
}
