const resultDefinitions = {
  characterizationSampling: {
    workDays:
      'The number of days Characterization Sampling teams spent entering the site, sampling the site area, and exiting the site, including time associated with entry preparation, decontamination line, and post-entry rest periods',
    onSiteDays:
      'The number of work days plus any additional days needed for setup and teardown associated with Characterization Sampling',
    elementCost:
      'Total cost associated with Characterization Sampling, including the cost of equipment, supplies, PPE, labor, and sample analysis',
    'Ppe Units - Level A': 'The number of Level A PPE units needed for Characterization Sampling',
    'Ppe Units - Level B': 'The number of Level B PPE units needed for Characterization Sampling',
    'Ppe Units - Level C': 'The number of Level C PPE units needed for Characterization Sampling',
    'Ppe Units - Level D': 'The number of Level D PPE units needed for Characterization Sampling',
    vacuumSamples: 'The number of vacuum samples needed to sample surfaces',
    wipeSamples: 'The number of wipe samples needed to sample surfaces',
  },
  sourceReduction: {
    workDays:
      'The number of days Source Reduction teams spent entering the site, removing material from the site area, and exiting the site, including time associated with entry preparation, decontamination line, and post-entry rest periods',
    onSiteDays:
      'The number of work days plus any additional days needed for setup and teardown associated with Source Reduction',
    elementCost: 'Total cost associated with Source Reduction, including the cost of PPE, and labor',
    'Ppe Units - Level A': 'The number of Level A PPE units needed for Source Reduction',
    'Ppe Units - Level B': 'The number of Level B PPE units needed for Source Reduction',
    'Ppe Units - Level C': 'The number of Level C PPE units needed for Source Reduction',
    'Ppe Units - Level D': 'The number of Level D PPE units needed for Source Reduction',
  },
  decontamination: {
    workDays:
      'The number of days Decontamination teams spent entering the site, decontaminating the site area, and exiting the site for the necessary number of decontamination rounds',
    onSiteDays:
      'The number of work days plus any additional days needed for setup and teardown associated with Decontamination',
    elementCost:
      'Total cost associated with Decontamination, including the cost of equipment, supplies, PPE, and labor',
    'Decon Agent Volume - [Application Method]':
      'The volume of decontamination agent needed for all applications of the given decontamination method',
    'Ppe Units - Level A': 'The number of Level A PPE units needed for Decontamination',
    'Ppe Units - Level B': 'The number of Level B PPE units needed for Decontamination',
    'Ppe Units - Level C': 'The number of Level C PPE units needed for Decontamination',
    'Ppe Units - Level D': 'The number of Level D PPE units needed for Decontamination',
  },
  verificationSampling: {
    workDays:
      'The number of days Verification Sampling teams spent entering the site, sampling the site area, and exiting the site, including time associated with entry preparation, decontamination line, and post-entry rest periods',
    onSiteDays:
      'The number of work days plus any additional days needed for setup and teardown associated with Verification Sampling',
    elementCost:
      'Total cost associated with Verification Sampling, including the cost of equipment, supplies, PPE, labor, and sample analysis',
    'Ppe Units - Level A': 'The number of Level A PPE units needed for Verification Sampling',
    'Ppe Units - Level B': 'The number of Level B PPE units needed for Verification Sampling',
    'Ppe Units - Level C': 'The number of Level C PPE units needed for Verification Sampling',
    'Ppe Units - Level D': 'The number of Level D PPE units needed for Verification Sampling',
    vacuumSamples: 'The number of vacuum samples needed to sample surfaces',
    wipeSamples: 'The number of wipe samples needed to sample surfaces',
  },
  wasteSampling: {
    workDays:
      'The number of days Waste Sampling teams spent entering the waste area, sampling the waste, and exiting the waste area, including time associated with entry preparation, decontamination line, and post-entry rest periods',
    onSiteDays:
      'The number of work days plus any additional days needed for setup and teardown associated with Waste Sampling',
    elementCost:
      'Total cost associated with Waste Sampling, including the cost of equipment, supplies, PPE, labor, and sample analysis',
    'Ppe Units - Level A': 'The number of Level A PPE units needed for Waste Sampling',
    'Ppe Units - Level B': 'The number of Level B PPE units needed for Waste Sampling',
    'Ppe Units - Level C': 'The number of Level C PPE units needed for Waste Sampling',
    'Ppe Units - Level D': 'The number of Level D PPE units needed for Waste Sampling',
    aqueousWasteSamples:
      'The number of aqueous waste samples needed to sample all liquid waste produced during decontamination',
    solidWasteSamples:
      'The number of solid waste samples needed to sample all solid waste produced during decontamination',
  },
  incidentCommand: {
    onSiteDays:
      'The number of days Incident Command teams are present onsite based on the total event duration plus any additional days needed for setup and teardown associated with Incident Command',
    elementCost: 'Total cost associated with Incident Command, including the cost of equipment, supplies, and labor',
  },
  general: {
    totalCost:
      'The sum of Characterization Sampling Element Cost, Source Reduction Element Cost, Decontamination Element Cost, Verification Sampling Element Cost, Waste Sampling Element Cost, and Incident Command Element Cost',
    areaContaminated: 'The total area contaminated for the scenario (indoor, outdoor, or underground)',
    decontaminationTreatments:
      'The total number of decontamination treatments needed to reduce contamination on all surfaces to a threshold of zero',
    solidWasteProduced:
      'The total mass of solid waste produced during decontamination for the scenario (indoor, outdoor, or underground)',
    aqueousWasteProduced:
      'The total volume of liquid waste produced during decontamination for the scenario (indoor, outdoor, or underground)',
  },
  travel: {
    characterizationSamplingTravelCost:
      'The cost of per diem, airfare, and rental cars for Characterization Sampling teams for all days they are onsite plus any days they are traveling to and from the site area',
    sourceReductionTravelCost:
      'The cost of per diem, airfare, and rental cars for Source Reduction teams for all days they are onsite plus any days they are traveling to and from the site area',
    decontaminationTravelCost:
      'The cost of per diem, airfare, and rental cars for Decontamination teams for all days they are onsite plus any days they are traveling to and from the site area',
    verificationSamplingTravelCost:
      'The cost of per diem, airfare, and rental cars for Verification Sampling teams for all days they are onsite plus any days they are traveling to and from the site area',
    wasteSamplingTravelCost:
      'The cost of per diem, airfare, and rental cars for Waste Sampling teams for all days they are onsite plus any days they are traveling to and from the site area',
    incidentCommandTravelCost:
      'The cost of per diem, airfare, and rental cars for Incident Command teams for all days they are onsite plus any days they are traveling to and from the site area',
  },
  event: {
    totalTravelCost:
      'The sum of Characterization Sampling Travel Cost, Source Reduction Travel Cost, Decontamination Travel Cost, Verification Sampling Travel Cost, Waste Sampling Travel Cost, and Incident Command Travel Cost',
    totalEventCost: 'The total cost of the remediation event, summing the total cost and the total travel cost',
    totalEventDuration: 'The total duration of the remediation event',
    totalContaminationArea: 'The total area contaminated in the entire event (indoor, outdoor, and underground)',
    totalSolidWasteProducted:
      'The total mass of solid waste produced during decontamination for the entire event (indoor, outdoor, and underground)',
    totalAqueousWasteProduced:
      'The total volume of liquid waste produced during decontamination for the entire event (indoor, outdoor, and underground)',
  },
};

export default resultDefinitions;
