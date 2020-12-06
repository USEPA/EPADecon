﻿using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public class IncidentCommandCostCalculator : IIncidentCommandCalculatorFactory
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

        public double CalculateCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays, 
            double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted)
        {
            var laborCosts = Calculator_labor.CalculateLaborCost(_numberTeams, surfaceAreaToBeSourceReduced, personnelRoundTripDays, 
                _surfaceAreaToBeHepa, _surfaceAreaToBeWiped, numberLabs, sampleTimeTransmitted);
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(_numberTeams, surfaceAreaToBeSourceReduced, 
                personnelRoundTripDays, _surfaceAreaToBeHepa, _surfaceAreaToBeWiped, numberLabs, sampleTimeTransmitted);
            return (suppliesCosts + laborCosts);
        }

        public IncidentCommandCostCalculator GetCalculator()
        {
            throw new System.NotImplementedException();
        }
    }
}
