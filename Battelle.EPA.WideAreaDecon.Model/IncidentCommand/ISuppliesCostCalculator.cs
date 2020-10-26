namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public interface ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays, double _surfaceAreaToBeHepa
            , double _surfaceAreaToBeWiped, double numberLabs, double sampleTimeTransmitted);
    }
}