using System;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class LaborCostCalculator 
	{
		private double TeamsRequired { get; set; }
		private double PersonnelOverhead { get; set; }
		private double[] PersonnelPerTeam { get; set; }
		private double[] PersonnelHourlyRate { get; set; }
		private double TonsPerSqFt { get; set; }

		public LaborCostCalculator(double teamsRequired, double personnelOverhead, double[] personnelPerTeam, double[] personnelHourlyRate, double tonsPerSqFt)
		{
			TeamsRequired = teamsRequired;
			PersonnelOverhead = personnelOverhead;
			PersonnelPerTeam = personnelPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
			TonsPerSqFt = tonsPerSqFt;
		}

		public double CalculateLaborCost(double PersonnelRoundTripDays, double SqFtToBeSourceReduced, double CostPerTonRemoved)
		{
			WorkDaysCalculator workDaysCalculator = new WorkDaysCalculator;
			double WorkDays = workDaysCalculator.CalculateWorkDays();

			double PersonnelHoursCost = 0;
			for (int i = 0; i < PersonnelPerTeam.Length; i++)
            {
				PersonnelHoursCost = PersonnelHoursCost + (PersonnelPerTeam[i] * PersonnelHourlyRate[i]);
            }

			return (((Workdays + PersonnelOverhead + PersonnelRoundTripDays) * 8 * TeamsRequired * PersonnelHoursCost) + (SqFtToBeSourceReduced * TonsPerSqFt * CostPerTonRemoved));

		}
	}
}
