using Battelle.EPA.WideAreaDecon.Model.WasteSampling;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Scenario
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayWasteSamplingCalculatorFactory : IWasteSamplingCalculatorFactory
    {
        public LaborCostCalculator Calculator_labor { get; set; }
        public EntrancesExitsCostCalculator Calculator_entEx { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public LaborDaysCalculator Calculator_laborDays { get; set; }
        public WorkDaysCalculator Calculator_workdays { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public AnalysisQuantityCostCalculator Calculator_analysis { get; set; }
        public PhaseLagCalculator Calculator_phaseLag { get; set; }

        public ParameterArrayWasteSamplingCalculatorFactory(
            WasteSamplingParameters wsParameters,
            CostParameters costParameters)
        {
            Calculator_entEx = new EntrancesExitsCostCalculator(
                wsParameters.personnelReqPerTeam,
                wsParameters.respiratorsPerPerson,
                costParameters.respiratorCost,
                costParameters.ppeCost,
                wsParameters.entryDuration,
                costParameters.entryPrepCost,
                costParameters.deconLineCost);

            Calculator_supplies = new SuppliesCostCalculator(
                wsParameters.massPerWasteSample,
                wsParameters.volumePerWasteSample,
                wsParameters.solidWastePerSurfaceArea,
                wsParameters.liquidWastePerSurfaceArea,
                costParameters.wasteSampleCost
            );

            Calculator_laborDays = new LaborDaysCalculator(
                wsParameters.solidWastePerSurfaceArea,
                wsParameters.liquidWastePerSurfaceArea,
                wsParameters.massPerWasteSample,
                wsParameters.volumePerWasteSample,
                wsParameters.wasteSamplesPerHrPerTeam
            );

            Calculator_workdays = new WorkDaysCalculator();

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                wsParameters.personnelOverheadDays
            );

            Calculator_phaseLag = new PhaseLagCalculator(
                wsParameters.solidWastePerSurfaceArea,
                wsParameters.liquidWastePerSurfaceArea,
                wsParameters.massPerWasteSample,
                wsParameters.volumePerWasteSample,
                wsParameters.labUptimesHours,
                wsParameters.samplePackageTime,
                wsParameters.labDistanceFromSite,
                wsParameters.labThroughput
            );

            Calculator_labor = new LaborCostCalculator(
                wsParameters.personnelReqPerTeam,
                costParameters.hourlyRate
            );

            Calculator_analysis = new AnalysisQuantityCostCalculator(
                wsParameters.massPerWasteSample,
                wsParameters.volumePerWasteSample,
                costParameters.wasteSampleAnalysisCost,
                wsParameters.solidWastePerSurfaceArea,
                wsParameters.liquidWastePerSurfaceArea
            );
        }

        public WasteSamplingCostCalculator GetCalculator()
        {
            return new WasteSamplingCostCalculator
            {
                Calculator_entEx = Calculator_entEx,
                Calculator_labor = Calculator_labor,
                Calculator_supplies = Calculator_supplies,
                Calculator_laborDays = Calculator_laborDays,
                Calculator_workdays = Calculator_workdays,
                Calculator_onsiteDays = Calculator_onsiteDays,
                Calculator_analysis = Calculator_analysis,
                Calculator_phaseLag = Calculator_phaseLag
            };
        }
    }
}
