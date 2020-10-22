namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double _numberTeams, double personnelRoundTripDays, double _surfaceAreaToBeHepa
            , double _surfaceAreaToBeWiped, double numberLabs, double sampleTimeTransmitted);

        public double CalculateWorkDays(double _numberTeams, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped);
    }
}