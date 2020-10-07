using System;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _costPerVacuum;
        private readonly double _costPerWipe;
        private readonly double _hepaRentalCostPerDay;
        private readonly double _hepaSocksPerHourPerTeam;
        private readonly double _surfaceAreaPerHepaSock;
        private readonly double _surfaceAreaPerWipe;
        private readonly double _wipesPerHourPerTeam;

        public SuppliesCostCalculator(
            double surfaceAreaPerWipe,
            double surfaceAreaPerHepaSock,
            double wipesPerHourPerTeam,
            double hepaSocksPerHourPerTeam,
            double costPerWipe,
            double costPerVacuum,
            double hepaRentalCostPerDay)
        {
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepaSock = surfaceAreaPerHepaSock;
            _wipesPerHourPerTeam = wipesPerHourPerTeam;
            _hepaSocksPerHourPerTeam = hepaSocksPerHourPerTeam;
            _costPerWipe = costPerWipe;
            _costPerVacuum = costPerVacuum;
            _hepaRentalCostPerDay = hepaRentalCostPerDay;
        }

        public double CalculateSuppliesCost(double _numberTeams, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            return _surfaceAreaToBeWiped / _surfaceAreaPerWipe * _costPerWipe +
                _surfaceAreaToBeHepa / _surfaceAreaPerHepaSock * _costPerVacuum + _surfaceAreaToBeHepa /
                _surfaceAreaPerHepaSock / (_hepaSocksPerHourPerTeam * _numberTeams * GlobalConsants.HoursPerWorkDay) * _hepaRentalCostPerDay;
        }

        public double CalculateWorkDays(double _numberTeams, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            return Math.Abs(_surfaceAreaToBeWiped / _surfaceAreaPerWipe / (_wipesPerHourPerTeam * _numberTeams) / GlobalConsants.HoursPerWorkDay) +
                Math.Abs(_surfaceAreaToBeHepa / _surfaceAreaPerHepaSock / (_hepaSocksPerHourPerTeam * _numberTeams) /
                    GlobalConsants.HoursPerWorkDay);
        }
    }
}