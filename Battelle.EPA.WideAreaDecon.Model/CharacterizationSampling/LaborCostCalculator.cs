using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
	public class LaborCostCalculator : ILaborCostCalculator
	{
		private readonly double NumTeams;
		private readonly double[] PersonnelReqPerTeam;
		private readonly double PersonnelOverhead;
		private readonly double NumEntriesPerTeamPerDay;
		private readonly double HoursPerEntryPerTeam;
		private readonly double HoursPerExitPerTeam;
		private readonly double[] PersonnelHourlyRate;

		private readonly ISuppliesCostCalculator SuppliesCostCalculator;

		public LaborCostCalculator(
			double numTeams, 
			double[] personnelReqPerTeam, 
			double personnelOverhead, 
			double numEntriesPerTeamPerDay, 
			double hoursPerEntryPerTeam, 
			double hoursPerExitPerTeam, 
			double[] personnelHourlyRate,
			ISuppliesCostCalculator suppliesCostCalculator)
		{
			NumTeams = numTeams;
			PersonnelReqPerTeam = personnelReqPerTeam;
			PersonnelOverhead = personnelOverhead;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			HoursPerEntryPerTeam = hoursPerEntryPerTeam;
			HoursPerExitPerTeam = hoursPerExitPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
			SuppliesCostCalculator = suppliesCostCalculator;

		}

		public double CalculateLaborCost(double PersonnelRoundTripDays)
		{
			var PersonnelHoursCost = PersonnelReqPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			double WorkDays = SuppliesCostCalculator.CalculateWorkDays();

			return ((WorkDays + PersonnelOverhead + PersonnelRoundTripDays) * 8) * NumTeams * (PersonnelHoursCost);

		}

		//return double if Elabor cost is not longer readonly
		public double CalculateEntExitLaborCost()
        {
			var PersonnelHoursCost = PersonnelReqPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			double WorkDays = SuppliesCostCalculator.CalculateWorkDays();

			return ((WorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerEntryPerTeam) + (WorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerExitPerTeam)) * (PersonnelHoursCost);

		}

		public double CalculateLaborDays(double PersonnelRoundTripDays)
        {
			double WorkDays = SuppliesCostCalculator.CalculateWorkDays();

			return WorkDays + PersonnelOverhead + PersonnelRoundTripDays;
        }
	}
}
