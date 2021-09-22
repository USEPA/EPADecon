import IElementResult from './IElementResult';

export default interface IGeneralResult extends IElementResult {
  totalCost: number;
  areaContaminated: number;
  decontaminationRounds: number;
  solidWasteProduced: number;
  aqueousWasteProduced: number;
}
