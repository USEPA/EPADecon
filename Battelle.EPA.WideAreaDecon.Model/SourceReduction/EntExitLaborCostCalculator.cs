using System;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;

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

		WorkDaysCalculator WorkDaysCalculator = new WorkDaysCalculator();
		
		public EntExitLaborCostCalculator(double teamsRequired, double[] personnelPerTeam, double[] personnelHourlyRate, double numEntriesPerTeamPerDay, double massPerSA, double hoursPerEntryPerTeam, double hoursPerExitPerTeam)
		{
			TeamsRequired = teamsRequired;
			PersonnelPerTeam = personnelPerTeam;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			MassPerSA = massPerSA;
			HoursPerEntryPerTeam = hoursPerEntryPerTeam;
			HoursPerExitPerTeam = hoursPerExitPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
		}

		public double CalculateEntExitLaborCost(double SAToBeSourceReduced)
		{

			var PersonnelHoursCost = PersonnelPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			double WorkDays = WorkDaysCalculator.CalculateWorkDays(double SAToBeSourceReduced);

			return ((WorkDays * NumEntriesPerTeamPerDay * TeamsRequired * HoursPerEntryPerTeam) + (WorkDays * NumEntriesPerTeamPerDay * TeamsRequired * HoursPerExitPerTeam)) * (PersonnelHoursCost);
		}
	}
}
