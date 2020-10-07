namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double roomVolume, double[] percentOfRoomBySurface, bool fogging);
    }
}