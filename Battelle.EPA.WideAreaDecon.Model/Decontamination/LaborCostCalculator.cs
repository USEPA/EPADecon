using System;
namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{

	public class LaborCostCalculator
	{
		private double NumTeams { get; set; }
		private double[] PersonnelRequired { get; set; }
		private double[] PersonnelHourlyRate { get; set; }
		private double PersonnelOverhead { get; set; }
		private double[] WorkDaysPerAppMethod { get; set; }

		public LaborCostCalculator()
        {

        }

		public LaborCostCalculator(double numTeams, double[] personnelRequired, double[] personnelHourlyRate, double personnelOverhead, double[] workDaysPerAppMethod)
		{
			NumTeams = numTeams;
			PersonnelRequired = personnelRequired;
			PersonnelHourlyRate = personnelHourlyRate;
			PersonnelOverhead = personnelOverhead;
			WorkDaysPerAppMethod = workDaysPerAppMethod;
		}

		public double CalculateLaborCost(double PersonnelRoundTripDays)
		{
			var PersonnelHoursCost = PersonnelRequired.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			double TotalWorkDays = WorkDaysPerAppMethod.Sum();

			return (TotalWorkDays + PersonnelOverhead + PersonnelRoundTripDays) * 8 * NumTeams * PersonnelHoursCost;
		}

		public double CalculateLaborDays(double PersonnelRoundTripDays)
		{
			double TotalWorkDays = WorkDaysPerAppMethod.Sum();

			return (TotalWorkDays + PersonnelOverhead + PersonnelRoundTripDays);

		}

	}
}

