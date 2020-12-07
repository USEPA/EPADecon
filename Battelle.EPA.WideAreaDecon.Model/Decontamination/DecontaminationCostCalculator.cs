﻿using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class DecontaminationCostCalculator : IDecontaminationCalculatorFactory
    {
        private LaborCostCalculator Calculator_labor { get; set; }
        private SuppliesCostCalculator Calculator_supplies { get; set; }
        private EntranceExitCostCalculator Calculator_entEx { get; set; }

        public double CalculateCost(double _numberTeams, double personnelRoundTripDays, Dictionary<PpeLevel, double> ppeEachLevelPerTeam)
        {
            var suppliesCosts = Calculator_supplies.FoggingSuppliesCostCalculator(_numberTeams);
            var laborCosts = Calculator_labor.CalculateLaborCost(_numberTeams, personnelRoundTripDays);
            var entExCosts = Calculator_entEx.CalculateEntranceExitCost(_numberTeams, ppeEachLevelPerTeam);
            return (suppliesCosts + laborCosts + entExCosts);
        }

        public DecontaminationCostCalculator GetCalculator()
        {
            throw new System.NotImplementedException();
        }
    }
}