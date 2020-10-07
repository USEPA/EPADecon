namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public interface IWorkDaysCalculator
    {
        public double CalculateWorkDays(double saToBeSourceReduced);
    }
}