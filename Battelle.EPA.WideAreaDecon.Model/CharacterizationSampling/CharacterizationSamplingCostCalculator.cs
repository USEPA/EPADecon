using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class CharacterizationSamplingCostCalculator : ICharacterizationSamplingCalculatorFactory
    {
        private LaborCostCalculator Calculator_labor { get; set; }
        private SuppliesCostCalculator Calculator_supplies { get; set; }
        private EntrancesExitsCostCalculator Calculator_entEx { get; set; }
        private AnalysisQuantityCostCalculator Calculator_analysis { get; set; }

        public double CalculateCost(double _numberTeams, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped, double personnelRoundTripDays,
             Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(_numberTeams, _surfaceAreaToBeHepa, _surfaceAreaToBeWiped);
            var laborCosts = Calculator_labor.CalculateLaborCost(_numberTeams, personnelRoundTripDays, _surfaceAreaToBeHepa, _surfaceAreaToBeWiped);
            var entExCosts = Calculator_entEx.CalculateEntrancesExitsCost(_numberTeams, ppePerLevelPerTeam, _surfaceAreaToBeHepa, _surfaceAreaToBeWiped);
            var analysisCosts = Calculator_analysis.CalculateAnalysisQuantityCost(_surfaceAreaToBeHepa, _surfaceAreaToBeWiped);
            return (  suppliesCosts + laborCosts + entExCosts + analysisCosts);
        }

        public CharacterizationSamplingCostCalculator GetCalculator()
        {
            
            throw new System.NotImplementedException();
        }
    }
}