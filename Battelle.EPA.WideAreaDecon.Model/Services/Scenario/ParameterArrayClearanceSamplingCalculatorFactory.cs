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
            ClearanceSamplingParameters vsParameters,
            CostParameters costParameters)
        {
            Calculator_supplies = new SuppliesCostCalculator(
                vsParameters.SurfaceAreaPerWipe,
                vsParameters.SurfaceAreaPerHepa,
                vsParameters.HepaSocksPerHrPerTeam,
                costParameters.WipeCost,
                costParameters.HepaCost,
                costParameters.VacuumRentalCostPerDay
            );

            Calculator_laborDays = new LaborDaysCalculator(
                vsParameters.SurfaceAreaPerWipe,
                vsParameters.SurfaceAreaPerHepa,
                vsParameters.WipesPerHrPerTeam,
                vsParameters.HepaSocksPerHrPerTeam
            );

            Calculator_workdays = new WorkDaysCalculator(
                vsParameters.EntryDuration,
                vsParameters.EntryPrepTime,
                vsParameters.DeconLineTime,
                vsParameters.PostEntryRest
            );

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                vsParameters.PersonnelOverheadDays
            );

            Calculator_elementLag = new ElementLagCalculator(
                vsParameters.SurfaceAreaPerWipe,
                vsParameters.SurfaceAreaPerHepa,
                vsParameters.LabUptimesHours,
                vsParameters.SamplePackageTime,
                vsParameters.SampleShippingTime,
                vsParameters.LabThroughput
            );

            Calculator_labor = new LaborCostCalculator(
                vsParameters.PersonnelReqPerTeam,
                costParameters.HourlyRate
            );

            Calculator_analysis = new AnalysisQuantityCostCalculator(
                vsParameters.SurfaceAreaPerWipe,
                vsParameters.SurfaceAreaPerHepa,
                costParameters.WipeAnalysisCost,
                costParameters.HepaAnalysisCost
            );

            Calculator_entEx = new EntrancesExitsCostCalculator(
                vsParameters.PersonnelReqPerTeam,
                vsParameters.RespiratorsPerPerson,
                costParameters.RespiratorCost,
                costParameters.PpeCost,
                vsParameters.EntryDuration,
                costParameters.EntryPrepCost,
                costParameters.DeconLineCost
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
