using System;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _numTeams;
        private readonly double _saPerWipe;
        private readonly double _saPerHepaSock;
        private readonly double _wipesPerHrPerTeam;
        private readonly double _hepaSocksPerHrPerTeam;
        private readonly double _costPerWipe;
        private readonly double _costPerVacuum;
        private readonly double _hepaRentalCostPerDay;
        private readonly double _saToBeWiped;
        private readonly double _saToBeHepa;

        public SuppliesCostCalculator(
            double numTeams, 
            double saPerWipe, 
            double saPerHepaSock, 
            double wipesPerHrPerTeam, 
            double hepaSocksPerHrPerTeam,
            double costPerWipe, 
            double costPerVacuum, 
            double hepaRentalCostPerDay, 
            double saToBeWiped, 
            double saToBeHepa)
        {
            _numTeams = numTeams;
            _saPerWipe = saPerWipe;
            _saPerHepaSock = saPerHepaSock;
            _wipesPerHrPerTeam = wipesPerHrPerTeam;
            _hepaSocksPerHrPerTeam = hepaSocksPerHrPerTeam;
            _costPerWipe = costPerWipe;
            _costPerVacuum = costPerVacuum;
            _hepaRentalCostPerDay = hepaRentalCostPerDay;
            _saToBeWiped = saToBeWiped;
            _saToBeHepa = saToBeHepa;

        }

        public double CalculateSuppliesCost()
        {
            return ((_saToBeWiped / _saPerWipe) * _costPerWipe) + ((_saToBeHepa / _saPerHepaSock) * _costPerVacuum) + (((_saToBeHepa / _saPerHepaSock) / (_hepaSocksPerHrPerTeam * _numTeams * 8)) * _hepaRentalCostPerDay);
        }

        public double CalculateWorkDays()
        {
            return (Math.Abs(((_saToBeWiped / _saPerWipe) / (_wipesPerHrPerTeam * _numTeams)) / 8) + Math.Abs(((_saToBeHepa / _saPerHepaSock) / (_hepaSocksPerHrPerTeam * _numTeams)) / 8));

        }
    }
}
