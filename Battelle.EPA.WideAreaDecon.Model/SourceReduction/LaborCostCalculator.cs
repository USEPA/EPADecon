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
		private double MassPerSA { get; set; }

		WorkDaysCalculator workDaysCalculator = new WorkDaysCalculator();

		public LaborCostCalculator()
        {

        }

		public LaborCostCalculator(double teamsRequired, double personnelOverhead, double[] personnelPerTeam, double[] personnelHourlyRate, double massPerSA)
		{
			TeamsRequired = teamsRequired;
			PersonnelOverhead = personnelOverhead;
			PersonnelPerTeam = personnelPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
			MassPerSA = massPerSA;
		}

		public double CalculateLaborCost(double PersonnelRoundTripDays, double SAToBeSourceReduced, double CostPerTonRemoved)
		{
			var PersonnelHoursCost = PersonnelPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			return (((workDaysCalculator.WorkDays + PersonnelOverhead + PersonnelRoundTripDays) * 8 * TeamsRequired * PersonnelHoursCost) + (SAToBeSourceReduced * MassPerSA * CostPerTonRemoved));
		}

		public double CalculateLaborDays(double PersonnelRoundTripDays, double SAToBeSourceReduced)
        {
			return workDaysCalculator.WorkDays + PersonnelOverhead + PersonnelRoundTripDays;
        }
	}
}
