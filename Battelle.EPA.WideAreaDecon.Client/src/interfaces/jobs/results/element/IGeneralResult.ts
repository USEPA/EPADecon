import IElementResult from './IElementResult';

export default interface IGeneralResult extends IElementResult {
  totalCost: number;
  areaContaminated: number;
  decontaminationTreatments: number;
  solidWasteProduced: number;
  aqueousWasteProduced: number;
}
