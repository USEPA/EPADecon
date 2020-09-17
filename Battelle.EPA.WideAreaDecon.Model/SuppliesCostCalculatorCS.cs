using System;
using System.Collections.Specialized;
using System.Runtime.Remoting.Messaging;

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
        private double HEPASocksPerHourPerTeam { get; set; }

        public SuppliesCostCalculatorCS(double numTeams, double sqFtPerWipe, double sqFtPerHEPASock, double costPerWipe, double costPerVacuum, double hepaRentalCostPerDay, double hepaSocksPerHourPerTeam)
        {
            NumTeams = numTeams;
            SqFtPerWipe = sqFtPerWipe;
            SqFtPerHEPASock = sqFtPerHEPASock;
            CostPerWipe = costPerWipe;
            CostPerVacuum = costPerVacuum;
            HEPARentalCostPerDay = hepaRentalCostPerDay;
            HEPASocksPerHourPerTeam = hepaSocksPerHourPerTeam;
        }

    public double CalculateSuppliesCost(double SqFtToBeWiped, double SqFtToBeHEPA)
    {
        return ((SqFtToBeWiped / SqFtPerWipe) * CostPerwipe) + ((SqFtToBeHEPA / SqFtPerHEPASock) * CostPerVacuum) + (((SqFtToBeHEPA / SqFtPerHEPASock) / (HEPASocksPerHr * NumTeams * 8)) * HEPARentalCostPerDay);
    }
    }
}
