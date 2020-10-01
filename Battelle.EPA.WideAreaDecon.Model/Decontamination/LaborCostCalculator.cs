using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{

	public class LaborCostCalculator
	{
		private double NumTeams { get; set; }
		private double[] PersonnelReqPerTeam { get; set; }
		private double[] PersonnelHourlyRate { get; set; }
		private double PersonnelOverhead { get; set; }
		private double[] WorkDaysPerAppMethod { get; set; }

		public LaborCostCalculator()
        {

        }

		public LaborCostCalculator(double numTeams, double[] personnelReqPerTeam, double[] personnelHourlyRate, double personnelOverhead, double[] workDaysPerAppMethod)
		{
			NumTeams = numTeams;
			PersonnelReqPerTeam = personnelReqPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
			PersonnelOverhead = personnelOverhead;
			WorkDaysPerAppMethod = workDaysPerAppMethod;
		}

		public double CalculateLaborCost(double PersonnelRoundTripDays)
		{
			var PersonnelHoursCost = PersonnelReqPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

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

