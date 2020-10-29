using System.Runtime.Serialization.Formatters;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public interface ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays, double _surfaceAreaToBeHepa
            , double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted);
    }
}