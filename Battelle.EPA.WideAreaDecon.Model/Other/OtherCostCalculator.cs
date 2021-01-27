using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.Other
{
    public class OtherCostCalculator : IOtherCalculatorFactory
    {
        private TransportationCostCalculator Calculator { get; set; }

        public double CalculateCost(Dictionary<PersonnelLevel, double> personnelAvailableByType, double personnelRoundTripDays,
            double costPerRoundTripTicket, double totalOnSiteDays)
        {
            return (Calculator.CalculateTransportationCost( personnelAvailableByType,personnelRoundTripDays,costPerRoundTripTicket,totalOnSiteDays));
        }

        public OtherCostCalculator GetCalculator()
        {
            return new OtherCostCalculator();
        }
    }
}