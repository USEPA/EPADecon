using System;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;

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
        private readonly double WorkDays;

		readonly SuppliesCostCalculator suppliesCostCalculator = new SuppliesCostCalculator();

		public LaborCostCalculator()
        {

        }

		public LaborCostCalculator(double numTeams, double[] personnelReqPerTeam, double personnelOverhead, double numEntriesPerTeamPerDay, double hoursPerEntryPerTeam, double hoursPerExitPerTeam, double[] personnelHourlyRate)
		{
			NumTeams = numTeams;
			PersonnelReqPerTeam = personnelReqPerTeam;
			PersonnelOverhead = personnelOverhead;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			HoursPerEntryPerTeam = hoursPerEntryPerTeam;
			HoursPerExitPerTeam = hoursPerExitPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;

			
		}

		public double CalculateLaborCost(double PersonnelRoundTripDays)
		{
			double WorkDays = suppliesCostCalculator.CalculateWorkDays();
			var PersonnelHoursCost = PersonnelReqPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			return ((WorkDays + PersonnelOverhead + PersonnelRoundTripDays) * 8) * NumTeams * (PersonnelHoursCost);

		}

		//return double if Elabor cost is not longer readonly
		public double CalculateEntExitLaborCost()
        {
			double WorkDays = suppliesCostCalculator.CalculateWorkDays();
			var PersonnelHoursCost = PersonnelReqPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();
			return ((WorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerEntryPerTeam) + (WorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerExitPerTeam)) * (PersonnelHoursCost);

		}

		public double CalculateLaborDays(double PersonnelRoundTripDays)
        {
			return WorkDays + PersonnelOverhead + PersonnelRoundTripDays;
        }
	}
}
