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
            var workDays = Calculator_supplies.CalculateWorkDays(_numberTeams, _fractionSampledWipe, _fractionSampledHepa, _areaContaminated);
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(_numberTeams, _fractionSampledWipe, _fractionSampledHepa, _areaContaminated);
            var laborCosts = Calculator_labor.CalculateLaborCost(workDays, _numberTeams, personnelRoundTripDays, _fractionSampledWipe, _fractionSampledHepa, _areaContaminated);
            var entExCosts = Calculator_entEx.CalculateEntrancesExitsCost(workDays, _numberTeams, ppePerLevelPerTeam, _fractionSampledWipe, _fractionSampledHepa, _areaContaminated);
            var analysisCosts = Calculator_analysis.CalculateAnalysisQuantityCost(_fractionSampledWipe, _fractionSampledHepa, _areaContaminated);
            return (suppliesCosts + laborCosts + entExCosts + analysisCosts);
        }

        public CharacterizationSamplingCostCalculator GetCalculator()
        {
            return new CharacterizationSamplingCostCalculator()
            {
                //Calculator_labor = csCalculator.GetCalculator(),
                //Calculator_supplies = 

            };
        }
    }
}