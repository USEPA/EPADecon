namespace Battelle.EPA.WideAreaDecon.Model
{
    public class ExampleCostCalculator
    {
        private double SomeParameter1 { get; set; }
        private double SomeParameter2 { get; set; }

        public ExampleCostCalculator(double someParameter1, double someParameter2)
        {
            SomeParameter1 = someParameter1;
            SomeParameter2 = someParameter2;
        }

        public double CalculateCost(double someOtherInput1)
        {
            return (SomeParameter1 + SomeParameter2) * someOtherInput1;
        }
    }
}