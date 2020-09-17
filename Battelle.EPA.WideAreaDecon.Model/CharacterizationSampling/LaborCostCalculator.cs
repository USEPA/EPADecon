using System.Runtime.Remoting.Lifetime;

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
		private double PersonnelHourlyRate { get; set; }

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

		SuppliesCostCalculator suppliesCostCalculator = new SuppliesCostCalculator;
		public double WorkDays = suppliesCostCalculator.CalculateWorkDays();

		public double CalculateLaborCost(double RoundTripDays)
		{

			double LaborHoursCost = 0;

			for (int i = 0; i < PersonnelReqPerTeam.Length; i++)
            {
				LaborHoursCost = LaborHoursCost + (PersonnelReqPerTeam[i] * PersonnelHourlyRate[i]);
            }

			return ((WorkDays + PersonnelOverhead + RoundTripDays) * 8) * NumTeams * (LaborHoursCost);

		}

		public double CalculateEntExitLaborCost(double[] PersonnelReqPerTeam, double[] PersonnelHourlyRate)
        {
			double LaborHoursCost = 0;

			for (int i = 0; i < PersonnelReqPerTeam.Length; i++)
			{
				LaborHoursCost = LaborHoursCost + (PersonnelReqPerTeam[i] * PersonnelHourlyRate[i]);
			}
			return ((Workdays * NumEntriesPerTeamPerDay * NumTeams * HoursPerEntryPerTeam) + (Workdays * NumEntriesPerTeamPerDay * NumTeams * HoursPerExitPerTeam)) * (LaborHoursCost);
		}
	}
}
