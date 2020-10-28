namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface IPhaseLagCalculator
    {
        public double CalculatePhaseLagTime(int numberLabs, double sampleTimeTransmitted, double surfaceAreaToBeWiped, double surfaceAreaToBeHepa);
    }
}