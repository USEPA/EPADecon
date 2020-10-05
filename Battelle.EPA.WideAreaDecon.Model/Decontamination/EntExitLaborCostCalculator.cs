using System;
using System.Linq;
using namespace Battelle.EPA.WideAreaDecon.Model.Decontamination;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class EntExitLaborCostCalculator : IEntExitLaborCostCalculator
	{
		private readonly double TeamsRequired;
		private readonly double[] PersonnelPerTeam;
		private readonly double NumEntriesPerTeamPerDay;
		private readonly double MassPerSA;
		private readonly double HoursPerEntryPerTeam;
		private readonly double HoursPerExitPerTeam;
		private readonly double[] PersonnelHourlyRate;
		private readonly double[] WorkDaysPerAppMethod;


		public EntExitLaborCostCalculator(double teamsRequired, double[] personnelReqPerTeam, double numEntriesPerTeamPerDay, double massPerSA, double hoursPerEntryPerTeam, double hoursPerExitPerTeam, double[] personnelHourlyRate, double[] workDaysPerAppMethod)
		{
			NumTeams = teamsRequired;
			PersonnelReqPerTeam = personnelReqPerTeam;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			MassPerSA = massPerSA;
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
