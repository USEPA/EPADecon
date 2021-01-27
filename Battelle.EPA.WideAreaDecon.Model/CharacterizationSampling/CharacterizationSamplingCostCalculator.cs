using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class CharacterizationSamplingCostCalculator : ICharacterizationSamplingCalculatorFactory
    {
        private LaborCostCalculator Calculator_labor { get; set; }
        private SuppliesCostCalculator Calculator_supplies { get; set; }
        private EntrancesExitsCostCalculator Calculator_entEx { get; set; }
        private AnalysisQuantityCostCalculator Calculator_analysis { get; set; }

        public double CalculateCost(double _numberTeams, double _fractionSampledWipe, double _fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> _areaContaminated, double personnelRoundTripDays,
             Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(_numberTeams, _fractionSampledWipe, _fractionSampledHepa, _areaContaminated);
            var laborCosts = Calculator_labor.CalculateLaborCost(_numberTeams, personnelRoundTripDays, _fractionSampledWipe, _fractionSampledHepa, _areaContaminated);
            var entExCosts = Calculator_entEx.CalculateEntrancesExitsCost(_numberTeams, ppePerLevelPerTeam, _fractionSampledWipe, _fractionSampledHepa, _areaContaminated);
            var analysisCosts = Calculator_analysis.CalculateAnalysisQuantityCost(_fractionSampledWipe, _fractionSampledHepa, _areaContaminated);
            return (  suppliesCosts + laborCosts + entExCosts + analysisCosts);
        }

        public CharacterizationSamplingCostCalculator GetCalculator()
        {
            
            throw new System.NotImplementedException();
        }
    }
}