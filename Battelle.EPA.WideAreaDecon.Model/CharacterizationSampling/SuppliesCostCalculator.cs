using System;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{ 
    public class SuppliesCostCalculator
    {
        private readonly double NumTeams;
        private readonly double SqMtPerWipe;
        private readonly double SqMtPerHEPASock;
        private readonly double WipesPerHrPerTeam;
        private readonly double HEPASocksPerHrPerTeam;
        private readonly double CostPerWipe;
        private readonly double CostPerVacuum;
        private readonly double HEPARentalCostPerDay;
        private readonly double SqMtToBeWiped;
        private readonly double SqMtToBeHEPA;
        public readonly double WorkDays;

        public SuppliesCostCalculator()
        {

        }

        public SuppliesCostCalculator(double numTeams, double sqMtPerWipe, double sqFtPerHEPASock, double wipesPerHrPerTeam, double hepaSocksPerHrPerTeam,
            double costPerWipe, double costPerVacuum, double hepaRentalCostPerDay, double sqMtToBeWiped, double sqMtToBeHEPA)
        {
            NumTeams = numTeams;
            SqMtPerWipe = sqMtPerWipe;
            SqMtPerHEPASock = sqFtPerHEPASock;
            WipesPerHrPerTeam = wipesPerHrPerTeam;
            HEPASocksPerHrPerTeam = hepaSocksPerHrPerTeam;
            CostPerWipe = costPerWipe;
            CostPerVacuum = costPerVacuum;
            HEPARentalCostPerDay = hepaRentalCostPerDay;
            SqMtToBeWiped = sqMtToBeWiped;
            SqMtToBeHEPA = sqMtToBeHEPA;
            
        }

        public double CalculateSuppliesCost()
        {
            return ((SqMtToBeWiped / SqMtPerWipe) * CostPerWipe) + ((SqMtToBeHEPA / SqMtPerHEPASock) * CostPerVacuum) + (((SqMtToBeHEPA / SqMtPerHEPASock) / (HEPASocksPerHrPerTeam * NumTeams * 8)) * HEPARentalCostPerDay);
        }

        
        public void CalculateWorkDays()
        {
            WorkDays = (Math.Abs(((SqMtToBeWiped / SqMtPerWipe) / (WipesPerHrPerTeam * NumTeams)) / 8) + Math.Abs(((SqMtToBeHEPA / SqMtPerHEPASock) / (HEPASocksPerHrPerTeam * NumTeams)) / 8));
        }
    }
}
