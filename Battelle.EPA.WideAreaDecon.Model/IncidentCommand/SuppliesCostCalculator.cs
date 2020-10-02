using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
	public class SuppliesCostCalculator
	{
		private double EquipmentRentalCostPerDay { get; set; }
		private double SuppliesCostPerDay { get; set; }

		LaborCostCalculator laborCostCalculator = new LaborCostCalculator();

		public SuppliesCostCalculator(double equipmentRentalCostPerDay, double suppliesCostPerDay)
		{
			EquipmentRentalCostPerDay = equipmentRentalCostPerDay;
			SuppliesCostPerDay = suppliesCostPerDay;
        }

		public double CalculateSuppliesCost(double SAToBeSourceReduced, double PersonnelRoundTripDays)
        {
			double OnSiteDays = laborCostCalculator.CalculateOnSiteDays(SAToBeSourceReduced, PersonnelRoundTripDays);

			return OnSiteDays * (EquipmentRentalCostPerDay * SuppliesCostPerDay);

		}
	}

}