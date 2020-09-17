using System.Runtime.Remoting.Lifetime;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
	public class LaborCostCalculatorCS
	{
		private double NumTeams { get; set; }
		private double PersonnelOverhead { get; set; }
		private double NumEntriesPerTeamPerDay { get; set; }
		private double HoursPerEntryPerTeam { get; set; }
		private double HoursPerExitPerTeam { get; set; }

		public LaborCostCalculatorCS(double numTeams, double personnelOverhead, double numEntriesPerTeamPerDay, double hoursPerEntryPerTeam, double hoursPerExitPerTeam)
		{
			NumTeams = numTeams;
			PersonnelOverhead = personnelOverhead;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			HoursPerEntryPerTeam = hoursPerEntryPerTeam;
			HoursPerExitPerTeam = hoursPerExitPerTeam;

		}

		SuppliesCostCalculatorCS suppliesCostCalculatorCS = new SuppliesCostCalculatorCS;
		public double WorkDays = suppliesCostCalculatorCS.CalculateWorkDays();

		public double CalculateLaborCost(double RoundTripDays, double[] PersonnelReqPerTeam, double[] PersonnelHourlyRate)
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
