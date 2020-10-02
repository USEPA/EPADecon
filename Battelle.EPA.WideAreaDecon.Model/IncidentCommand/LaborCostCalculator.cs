using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
	public class LaborCostCalculator
	{
		private double[] PersonnelReqPerTeam { get; set; }
		private double PersonnelOverheadDays { get; set; }
		private double[] PersonnelHourlyRate { get; set; }

		CharacterizationSampling.LaborCostCalculator laborCostCalculatorCS = new CharacterizationSampling.LaborCostCalculator();
		SourceReduction.LaborCostCalculator laborCostCalculatorSR = new SourceReduction.LaborCostCalculator();
		Decontamination.LaborCostCalculator laborCostCalculatorDC = new Decontamination.LaborCostCalculator();

		public LaborCostCalculator()
        {

        }

		public LaborCostCalculator(double[] personnelReqPerTeam, double personnelOverheadDays, double[] personnelHourlyRate)
		{
			PersonnelReqPerTeam = personnelReqPerTeam;
			PersonnelOverheadDays = personnelOverheadDays;
			PersonnelHourlyRate = personnelHourlyRate;
		}

		public double CalculateOnSiteDays(double SAToBeSourceReduced, double PersonnelRoundTripDays)
        {
			double LaborDaysCS = laborCostCalculatorCS.CalculateLaborDays(PersonnelRoundTripDays);
			double LaborDaysSR = laborCostCalculatorSR.CalculateLaborDays(SAToBeSourceReduced, PersonnelRoundTripDays);
			double LaborDaysDC = laborCostCalculatorDC.CalculateLaborDays(PersonnelRoundTripDays);

			return (LaborDaysCS + LaborDaysSR + LaborDaysDC + PersonnelOverheadDays);
		}

		public double CalculateLaborCost(double SAToBeSourceReduced, double PersonnelRoundTripDays)
		{
			double LaborDaysCS = laborCostCalculatorCS.CalculateLaborDays(PersonnelRoundTripDays);
			double LaborDaysSR = laborCostCalculatorSR.CalculateLaborDays(SAToBeSourceReduced, PersonnelRoundTripDays);
			double LaborDaysDC = laborCostCalculatorDC.CalculateLaborDays(PersonnelRoundTripDays);

			double TotalPersonnel = PersonnelReqPerTeam.Sum();

			var PersonnelHoursCost = PersonnelReqPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			double LaborHours = (8 * (LaborDaysCS + LaborDaysSR + LaborDaysDC + PersonnelOverheadDays + PersonnelRoundTripDays));

			return ((8 * (CalculateOnSiteDays(SAToBeSourceReduced, PersonnelRoundTripDays) + PersonnelRoundTripDays)) * PersonnelHoursCost);
		}
	}
}

