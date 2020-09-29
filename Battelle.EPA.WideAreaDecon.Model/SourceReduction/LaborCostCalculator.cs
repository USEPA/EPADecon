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

		public LaborCostCalculator()
        {

        }

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
			double PersonnelHoursCost = 0;
			for (int i = 0; i < PersonnelPerTeam.Length; i++)
            {
				PersonnelHoursCost += (PersonnelPerTeam[i] * PersonnelHourlyRate[i]);
            }

			WorkDaysCalculator workDaysCalculator = new WorkDaysCalculator();
			double WorkDays = workDaysCalculator.CalculateWorkDays(SqFtToBeSourceReduced);

			return (((WorkDays + PersonnelOverhead + PersonnelRoundTripDays) * 8 * TeamsRequired * PersonnelHoursCost) + (SqFtToBeSourceReduced * TonsPerSqFt * CostPerTonRemoved));
		}

		public double CalculateLaborDays(double PersonnelRoundTripDays, double SqFtToBeSourceReduced)
        {

			WorkDaysCalculator workDaysCalculator = new WorkDaysCalculator();
			double WorkDays = workDaysCalculator.CalculateWorkDays(SqFtToBeSourceReduced);

			return WorkDays + PersonnelOverhead + PersonnelRoundTripDays;
        }
	}
}
