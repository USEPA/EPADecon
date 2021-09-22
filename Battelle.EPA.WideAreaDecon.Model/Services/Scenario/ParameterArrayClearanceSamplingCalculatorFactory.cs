using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling;
using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Cost;
using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Scenario
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayClearanceSamplingCalculatorFactory : IClearanceSamplingCalculatorFactory
    {
        public LaborCostCalculator Calculator_labor { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public LaborDaysCalculator Calculator_laborDays { get; set; }
        public WorkDaysCalculator Calculator_workdays { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public EntrancesExitsCostCalculator Calculator_entEx { get; set; }
        public AnalysisQuantityCostCalculator Calculator_analysis { get; set; }
        public ElementLagCalculator Calculator_elementLag { get; set; }

        public ParameterArrayClearanceSamplingCalculatorFactory(
            ClearanceSamplingParameters csParameters,
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
                csParameters.entryDuration,
                csParameters.entryPrepTime,
                csParameters.deconLineTime,
                csParameters.postEntryRest
            );

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                csParameters.personnelOverheadDays
            );

            Calculator_elementLag = new ElementLagCalculator(
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
                csParameters.respiratorsPerPerson,
                costParameters.respiratorCost,
                costParameters.ppeCost,
                csParameters.entryDuration,
                costParameters.entryPrepCost,
                costParameters.deconLineCost
            );
        }

        public ClearanceSamplingCostCalculator GetCalculator()
        {
            return new ClearanceSamplingCostCalculator
            {
                Calculator_labor = Calculator_labor,
                Calculator_supplies = Calculator_supplies,
                Calculator_laborDays = Calculator_laborDays,
                Calculator_workdays = Calculator_workdays,
                Calculator_onsiteDays = Calculator_onsiteDays,
                Calculator_entEx = Calculator_entEx,
                Calculator_analysis = Calculator_analysis,
                Calculator_elementLag = Calculator_elementLag
            };
        }
    }
}
