using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class LaborCostCalculator 
	{
		private double TeamsRequired { get; set; }
		private double PersonnelOverhead { get; set; }
		private double[] PersonnelPerTeam { get; set; }
		private double[] PersonnelHourlyRate { get; set; }
		private double TonsPerSqMt { get; set; }

		WorkDaysCalculator workDaysCalculator = new WorkDaysCalculator();

		public LaborCostCalculator()
        {

        }

		public LaborCostCalculator(double teamsRequired, double personnelOverhead, double[] personnelPerTeam, double[] personnelHourlyRate, double tonsPerSqMt)
		{
			TeamsRequired = teamsRequired;
			PersonnelOverhead = personnelOverhead;
			PersonnelPerTeam = personnelPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
			TonsPerSqMt = tonsPerSqMt;
		}

		public double CalculateLaborCost(double PersonnelRoundTripDays, double SqMtToBeSourceReduced, double CostPerTonRemoved)
		{
			var PersonnelHoursCost = PersonnelPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			return (((workDaysCalculator.WorkDays + PersonnelOverhead + PersonnelRoundTripDays) * 8 * TeamsRequired * PersonnelHoursCost) + (SqMtToBeSourceReduced * TonsPerSqMt * CostPerTonRemoved));
		}

		public double CalculateLaborDays(double PersonnelRoundTripDays, double SqMtToBeSourceReduced)
        {
			return workDaysCalculator.WorkDays + PersonnelOverhead + PersonnelRoundTripDays;
        }
	}
}
