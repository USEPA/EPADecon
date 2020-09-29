using System;
namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
	public class SuppliesCostCalculator
	{
		private double EquipmentRentalCostPerDay { get; set; }
		private double SuppliesCostPerDay { get; set; }

		public SuppliesCostCalculator(double equipmentRentalCostPerDay, double suppliesCostPerDay)
		{
			EquipmentRentalCostPerDay = equipmentRentalCostPerDay;
			SuppliesCostPerDay = suppliesCostPerDay;
        }

		public double CalculateSuppliesCost(double SqFtToBeSourceReduced, double PersonnelRoundTripDays)
        {
			LaborCostCalculator laborCostCalculator = new LaborCostCalculator();
			double OnSiteDays = laborCostCalculator.CalculateOnSiteDays(SqFtToBeSourceReduced, PersonnelRoundTripDays);

			return OnSiteDays * (EquipmentRentalCostPerDay * SuppliesCostPerDay);

		}
	}

}