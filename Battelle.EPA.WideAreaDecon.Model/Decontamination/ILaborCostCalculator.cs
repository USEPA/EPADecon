namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface ILaborCostCalculator
    { 
        public double CalculateLaborCost(double PersonnelRoundTripDays);
        public double CalculateLaborDays(double PersonnelRoundTripDays);
    }
}