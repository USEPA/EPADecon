namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public interface IEntranceExitCostCalculator
    {
        public double CalculateEntranceExitCost(double SAToBeSourceReduced, double[] PPE_EachLevelPerTeam);
    }
}