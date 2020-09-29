using System;
namespace Battelle.EPA.WideAreaDecon.Model.Other
{
	public class TransportationCostCalculator
	{
		private double PersonnelPerRentalCar { get; set; }
		private double RentalCarCostPerDay { get; set; }
		private double PerDiemCostPerDay { get; set; }

		public TransportationCostCalculator()
        {

        }

		public TransportationCostCalculator(double personnelPerRentalCar, double rentalCarCostPerDay, double perDiemCostPerDay)
        {
			PersonnelPerRentalCar = personnelPerRentalCar;
			RentalCarCostPerDay = rentalCarCostPerDay;
			PerDiemCostPerDay = perDiemCostPerDay;
        }

		public double CalculateTransportationCost(double[] PersonnelAvailableByType, double CostPerRoundTripTicket, double TotalOnSiteDays)
        {
			double TotalPersonnel = 0;
			for(int i = 0; i < PersonnelAvailableByType.Length; i ++)
            {
				TotalPersonnel += PersonnelAvailableByType[i];
            }

			return (((TotalPersonnel / PersonnelPerRentalCar) * RentalCarCostPerDay) + (TotalPersonnel * CostPerRoundTripTicket) + (TotalOnSiteDays * PerDiemCostPerDay));
        }
	}

}

