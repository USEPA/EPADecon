using System;

namespace Battelle.EPA.WideAreaDecon.Model
{ 
    public class SuppliesCostCalculatorCS
    {
        private double NumTeams { get; set; }
        private double SqFtPerWipe { get; set; }
        private double SqFtPerHEPASock { get; set; }
        private double CostPerWipe { get; set; }
        private double CostPerVacuum { get; set; }
        private double HEPARentalCostPerDay { get; set; }
        private double HEPASocksPerHrPerTeam { get; set; }
        private double SqFtToBeWiped { get; set; }
        private double SqFtToBeHEPA { get; set; }

        public SuppliesCostCalculatorCS(double numTeams, double sqFtPerWipe, double sqFtPerHEPASock, double costPerWipe, double costPerVacuum, double hepaRentalCostPerDay, double hepaSocksPerHrPerTeam)
        {
            NumTeams = numTeams;
            SqFtPerWipe = sqFtPerWipe;
            SqFtPerHEPASock = sqFtPerHEPASock;
            CostPerWipe = costPerWipe;
            CostPerVacuum = costPerVacuum;
            HEPARentalCostPerDay = hepaRentalCostPerDay;
            HEPASocksPerHrPerTeam = hepaSocksPerHrPerTeam;
        }

    public double CalculateSuppliesCost()
    {
        return ((SqFtToBeWiped / SqFtPerWipe) * CostPerwipe) + ((SqFtToBeHEPA / SqFtPerHEPASock) * CostPerVacuum) + (((SqFtToBeHEPA / SqFtPerHEPASock) / (HEPASocksPerHr * NumTeams * 8)) * HEPARentalCostPerDay);
    }

    public double CalculateWorkDays()
    {
        return (Math.abs(((SqFtToBeWiped / SqFtPerWipe) / (WipesPerHr * NumTeams)) / 8) + Math.Abs(((SqFtToBeHEPA / SqFtPerHEPASock) / (HEPASocksPerHrPerTeam * NumTeams)) / 8));
    }
    }
}
