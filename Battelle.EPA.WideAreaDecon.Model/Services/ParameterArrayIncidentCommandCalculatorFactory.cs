using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayIncidentCommandCalculatorFactory : IIncidentCommandCalculatorFactory
    {
        private LaborCostCalculator Calculator_labor { get; set; }
        private SuppliesCostCalculator Calculator_supplies { get; set; }
        private CharacterizationSampling.LaborCostCalculator Calculator_laborCs { get; set; }
        private CharacterizationSampling.PhaseLagCalculator Calculator_phaseLag { get; set; }
        private CharacterizationSampling.SuppliesCostCalculator Calculator_suppliesCs { get; set; }
        private SourceReduction.LaborCostCalculator Calculator_laborSr { get; set; }
        private SourceReduction.WorkDaysCalculator Calculator_workDaysSr { get; set; }
        private Decontamination.LaborCostCalculator Calculator_laborDc { get; set; }
        private Decontamination.EfficacyCalculator Calculator_efficacy { get; set; }
        private Decontamination.WorkDaysCalculator Calculator_workDaysDc { get; set; }

        public ParameterArrayIncidentCommandCalculatorFactory(
            IncidentCommandParameters icParameters,
            CostParameters costParameters,
            ParameterArrayCharacterizationSamplingCalculatorFactory csParameterArray,
            ParameterArraySourceReductionCalculatorFactory srParameterArray,
            ParameterArrayDecontaminationCalculatorFactory dcParameterArray)
        {
            Calculator_labor = new LaborCostCalculator(
                icParameters.personnelReqPerTeam,
                icParameters.personnelOverheadDays,
                costParameters.hourlyRate,
                csParameterArray.Calculator_labor,
                csParameterArray.Calculator_phaseLag,
                srParameterArray.Calculator_labor,
                dcParameterArray.Calculator_labor
            );

            Calculator_supplies = new SuppliesCostCalculator(
                costParameters.icRentalCostPerDay,
                costParameters.icSuppliesCostPerDay
            );
        }

        public IncidentCommandCostCalculator GetCalculator()
        {
            return new IncidentCommandCostCalculator();
        }
    }
}
