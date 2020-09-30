using System;
using System.Security.Cryptography.X509Certificates;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
	public class LaborCostCalculator
	{
		private double NumTeams { get; set; }
		private double[] PersonnelReqPerTeam { get; set; }
		private double PersonnelOverhead { get; set; }
		private double NumEntriesPerTeamPerDay { get; set; }
		private double HoursPerEntryPerTeam { get; set; }
		private double HoursPerExitPerTeam { get; set; }
		private double[] PersonnelHourlyRate { get; set; }
		public readonly double EntExitLaborCost;

		SuppliesCostCalculator suppliesCostCalculator = new SuppliesCostCalculator();

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
			double LaborHoursCost = 0;

			for (int i = 0; i < PersonnelReqPerTeam.Length; i++)
            {
				LaborHoursCost += (PersonnelReqPerTeam[i] * PersonnelHourlyRate[i]);
            }

			return ((suppliesCostCalculator.WorkDays + PersonnelOverhead + PersonnelRoundTripDays) * 8) * NumTeams * (LaborHoursCost);

		}

		public double CalculateEntExitLaborCost()
        {
			double LaborHoursCost = 0;

			for (int i = 0; i < PersonnelReqPerTeam.Length; i++)
			{
				LaborHoursCost += (PersonnelReqPerTeam[i] * PersonnelHourlyRate[i]);
			}

			EntExitLaborCost = ((suppliesCostCalculator.WorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerEntryPerTeam) + (suppliesCostCalculator.WorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerExitPerTeam)) * (LaborHoursCost);
		}

		public double CalculateLaborDays(double PersonnelRoundTripDays)
        {
			return suppliesCostCalculator.WorkDays + PersonnelOverhead + PersonnelRoundTripDays;
        }
	}
}
