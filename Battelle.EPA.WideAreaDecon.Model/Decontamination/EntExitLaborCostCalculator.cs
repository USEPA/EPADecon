using System;
namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class EntExitLaborCostCalculator
	{
		private double NumTeams { get; set; }
		private double[] PersonnelPerTeam { get; set; }
		private double NumEntriesPerTeamPerDay { get; set; }
		private double TonsPerSqFt { get; set; }
		private double HoursPerEntryPerTeam { get; set; }
		private double HoursPerExitPerTeam { get; set; }
		private double[] PersonnelHourlyRate { get; set; }
		private double[] WorkDaysPerAppMethod { get; set; }

		public EntExitLaborCostCalculator(double teamsRequired, double[] personnelPerTeam, double numEntriesPerTeamPerDay, double tonsPerSqFt, double hoursPerEntryPerTeam, double[] hoursPerExitPerTeam, double[] personnelHourlyRate, double workDaysPerAppMethod)
		{
			NumTeams = teamsRequired;
			PersonnelPerTeam = personnelPerTeam;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			HoursPerEntryPerTeam = hoursPerEntryPerTeam;
			HoursPerExitPerTeam = hoursPerExitPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
			WorkDaysPerAppMethod = workDaysPerAppMethod;
		}

		public double CalculateEntExitLaborCost()
		{
			double PersonnelHoursCost = 0;
			for (int i = 0; i < PersonnelPerTeam.Length; i++)
			{
				PersonnelHoursCost = PersonnelHoursCost + (PersonnelPerTeam[i] * PersonnelHourlyRate[i]);
			}

			double TotalWorkDays;
			for (int j = 0; j < WorkDaysPerAppMethod.Length; j++)
			{
				TotalWorkDays = TotalWorkDays + WorkDaysPerAppMethod[j];
			}

			return ((TotalWorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerEntryPerTeam) + (TotalWorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerExitPerTeam)) * (PersonnelHoursCost);
		}
	}
}
