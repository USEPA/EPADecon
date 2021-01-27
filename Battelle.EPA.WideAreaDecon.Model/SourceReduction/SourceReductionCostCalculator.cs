using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class SourceReductionCostCalculator : ISourceReductionCalculatorFactory
    {
        private LaborCostCalculator Calculator_labor { get; set; }
        private EntranceExitCostCalculator Calculator_entEx { get; set; }
        private EntExitLaborCostCalculator Calculator_entExLabor { get; set; }

        public double CalculateCost(double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced, double costPerTonRemoved, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var laborCosts = Calculator_labor.CalculateLaborCost(_numberTeams, personnelRoundTripDays, saToBeSourceReduced, costPerTonRemoved);
            var entExCosts = Calculator_entEx.CalculateEntranceExitCost(_numberTeams, saToBeSourceReduced, ppePerLevelPerTeam);
            var analysisCosts = Calculator_entExLabor.CalculateEntExitLaborCost(_numberTeams, saToBeSourceReduced);
            return (laborCosts + entExCosts + analysisCosts);
        }

        public SourceReductionCostCalculator GetCalculator()
        {
            throw new System.NotImplementedException();
        }
    }
}