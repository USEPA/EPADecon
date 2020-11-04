using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public interface ILaborCostCalculator
    {
        public double CalculateOnSiteDays(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted);
        public double CalculateLaborCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted);
    }
}