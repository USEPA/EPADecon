using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
	public class SuppliesCostCalculator : ISuppliesCostCalculator
	{
		private readonly double EquipmentRentalCostPerDay;
		private readonly double SuppliesCostPerDay;

		private readonly ILaborCostCalculator LaborCostCalculator;

		public SuppliesCostCalculator(
			double equipmentRentalCostPerDay, 
			double suppliesCostPerDay,
			ILaborCostCalculator laborCostCalculator)
		{
			EquipmentRentalCostPerDay = equipmentRentalCostPerDay;
			SuppliesCostPerDay = suppliesCostPerDay;
			LaborCostCalculator = laborCostCalculator;
        }

		public double CalculateSuppliesCost(double SAToBeSourceReduced, double PersonnelRoundTripDays)
        {
			double OnSiteDays = LaborCostCalculator.CalculateOnSiteDays(SAToBeSourceReduced, PersonnelRoundTripDays);

			return OnSiteDays * (EquipmentRentalCostPerDay + SuppliesCostPerDay);

		}
	}

}