namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface IEntrancesExitsCostCalculator
    {
        public double CalculateEntrancesExitsCost(double[] PPE_PerLevelPerTeam);
    }
}