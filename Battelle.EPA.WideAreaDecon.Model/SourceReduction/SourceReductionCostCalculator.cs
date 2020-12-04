using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class SourceReductionCostCalculator : ISourceReductionCalculatorFactory
    {
        private LaborCostCalculator Calculator_labor { get; set; }
        private WorkDaysCalculator Calculator_workDays { get; set; }
        private EntranceExitCostCalculator Calculator_entEx { get; set; }
        private EntExitLaborCostCalculator Calculator_entExLabor { get; set; }

        public double CalculateCost(double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced, double costPerTonRemoved, Dictionary<PpeLevel, double> ppeEachLevelPerTeam,
             Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var suppliesCosts = Calculator_workDays.CalculateWorkDays(_numberTeams, saToBeSourceReduced);
            var laborCosts = Calculator_labor.CalculateLaborCost(_numberTeams, personnelRoundTripDays, saToBeSourceReduced, costPerTonRemoved);
            var entExCosts = Calculator_entEx.CalculateEntranceExitCost(_numberTeams, saToBeSourceReduced, ppePerLevelPerTeam);
            var analysisCosts = Calculator_entExLabor.CalculateEntExitLaborCost(_numberTeams, saToBeSourceReduced);
            return (suppliesCosts + laborCosts + entExCosts + analysisCosts);
        }

        public SourceReductionCostCalculator GetCalculator()
        {
            throw new System.NotImplementedException();
        }
    }
}