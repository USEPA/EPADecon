using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
	public class SuppliesCostCalculator : ISuppliesCostCalculator
	{
		private readonly double EquipmentRentalCostPerDay;
		private readonly double SuppliesCostPerDay;

		private readonly LaborCostCalculator LaborCostCalculator = new LaborCostCalculator();

		public SuppliesCostCalculator(double equipmentRentalCostPerDay, double suppliesCostPerDay)
		{
			EquipmentRentalCostPerDay = equipmentRentalCostPerDay;
			SuppliesCostPerDay = suppliesCostPerDay;
        }

		public double CalculateSuppliesCost(double SAToBeSourceReduced, double PersonnelRoundTripDays)
        {
			double OnSiteDays = LaborCostCalculator.CalculateOnSiteDays(SAToBeSourceReduced, PersonnelRoundTripDays);

			return OnSiteDays * (EquipmentRentalCostPerDay * SuppliesCostPerDay);

		}
	}

}