using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class TravelCostCalculator
    {
        private readonly double costPerRentalCar;
        private readonly double costPerRoundtripTicket;
        private readonly double perDiemCost;
        private readonly double personnelPerRentalCar;

        public TravelCostCalculator(double _costPerRentalCar,
            double _costPerRoundtripTicket,
            double _perDiemCost,
            double _personnelPerRentalCar)
        {
            costPerRentalCar = _costPerRentalCar;
            costPerRoundtripTicket = _costPerRoundtripTicket;
            perDiemCost = _perDiemCost;
            personnelPerRentalCar = _personnelPerRentalCar;
        }

        public double CalculateTravelCost(double roundtripDays, double numTeams, Dictionary<PersonnelLevel, double> personnelPerTeam, double onsiteDays)
        {
            var totalPersonnel = personnelPerTeam.Sum(x => x.Value) * numTeams;

            var totalPerDiem = totalPersonnel * onsiteDays * perDiemCost;

            var totalRentalCarCost = (totalPersonnel / personnelPerRentalCar) * roundtripDays * costPerRentalCar;

            var airfareCost = totalPersonnel * costPerRoundtripTicket;

            return totalPerDiem + totalRentalCarCost + airfareCost;
        }
    }
}

