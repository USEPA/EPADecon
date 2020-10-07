namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public interface IEntExitLaborCostCalculator
    {
        public double CalculateEntExitLaborCost(double _numberTeams, double saToBeSourceReduced);
    }
}