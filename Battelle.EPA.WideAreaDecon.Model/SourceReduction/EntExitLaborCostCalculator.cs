using System;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class EntExitLaborCostCalculator
	{
		private double TeamsRequired { get; set; }
		private double[] PersonnelPerTeam { get; set; }
		private double NumEntriesPerTeamPerDay { get; set; }
		private double TonsPerSqMt { get; set; }
		private double HoursPerEntryPerTeam { get; set; }
		private double HoursPerExitPerTeam { get; set; }
		private double[] PersonnelHourlyRate { get; set; }

		WorkDaysCalculator workDaysCalculator = new WorkDaysCalculator();

		public EntExitLaborCostCalculator()
        {

        }

		public EntExitLaborCostCalculator(double teamsRequired, double[] personnelPerTeam, double[] personnelHourlyRate, double numEntriesPerTeamPerDay, double tonsPerSqMt, double hoursPerEntryPerTeam, double hoursPerExitPerTeam)
		{
			TeamsRequired = teamsRequired;
			PersonnelPerTeam = personnelPerTeam;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			TonsPerSqMt = tonsPerSqMt;
			HoursPerEntryPerTeam = hoursPerEntryPerTeam;
			HoursPerExitPerTeam = hoursPerExitPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
		}

		public double CalculateEntExitLaborCost(double SqMtToBeSourceReduced)
		{

			var PersonnelHoursCost = PersonnelPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			return ((workDaysCalculator.WorkDays * NumEntriesPerTeamPerDay * TeamsRequired * HoursPerEntryPerTeam) + (workDaysCalculator.WorkDays * NumEntriesPerTeamPerDay * TeamsRequired * HoursPerExitPerTeam)) * (PersonnelHoursCost);
		}
	}
}
