using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
	public class LaborCostCalculator
    {
        private readonly double[] PersonnelReqPerTeam;
        private readonly double PersonnelOverheadDays;
        private readonly double[] PersonnelHourlyRate;

        private readonly CharacterizationSampling.ILaborCostCalculator LaborCostCalculatorCS;
		private readonly SourceReduction.LaborCostCalculator LaborCostCalculatorSR;
		private readonly Decontamination.LaborCostCalculator LaborCostCalculatorDC;

        public LaborCostCalculator(
            double[] personnelReqPerTeam, 
            double personnelOverheadDays, 
            double[] personnelHourlyRate,
            CharacterizationSampling.ILaborCostCalculator laborCostCalculatorCs,
            SourceReduction.LaborCostCalculator laborCostCalculatorSr,
            Decontamination.LaborCostCalculator laborCostCalculatorDc)
		{
			PersonnelReqPerTeam = personnelReqPerTeam;
			PersonnelOverheadDays = personnelOverheadDays;
			PersonnelHourlyRate = personnelHourlyRate;
            LaborCostCalculatorCS = laborCostCalculatorCs;
            LaborCostCalculatorSR = laborCostCalculatorSr;
            LaborCostCalculatorDC = laborCostCalculatorDc;
        }

		public double CalculateOnSiteDays(double SAToBeSourceReduced, double PersonnelRoundTripDays)
        {
			double LaborDaysCS = LaborCostCalculatorCS.CalculateLaborDays(PersonnelRoundTripDays);
			double LaborDaysSR = LaborCostCalculatorSR.CalculateLaborDays(SAToBeSourceReduced, PersonnelRoundTripDays);
			double LaborDaysDC = LaborCostCalculatorDC.CalculateLaborDays(PersonnelRoundTripDays);

			return (LaborDaysCS + LaborDaysSR + LaborDaysDC + PersonnelOverheadDays);
		}

		public double CalculateLaborCost(double SAToBeSourceReduced, double PersonnelRoundTripDays)
		{
			double LaborDaysCS = LaborCostCalculatorCS.CalculateLaborDays(PersonnelRoundTripDays);
			double LaborDaysSR = LaborCostCalculatorSR.CalculateLaborDays(SAToBeSourceReduced, PersonnelRoundTripDays);
			double LaborDaysDC = LaborCostCalculatorDC.CalculateLaborDays(PersonnelRoundTripDays);

			double TotalPersonnel = PersonnelReqPerTeam.Sum();

			var PersonnelHoursCost = PersonnelReqPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			double LaborHours = (8 * (LaborDaysCS + LaborDaysSR + LaborDaysDC + PersonnelOverheadDays + PersonnelRoundTripDays));

			return ((8 * (CalculateOnSiteDays(SAToBeSourceReduced, PersonnelRoundTripDays) + PersonnelRoundTripDays)) * PersonnelHoursCost);
		}
	}
}

