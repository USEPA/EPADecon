using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction.Cost;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Scenario
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArraySourceReductionCalculatorFactory : ISourceReductionCalculatorFactory
    {
        public LaborCostCalculator Calculator_labor { get; set; }
        public LaborDaysCalculator Calculator_laborDays { get; set; }
        public WorkDaysCalculator Calculator_workDays { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public EntranceExitCostCalculator Calculator_entEx { get; set; }

        public ParameterArraySourceReductionCalculatorFactory(
            SourceReductionParameters srParameters,
            CostParameters costParameters)
        {
            Calculator_laborDays = new LaborDaysCalculator(
                srParameters.massRemovedPerHourPerTeam,
                srParameters.massPerSurfaceArea
            );

            Calculator_workDays = new WorkDaysCalculator(
                srParameters.numEntriesPerDay,
                srParameters.entryPrepTime,
                srParameters.deconLineTime
            );

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                srParameters.personnelOverheadDays
            );

            Calculator_labor = new LaborCostCalculator(
                srParameters.personnelReqPerTeam,
                costParameters.hourlyRate,
                srParameters.massPerSurfaceArea
            );

            Calculator_entEx = new EntranceExitCostCalculator(
                srParameters.personnelReqPerTeam,
                srParameters.numEntriesPerDay,
                srParameters.respiratorsPerPerson,
                costParameters.respiratorCost,
                costParameters.ppeCost,
                costParameters.entryPrepCost,
                costParameters.deconLineCost
            );
        }
        public SourceReductionCostCalculator GetCalculator()
        {
            return new SourceReductionCostCalculator
            {
                Calculator_laborDays = Calculator_laborDays,
                Calculator_workDays = Calculator_workDays,
                Calculator_onsiteDays = Calculator_onsiteDays,
                Calculator_labor = Calculator_labor,
                Calculator_entEx = Calculator_entEx
            };
        }
    }
}
