using System;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class SuppliesCostCalculator
    {
        private readonly double NumTeams;
        private readonly double SAPerWipe;
        private readonly double SAPerHEPASock;
        private readonly double WipesPerHrPerTeam;
        private readonly double HEPASocksPerHrPerTeam;
        private readonly double CostPerWipe;
        private readonly double CostPerVacuum;
        private readonly double HEPARentalCostPerDay;
        private readonly double SAToBeWiped;
        private readonly double SAToBeHEPA;

        public SuppliesCostCalculator()
        {

        }

        public SuppliesCostCalculator(double numTeams, double saPerWipe, double saPerHEPASock, double wipesPerHrPerTeam, double hepaSocksPerHrPerTeam,
            double costPerWipe, double costPerVacuum, double hepaRentalCostPerDay, double saToBeWiped, double saToBeHEPA)
        {
            NumTeams = numTeams;
            SAPerWipe = saPerWipe;
            SAPerHEPASock = saPerHEPASock;
            WipesPerHrPerTeam = wipesPerHrPerTeam;
            HEPASocksPerHrPerTeam = hepaSocksPerHrPerTeam;
            CostPerWipe = costPerWipe;
            CostPerVacuum = costPerVacuum;
            HEPARentalCostPerDay = hepaRentalCostPerDay;
            SAToBeWiped = saToBeWiped;
            SAToBeHEPA = saToBeHEPA;

        }

        public double CalculateSuppliesCost()
        {
            return ((SAToBeWiped / SAPerWipe) * CostPerWipe) + ((SAToBeHEPA / SAPerHEPASock) * CostPerVacuum) + (((SAToBeHEPA / SAPerHEPASock) / (HEPASocksPerHrPerTeam * NumTeams * 8)) * HEPARentalCostPerDay);
        }

        public double CalculateWorkDays()
        {
            return (Math.Abs(((SAToBeWiped / SAPerWipe) / (WipesPerHrPerTeam * NumTeams)) / 8) + Math.Abs(((SAToBeHEPA / SAPerHEPASock) / (HEPASocksPerHrPerTeam * NumTeams)) / 8));

        }
    }
}
