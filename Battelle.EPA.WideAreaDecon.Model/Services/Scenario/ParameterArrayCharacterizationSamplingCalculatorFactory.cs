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
        public ElementLagCalculator Calculator_elementLag { get; set; }

        public ParameterArrayCharacterizationSamplingCalculatorFactory(
            CharacterizationSamplingParameters csParameters, 
            CostParameters costParameters)
        {
            Calculator_supplies = new SuppliesCostCalculator(
                csParameters.SurfaceAreaPerWipe,
                csParameters.SurfaceAreaPerHepa,
                csParameters.HepaSocksPerHrPerTeam,
                costParameters.WipeCost,
                costParameters.HepaCost,
                costParameters.VacuumRentalCostPerDay
            );

            Calculator_laborDays = new LaborDaysCalculator(
                csParameters.SurfaceAreaPerWipe,
                csParameters.SurfaceAreaPerHepa,
                csParameters.WipesPerHrPerTeam,
                csParameters.HepaSocksPerHrPerTeam
            );

            Calculator_workdays = new WorkDaysCalculator(
                csParameters.EntryDuration,
                csParameters.EntryPrepTime,
                csParameters.DeconLineTime,
                csParameters.PostEntryRest
            );

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                csParameters.PersonnelOverheadDays
            );

            Calculator_elementLag = new ElementLagCalculator(
                csParameters.SurfaceAreaPerWipe,
                csParameters.SurfaceAreaPerHepa,
                csParameters.LabUptimesHours,
                csParameters.SamplePackageTime,
                csParameters.SampleShippingTime,
                csParameters.LabThroughput
            );

            Calculator_labor = new LaborCostCalculator(
                csParameters.PersonnelReqPerTeam,
                costParameters.HourlyRate
            );

            Calculator_analysis = new AnalysisQuantityCostCalculator(
                csParameters.SurfaceAreaPerWipe,
                csParameters.SurfaceAreaPerHepa,
                costParameters.WipeAnalysisCost,
                costParameters.HepaAnalysisCost
            );

            Calculator_entEx = new EntrancesExitsCostCalculator(
                csParameters.PersonnelReqPerTeam,
                csParameters.RespiratorsPerPerson,
                costParameters.RespiratorCost,
                costParameters.PpeCost,
                csParameters.EntryDuration,
                costParameters.EntryPrepCost,
                costParameters.DeconLineCost
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
                Calculator_elementLag = Calculator_elementLag
            };
        }
    }
}
