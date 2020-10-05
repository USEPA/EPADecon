using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class LaborCostCalculator : ILaborCostCalculator
	{
		private readonly double TeamsRequired;
		private readonly double PersonnelOverhead;
		private readonly double[] PersonnelPerTeam;
		private readonly double[] PersonnelHourlyRate;
		private readonly double MassPerSA;

		WorkDaysCalculator WorkDaysCalculator = new WorkDaysCalculator();

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
			double WorkDays = WorkDaysCalculator.CalculateWorkDays(SAToBeSourceReduced); 

			var PersonnelHoursCost = PersonnelPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			return (((WorkDays + PersonnelOverhead + PersonnelRoundTripDays) * 8 * TeamsRequired * PersonnelHoursCost) + (SAToBeSourceReduced * MassPerSA * CostPerTonRemoved));
		}

		public double CalculateLaborDays(double PersonnelRoundTripDays, double SAToBeSourceReduced)
        {
			double WorkDays = WorkDaysCalculator.CalculateWorkDays(SAToBeSourceReduced);

			return WorkDays + PersonnelOverhead + PersonnelRoundTripDays;
        }
	}
}
