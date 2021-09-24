using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Cost
{
    public class TravelCostCalculator : ITravelCostCalculator
    {
        private readonly double _costPerRentalCar;
        private readonly double _costPerRoundtripTicket;
        private readonly double _perDiemCost;
        private readonly double _personnelPerRentalCar;

        public TravelCostCalculator(double costPerRentalCar,
            double costPerRoundtripTicket,
            double perDiemCost,
            double personnelPerRentalCar)
        {
            _costPerRentalCar = costPerRentalCar;
            _costPerRoundtripTicket = costPerRoundtripTicket;
            _perDiemCost = perDiemCost;
            _personnelPerRentalCar = personnelPerRentalCar;
        }

        public double CalculateTravelCost(double roundtripDays, Dictionary<PersonnelLevel, double> personnelPerTeam, double onsiteDays)
        {
            var totalPersonnel = personnelPerTeam.Sum(x => x.Value);

            var totalPerDiem = totalPersonnel * onsiteDays * _perDiemCost;

            var totalRentalCarCost = (totalPersonnel / _personnelPerRentalCar) * roundtripDays * _costPerRentalCar;

            var airfareCost = totalPersonnel * _costPerRoundtripTicket;

            return totalPerDiem + totalRentalCarCost + airfareCost;
        }
    }
}

