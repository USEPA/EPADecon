namespace Battelle.EPA.WideAreaDecon.Model
{
	public class LaborCostCalculatorCS
	{
		private double NumTeams { get; set; }
		private double PersonnelOverhead { get; set; }
		private double[] PersonnelReqPerTeam { get; set; }

		public LaborCostCalculatorCS(double numTeams, double personnelOverhead, double[] personnelReqPerTeam)
		{
			NumTeams = numTeams;
			PersonnelOverhead = personnelOverhead;
			PersonnelReqPerTeam = personnelReqPerTeam;

		}

		public double CalculateLaborCost(double SqFtToBeWiped, double SqFtToBeHEPA, double RoundTripDays, double[]PersonnelHourlyRate)
		{
			SuppliesCostCalculatorCS suppliesCostCalculatorCS = new SuppliesCostCalculatorCS;
			double WorkDays = suppliesCostCalculatorCS.CalculateWorkDays(SqFtToBeWiped, SqFtToBeHEPA);

			double LaborHoursCost = 0;

			for (int i = 0; i < PersonnelReqPerTeam.Length; i++)
            {
				LaborHoursCost = LaborHoursCost + (PersonnelReqPerTeam[i] * PersonnelHourlyRate[i]);
            }

			return ((WorkDays + PersonnelOverhead + RoundTripDays) * 8) * NumTeams * (LaborHoursCost);

		}
	}
}
