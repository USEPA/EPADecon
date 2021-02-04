﻿using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class SourceReductionCostCalculator : ISourceReductionCalculatorFactory
    {
        private WorkDaysCalculator Calculator_workDays { get; set; }
        private LaborCostCalculator Calculator_labor { get; set; }
        private EntranceExitCostCalculator Calculator_entEx { get; set; }
        private EntExitLaborCostCalculator Calculator_entExLabor { get; set; }

        public double CalculateCost(double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced, double costPerTonRemoved, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var workDays = Calculator_workDays.CalculateWorkDays(_numberTeams, saToBeSourceReduced);
            var laborCosts = Calculator_labor.CalculateLaborCost(workDays, _numberTeams, personnelRoundTripDays, saToBeSourceReduced, costPerTonRemoved);
            var entExCosts = Calculator_entEx.CalculateEntranceExitCost(workDays, _numberTeams, saToBeSourceReduced, ppePerLevelPerTeam);
            var analysisCosts = Calculator_entExLabor.CalculateEntExitLaborCost(workDays, _numberTeams, saToBeSourceReduced);
            return (laborCosts + entExCosts + analysisCosts);
        }

        public SourceReductionCostCalculator GetCalculator()
        {
            return new SourceReductionCostCalculator();
        }
    }
}