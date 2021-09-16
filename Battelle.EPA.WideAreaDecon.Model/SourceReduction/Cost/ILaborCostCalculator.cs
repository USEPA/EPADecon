namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction.Cost
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double onsiteDays, double numberTeams, double massToBeSourceReduced, double costPerTonRemoved, double area);
    }
}