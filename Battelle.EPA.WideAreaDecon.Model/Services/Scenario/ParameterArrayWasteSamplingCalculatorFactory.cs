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
        public ElementLagCalculator Calculator_elementLag { get; set; }

        public ParameterArrayWasteSamplingCalculatorFactory(
            WasteSamplingParameters wsParameters,
            CostParameters costParameters)
        {
            Calculator_entEx = new EntrancesExitsCostCalculator(
                wsParameters.PersonnelReqPerTeam,
                wsParameters.RespiratorsPerPerson,
                costParameters.RespiratorCost,
                costParameters.PpeCost,
                wsParameters.EntryDuration,
                costParameters.EntryPrepCost,
                costParameters.DeconLineCost);

            Calculator_supplies = new SuppliesCostCalculator(
                wsParameters.MassPerWasteSample,
                wsParameters.VolumePerWasteSample,
                wsParameters.SolidWastePerSurfaceArea,
                wsParameters.LiquidWastePerSurfaceArea,
                costParameters.WasteSampleCost
            );

            Calculator_laborDays = new LaborDaysCalculator(
                wsParameters.SolidWastePerSurfaceArea,
                wsParameters.LiquidWastePerSurfaceArea,
                wsParameters.MassPerWasteSample,
                wsParameters.VolumePerWasteSample,
                wsParameters.WasteSamplesPerHrPerTeam
            );

            Calculator_workdays = new WorkDaysCalculator(
                wsParameters.EntryDuration,
                wsParameters.EntryPrepTime,
                wsParameters.DeconLineTime, 
                wsParameters.PostEntryRest);

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                wsParameters.PersonnelOverheadDays
            );

            Calculator_elementLag = new ElementLagCalculator(
                wsParameters.SolidWastePerSurfaceArea,
                wsParameters.LiquidWastePerSurfaceArea,
                wsParameters.MassPerWasteSample,
                wsParameters.VolumePerWasteSample,
                wsParameters.LabUptimesHours,
                wsParameters.SamplePackageTime,
                wsParameters.SampleShippingTime,
                wsParameters.LabThroughput
            );

            Calculator_labor = new LaborCostCalculator(
                wsParameters.PersonnelReqPerTeam,
                costParameters.HourlyRate
            );

            Calculator_analysis = new AnalysisQuantityCostCalculator(
                wsParameters.MassPerWasteSample,
                wsParameters.VolumePerWasteSample,
                costParameters.SolidWasteSampleAnalysisCost,
                costParameters.LiquidWasteSampleAnalysisCost,
                wsParameters.SolidWastePerSurfaceArea,
                wsParameters.LiquidWastePerSurfaceArea
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
                Calculator_elementLag= Calculator_elementLag
            };
        }
    }
}
