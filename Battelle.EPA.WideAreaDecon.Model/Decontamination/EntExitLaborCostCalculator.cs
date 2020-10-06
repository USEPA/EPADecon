using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class EntExitLaborCostCalculator : IEntExitLaborCostCalculator
	{
		private readonly double NumTeams;
		private readonly double[] PersonnelReqPerTeam;
		private readonly double NumEntriesPerTeamPerDay;
		private readonly double HoursPerEntryPerTeam;
		private readonly double HoursPerExitPerTeam;
		private readonly double[] PersonnelHourlyRate;
		private readonly double[] WorkDaysPerAppMethod;


		public EntExitLaborCostCalculator(
			double numTeams, 
			double[] personnelReqPerTeam, 
			double numEntriesPerTeamPerDay, 
			double hoursPerEntryPerTeam, 
			double hoursPerExitPerTeam, 
			double[] personnelHourlyRate, 
			double[] workDaysPerAppMethod)
		{
			NumTeams = numTeams;
			PersonnelReqPerTeam = personnelReqPerTeam;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			HoursPerEntryPerTeam = hoursPerEntryPerTeam;
			HoursPerExitPerTeam = hoursPerExitPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
			WorkDaysPerAppMethod = workDaysPerAppMethod;
		}

		public double CalculateEntExitLaborCost()
		{
			var PersonnelHoursCost = PersonnelReqPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			double TotalWorkDays = WorkDaysPerAppMethod.Sum();

			return ((TotalWorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerEntryPerTeam) + (TotalWorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerExitPerTeam)) * (PersonnelHoursCost);
		}
	}
}
