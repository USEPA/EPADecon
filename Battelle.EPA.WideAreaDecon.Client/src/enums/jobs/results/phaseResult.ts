// eslint-disable-next-line no-shadow
enum PhaseResult {
  Workdays = 'workDays',
  OnSiteDays = 'onSiteDays',
  PhaseCost = 'phaseCost',
  // OtherCosts = 'otherCosts', // exclude other costs for now
  TotalCost = 'totalCost',
  AreaContaminated = 'areaContaminated',
  DecontaminationRounds = 'decontaminationRounds',
}

export default PhaseResult;
