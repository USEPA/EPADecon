using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Other
{
	public class TransportationCostCalculator
	{
		private readonly double PersonnelPerRentalCar;
		private readonly double RentalCarCostPerDay;
		private readonly double PerDiemCostPerDay;

		public TransportationCostCalculator(
			double personnelPerRentalCar, 
			double rentalCarCostPerDay, 
			double perDiemCostPerDay)
        {
			PersonnelPerRentalCar = personnelPerRentalCar;
			RentalCarCostPerDay = rentalCarCostPerDay;
			PerDiemCostPerDay = perDiemCostPerDay;
        }

		public double CalculateTransportationCost(double[] PersonnelAvailableByType, double PersonnelRoundTripDays, double CostPerRoundTripTicket, double TotalOnSiteDays)
        {
			double TotalPersonnel = PersonnelAvailableByType.Sum();

			return (((TotalPersonnel / PersonnelPerRentalCar) * RentalCarCostPerDay * PersonnelRoundTripDays) + (TotalPersonnel * CostPerRoundTripTicket) + (TotalOnSiteDays * PerDiemCostPerDay));
        }
	}

}

