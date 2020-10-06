using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class LaborCostCalculator : ILaborCostCalculator
	{
		private readonly double NumTeams;
		private readonly double[] PersonnelReqPerTeam;
		private readonly double[] PersonnelHourlyRate;
		private readonly double PersonnelOverhead;
		private readonly double[] WorkDaysPerAppMethod;

		public LaborCostCalculator(
			double numTeams, 
			double[] personnelReqPerTeam, 
			double[] personnelHourlyRate, 
			double personnelOverhead, 
			double[] workDaysPerAppMethod)
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

