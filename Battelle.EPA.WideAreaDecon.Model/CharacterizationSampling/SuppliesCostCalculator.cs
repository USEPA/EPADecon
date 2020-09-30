using System;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{ 
    public class SuppliesCostCalculator
    {
        private double NumTeams { get; set; }
        private double SqFtPerWipe { get; set; }
        private double SqFtPerHEPASock { get; set; }
        private double WipesPerHrPerTeam { get; set; }
        private double HEPASocksPerHrPerTeam { get; set; }
        private double CostPerWipe { get; set; }
        private double CostPerVacuum { get; set; }
        private double HEPARentalCostPerDay { get; set; }
        private double SqFtToBeWiped { get; set; }
        private double SqFtToBeHEPA { get; set; }
        public readonly double WorkDays;

        public SuppliesCostCalculator()
        {

        }

        public SuppliesCostCalculator(double numTeams, double sqFtPerWipe, double sqFtPerHEPASock, double wipesPerHrPerTeam, double hepaSocksPerHrPerTeam,
            double costPerWipe, double costPerVacuum, double hepaRentalCostPerDay, double sqFtToBeWiped, double sqFtToBeHEPA)
        {
            NumTeams = numTeams;
            SqFtPerWipe = sqFtPerWipe;
            SqFtPerHEPASock = sqFtPerHEPASock;
            WipesPerHrPerTeam = wipesPerHrPerTeam;
            HEPASocksPerHrPerTeam = hepaSocksPerHrPerTeam;
            CostPerWipe = costPerWipe;
            CostPerVacuum = costPerVacuum;
            HEPARentalCostPerDay = hepaRentalCostPerDay;
            SqFtToBeWiped = sqFtToBeWiped;
            SqFtToBeHEPA = sqFtToBeHEPA;
        }

        public double CalculateSuppliesCost()
        {
            return ((SqFtToBeWiped / SqFtPerWipe) * CostPerWipe) + ((SqFtToBeHEPA / SqFtPerHEPASock) * CostPerVacuum) + (((SqFtToBeHEPA / SqFtPerHEPASock) / (HEPASocksPerHrPerTeam * NumTeams * 8)) * HEPARentalCostPerDay);
        }

        
        public double CalculateWorkDays()
        {
            WorkDays = (Math.Abs(((SqFtToBeWiped / SqFtPerWipe) / (WipesPerHrPerTeam * NumTeams)) / 8) + Math.Abs(((SqFtToBeHEPA / SqFtPerHEPASock) / (HEPASocksPerHrPerTeam * NumTeams)) / 8));
        }
    }
}
