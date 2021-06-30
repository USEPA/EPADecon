using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Cost;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Scenario
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayCharacterizationSamplingCalculatorFactory : ICharacterizationSamplingCalculatorFactory
    {
        public LaborCostCalculator Calculator_labor { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public LaborDaysCalculator Calculator_laborDays { get; set; }
        public WorkDaysCalculator Calculator_workdays { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public EntrancesExitsCostCalculator Calculator_entEx { get; set; }
        public AnalysisQuantityCostCalculator Calculator_analysis { get; set; }
        public PhaseLagCalculator Calculator_phaseLag { get; set; }

        public ParameterArrayCharacterizationSamplingCalculatorFactory(
            CharacterizationSamplingParameters csParameters, 
            CostParameters costParameters)
        {
            Calculator_supplies = new SuppliesCostCalculator(
                csParameters.surfaceAreaPerWipe,
                csParameters.surfaceAreaPerHepa,
                csParameters.hepaSocksPerHrPerTeam,
                costParameters.wipeCost,
                costParameters.hepaCost,
                costParameters.vacuumRentalCostPerDay
            );

            Calculator_laborDays = new LaborDaysCalculator(
                csParameters.surfaceAreaPerWipe,
                csParameters.surfaceAreaPerHepa,
                csParameters.wipesPerHrPerTeam,
                csParameters.hepaSocksPerHrPerTeam
            );

            Calculator_workdays = new WorkDaysCalculator(
                csParameters.entriesPerTeam,
                csParameters.entryPrepTime,
                csParameters.deconLineTime
            );

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                csParameters.personnelOverheadDays
            );

            Calculator_phaseLag = new PhaseLagCalculator(
                csParameters.surfaceAreaPerWipe,
                csParameters.surfaceAreaPerHepa,
                csParameters.labUptimesHours,
                csParameters.samplePackageTime,
                csParameters.labDistanceFromSite,
                csParameters.labThroughput
            );

            Calculator_labor = new LaborCostCalculator(
                csParameters.personnelReqPerTeam,
                costParameters.hourlyRate
            );

            Calculator_analysis = new AnalysisQuantityCostCalculator(
                csParameters.surfaceAreaPerWipe,
                csParameters.surfaceAreaPerHepa,
                costParameters.wipeAnalysisCost,
                costParameters.hepaAnalysisCost
            );

            Calculator_entEx = new EntrancesExitsCostCalculator(
                csParameters.personnelReqPerTeam,
                csParameters.entriesPerTeam,
                csParameters.respiratorsPerPerson,
                costParameters.respiratorCost,
                costParameters.ppeCost,
                costParameters.entryPrepCost,
                costParameters.deconLineCost
            );
        }

        public CharacterizationSamplingCostCalculator GetCalculator()
        {
            return new CharacterizationSamplingCostCalculator
            {
                Calculator_labor = Calculator_labor,
                Calculator_supplies = Calculator_supplies,
                Calculator_laborDays = Calculator_laborDays,
                Calculator_workdays = Calculator_workdays,
                Calculator_onsiteDays = Calculator_onsiteDays,
                Calculator_entEx = Calculator_entEx,
                Calculator_analysis = Calculator_analysis,
                Calculator_phaseLag = Calculator_phaseLag
            };
        }
    }
}
