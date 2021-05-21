using System.Collections.Generic;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.Other
{
    public class OtherCostCalculator : IOtherCalculatorFactory
    {
        public TransportationCostCalculator Calculator { get; set; }

        public Tuple<double, double> CalculateCost(Dictionary<PersonnelLevel, double> personnelAvailableByType, double personnelRoundTripDays,
            double costPerRoundTripTicket, double totalOnSiteDays)
        {
            var otherCosts = new Tuple<double, double>
            (
                Calculator.CalculatePerDiem(personnelAvailableByType, totalOnSiteDays),
                Calculator.CalculateTransportationCost(personnelAvailableByType, personnelRoundTripDays, costPerRoundTripTicket)
            );
            
            return otherCosts;
        }

        public OtherCostCalculator GetCalculator()
        {
            return new OtherCostCalculator();
        }
    }
}