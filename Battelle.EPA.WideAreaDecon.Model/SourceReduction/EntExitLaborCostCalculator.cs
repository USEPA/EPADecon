using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
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

		private readonly IWorkDaysCalculator WorkDaysCalculator;
		
		public EntExitLaborCostCalculator(
			double teamsRequired, 
			double[] personnelPerTeam, 
			double[] personnelHourlyRate, 
			double numEntriesPerTeamPerDay, 
			double massPerSA, 
			double hoursPerEntryPerTeam, 
			double hoursPerExitPerTeam,
			IWorkDaysCalculator workDaysCalculator)
		{
			TeamsRequired = teamsRequired;
			PersonnelPerTeam = personnelPerTeam;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			MassPerSA = massPerSA;
			HoursPerEntryPerTeam = hoursPerEntryPerTeam;
			HoursPerExitPerTeam = hoursPerExitPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
			WorkDaysCalculator = workDaysCalculator;
		}

		public double CalculateEntExitLaborCost(double SAToBeSourceReduced)
		{

			var PersonnelHoursCost = PersonnelPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			double WorkDays = WorkDaysCalculator.CalculateWorkDays(SAToBeSourceReduced);

			return ((WorkDays * NumEntriesPerTeamPerDay * TeamsRequired * HoursPerEntryPerTeam) + (WorkDays * NumEntriesPerTeamPerDay * TeamsRequired * HoursPerExitPerTeam)) * (PersonnelHoursCost);
		}
	}
}
