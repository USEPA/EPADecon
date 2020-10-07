namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface ILaborCostCalculator
    { 
        public double CalculateLaborCost(double personnelRoundTripDays);
        public double CalculateLaborDays(double personnelRoundTripDays);
    }
}