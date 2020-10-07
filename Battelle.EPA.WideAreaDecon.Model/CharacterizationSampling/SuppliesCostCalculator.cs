using System;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _costPerVacuum;
        private readonly double _costPerWipe;
        private readonly double _hepaRentalCostPerDay;
        private readonly double _hepaSocksPerHourPerTeam;
        private readonly double _numberTeams;
        private readonly double _surfaceAreaPerHepaSock;
        private readonly double _surfaceAreaPerWipe;
        private readonly double _surfaceAreaToBeHepa;
        private readonly double _surfaceAreaToBeWiped;
        private readonly double _wipesPerHourPerTeam;

        public SuppliesCostCalculator(
            double numberTeams,
            double surfaceAreaPerWipe,
            double surfaceAreaPerHepaSock,
            double wipesPerHourPerTeam,
            double hepaSocksPerHourPerTeam,
            double costPerWipe,
            double costPerVacuum,
            double hepaRentalCostPerDay,
            double surfaceAreaToBeWiped,
            double surfaceAreaToBeHepa)
        {
            _numberTeams = numberTeams;
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepaSock = surfaceAreaPerHepaSock;
            _wipesPerHourPerTeam = wipesPerHourPerTeam;
            _hepaSocksPerHourPerTeam = hepaSocksPerHourPerTeam;
            _costPerWipe = costPerWipe;
            _costPerVacuum = costPerVacuum;
            _hepaRentalCostPerDay = hepaRentalCostPerDay;
            _surfaceAreaToBeWiped = surfaceAreaToBeWiped;
            _surfaceAreaToBeHepa = surfaceAreaToBeHepa;
        }

        public double CalculateSuppliesCost()
        {
            return _surfaceAreaToBeWiped / _surfaceAreaPerWipe * _costPerWipe +
                _surfaceAreaToBeHepa / _surfaceAreaPerHepaSock * _costPerVacuum + _surfaceAreaToBeHepa /
                _surfaceAreaPerHepaSock / (_hepaSocksPerHourPerTeam * _numberTeams * 8) * _hepaRentalCostPerDay;
        }

        public double CalculateWorkDays()
        {
            return Math.Abs(_surfaceAreaToBeWiped / _surfaceAreaPerWipe / (_wipesPerHourPerTeam * _numberTeams) / 8) +
                Math.Abs(_surfaceAreaToBeHepa / _surfaceAreaPerHepaSock / (_hepaSocksPerHourPerTeam * _numberTeams) /
                    8);
        }
    }
}