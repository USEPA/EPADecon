namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped);

        public double CalculateEntExitLaborCost(double _numberTeams, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped);

        public double CalculateLaborDays(double _numberTeams, double personnelRoundTripDays, double _surfaceAreaToBeHepa, 
            double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted);
    }
}