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
			double PersonnelHoursCost = 0;
			for (int i = 0; i < PersonnelRequired.Length; i++)
			{
				PersonnelHoursCost = PersonnelHoursCost + (PersonnelRequired[i] * PersonnelHourlyRate[i]);
			}

			double TotalWorkDays = 0;
			for (int j = 0; j < WorkDaysPerAppMethod.Length; j++)
			{
				TotalWorkDays = TotalWorkDays + WorkDaysPerAppMethod[j];
			}

			return (TotalWorkDays + PersonnelOverhead + PersonnelRoundTripDays) * 8 * NumTeams * PersonnelHoursCost;
		}

		public double CalculateLaborDays(double PersonnelRoundTripDays)
		{
			double TotalWorkDays = 0;
			for (int j = 0; j < WorkDaysPerAppMethod.Length; j++)
			{
				TotalWorkDays = TotalWorkDays + WorkDaysPerAppMethod[j];
			}

			return (TotalWorkDays + PersonnelOverhead + PersonnelRoundTripDays);

		}

	}
}

