namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface IPhaseLagCalculator
    {
        public double CalculatePhaseLagTime(double numberLabs, double sampleTimeTransmitted, double surfaceAreaToBeWiped, double surfaceAreaToBeHepa);
    }
}