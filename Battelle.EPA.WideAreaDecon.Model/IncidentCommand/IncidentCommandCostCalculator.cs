﻿using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public class IncidentCommandCostCalculator : IIncidentCommandCalculatorFactory
    {
        public LaborCostCalculator Calculator_labor { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public CharacterizationSampling.LaborCostCalculator Calculator_laborCs { get; set; }
        public CharacterizationSampling.PhaseLagCalculator Calculator_phaseLag { get; set; }
        public CharacterizationSampling.SuppliesCostCalculator Calculator_suppliesCs { get; set; }
        public SourceReduction.LaborCostCalculator Calculator_laborSr { get; set; }
        public SourceReduction.WorkDaysCalculator Calculator_workDaysSr { get; set; }
        public Decontamination.LaborCostCalculator Calculator_laborDc { get; set; }
        public Decontamination.EfficacyCalculator Calculator_efficacy { get; set; }
        public Decontamination.WorkDaysCalculator Calculator_workDaysDc { get; set; }

        public double CalculateTime(double workDaysCS, double workDaysSR, double workDaysDC, double _numberTeams,
            double surfaceAreaToBeSourceReduced, double personnelRoundTripDays, double _fractionSampledWipe, double _fractionSampledHepa,
            Dictionary<SurfaceType, ContaminationInformation> _areaContaminated, int numberLabs, double sampleTimeTransmitted)
        {
            return Calculator_labor.CalculateOnSiteDays(workDaysCS, workDaysSR, workDaysDC, _numberTeams,
                surfaceAreaToBeSourceReduced, personnelRoundTripDays, _fractionSampledWipe, _fractionSampledHepa, _areaContaminated,
                numberLabs, sampleTimeTransmitted);
        }

        public double CalculateCost(double onSiteDays)
        {
            var laborCosts = Calculator_labor.CalculateLaborCost(onSiteDays);
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(onSiteDays);
            return (suppliesCosts + laborCosts);
        }

        public IncidentCommandCostCalculator GetCalculator()
        {
            return new IncidentCommandCostCalculator();
        }
    }
}
