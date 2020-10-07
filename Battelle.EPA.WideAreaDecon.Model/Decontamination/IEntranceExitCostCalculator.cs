namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface IEntranceExitCostCalculator
    {
        public double CalculateEntranceExitCost(double[] ppePerLevelPerTeam);
    }
}