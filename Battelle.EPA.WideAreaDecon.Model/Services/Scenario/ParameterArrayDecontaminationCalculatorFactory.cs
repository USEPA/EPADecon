using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost;
using Battelle.EPA.WideAreaDecon.Model.Decontamination.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Scenario
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayDecontaminationCalculatorFactory : IDecontaminationCalculatorFactory
    {
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public LaborCostCalculator Calculator_labor { get; set; }
        public LaborDaysCalculator Calculator_laborDays { get; set; }
        public WorkDaysCalculator Calculator_workDays { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public EntranceExitCostCalculator Calculator_entEx { get; set; }
        public EfficacyCalculator Calculator_efficacy { get; set; }

        public ParameterArrayDecontaminationCalculatorFactory(
            DecontaminationParameters dcParameters, 
            CostParameters costParameters)
        {
            Calculator_efficacy = new EfficacyCalculator(
                dcParameters.EfficacyParameters
            );

            Calculator_laborDays = new LaborDaysCalculator(
                dcParameters.ApplicationMethods,
                dcParameters.InitialSporeLoading,
                dcParameters.TreatmentDaysPerAm,
                Calculator_efficacy
            );

            Calculator_workDays = new WorkDaysCalculator();

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                dcParameters.PersonnelOverheadDays    
            );

            Calculator_supplies = new SuppliesCostCalculator(
                costParameters.DeconAgentCostPerVolume,
                costParameters.DeconMaterialsCost,
                dcParameters.FumigationAgentVolume,
                dcParameters.AgentVolume,
                dcParameters.ApplicationMethods
            );

            Calculator_labor = new LaborCostCalculator(
                dcParameters.PersonnelReqPerTeam,
                costParameters.HourlyRate
            );

            Calculator_entEx = new EntranceExitCostCalculator(
                dcParameters.PersonnelReqPerTeam,
                dcParameters.RespiratorsPerPerson,
                costParameters.RespiratorCost,
                costParameters.PpeCost,
                dcParameters.EntryDuration,
                dcParameters.EntryPrepTime,
                dcParameters.DeconLineTime,
                dcParameters.PostEntryRest,
                costParameters.EntryPrepCost,
                costParameters.DeconLineCost
            );
        }
        public DecontaminationCostCalculator GetCalculator()
        {
            return new DecontaminationCostCalculator
            {
                Calculator_laborDays = Calculator_laborDays,
                Calculator_workDays = Calculator_workDays,
                Calculator_onsiteDays = Calculator_onsiteDays,
                Calculator_supplies = Calculator_supplies,
                Calculator_labor = Calculator_labor,
                Calculator_entEx = Calculator_entEx
            };
        }
    }
}
