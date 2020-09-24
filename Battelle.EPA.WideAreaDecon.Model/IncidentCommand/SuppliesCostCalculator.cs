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

		public double CalculateSuppliesCost(double PersonnelRoundTripDays)
        {
			Battelle.EPA.WideAreaDecon.Model.IncidentCommand.LaborCostCalculator laborCostCalculator = new Battelle.EPA.WideAreaDecon.Model.IncidentCommand.LaborCostCalculator();
			double OnSiteDays = laborCostCalculator.CalculateOnSiteDays(PersonnelRoundTripDays);

			return OnSiteDays * (EquipmentRentalCostPerDay * SuppliesCostPerDay);

		}
	}

}