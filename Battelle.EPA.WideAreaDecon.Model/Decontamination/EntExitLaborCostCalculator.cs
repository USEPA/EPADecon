using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class EntExitLaborCostCalculator
	{
		private double NumTeams { get; set; }
		private double[] PersonnelReqPerTeam { get; set; }
		private double NumEntriesPerTeamPerDay { get; set; }
		private double TonsPerSqMt { get; set; }
		private double HoursPerEntryPerTeam { get; set; }
		private double HoursPerExitPerTeam { get; set; }
		private double[] PersonnelHourlyRate { get; set; }
		private double[] WorkDaysPerAppMethod { get; set; }

		public EntExitLaborCostCalculator()
        {

        }

		public EntExitLaborCostCalculator(double teamsRequired, double[] personnelReqPerTeam, double numEntriesPerTeamPerDay, double tonsPerSqMt, double hoursPerEntryPerTeam, double hoursPerExitPerTeam, double[] personnelHourlyRate, double[] workDaysPerAppMethod)
		{
			NumTeams = teamsRequired;
			PersonnelReqPerTeam = personnelReqPerTeam;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			TonsPerSqMt = tonsPerSqMt;
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
