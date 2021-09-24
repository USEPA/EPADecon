using System;
using System.Linq;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Cost
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _costPerVacuum;
        private readonly double _costPerWipe;
        private readonly double _hepaRentalCostPerDay;
        private readonly double _hepaSocksPerHourPerTeam;
        private readonly double _surfaceAreaPerHepaSock;
        private readonly double _surfaceAreaPerWipe;

        public SuppliesCostCalculator(
            double surfaceAreaPerWipe,
            double surfaceAreaPerHepaSock,
            double hepaSocksPerHourPerTeam,
            double costPerWipe,
            double costPerVacuum,
            double hepaRentalCostPerDay)
        {
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepaSock = surfaceAreaPerHepaSock;
            _hepaSocksPerHourPerTeam = hepaSocksPerHourPerTeam;
            _costPerWipe = costPerWipe;
            _costPerVacuum = costPerVacuum;
            _hepaRentalCostPerDay = hepaRentalCostPerDay;
        }

        public double CalculateSuppliesCost(double numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var totalArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            var surfaceAreaToBeWiped = fractionSampledWipe * totalArea;
            var surfaceAreaToBeHepa = fractionSampledHepa * totalArea;

            var wipesUsed = surfaceAreaToBeWiped / _surfaceAreaPerWipe;
            var hepaSocksUsed = surfaceAreaToBeHepa / _surfaceAreaPerHepaSock;

            var totalWipeCost = wipesUsed * _costPerWipe;
            var totalHepaCost = hepaSocksUsed * _costPerVacuum;

            var hepaRentalDays = hepaSocksUsed / (_hepaSocksPerHourPerTeam * numberTeams * GlobalConstants.HoursPerWorkDay);

            var hepaRentalCost = hepaRentalDays * _hepaRentalCostPerDay;

            return totalWipeCost + totalHepaCost + hepaRentalCost;
        }
    }
}