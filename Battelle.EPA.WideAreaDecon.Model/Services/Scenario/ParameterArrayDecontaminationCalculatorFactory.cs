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
                dcParameters.efficacyParameters
            );

            Calculator_laborDays = new LaborDaysCalculator(
                dcParameters.applicationMethods,
                dcParameters.initialSporeLoading,
                dcParameters.treatmentDaysPerAm,
                Calculator_efficacy
            );

            Calculator_workDays = new WorkDaysCalculator();

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                dcParameters.personnelOverhead    
            );

            Calculator_supplies = new SuppliesCostCalculator(
                costParameters.deconAgentCostPerVolume,
                costParameters.deconMaterialsCost,
                dcParameters.fumigationAgentVolume,
                dcParameters.agentVolume
            );

            Calculator_labor = new LaborCostCalculator(
                dcParameters.personnelReqPerTeam,
                costParameters.hourlyRate
            );

            Calculator_entEx = new EntranceExitCostCalculator(
                dcParameters.personnelReqPerTeam,
                dcParameters.numEntriesPerTeamPerDay,
                dcParameters.respiratorsPerPerson,
                costParameters.respiratorCost,
                costParameters.ppeCost,
                costParameters.entryPrepCost,
                costParameters.deconLineCost
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
