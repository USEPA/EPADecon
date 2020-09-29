using System;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
	public class LaborCostCalculator
	{
		private double[] PersonnelRequired { get; set; }
		private double PersonnelOverheadDays { get; set; }
		private double[] PersonnelHourlyRate { get; set; }

		public LaborCostCalculator()
        {

        }

		public LaborCostCalculator(double[] personnelRequired, double personnelOverheadDays, double[] personnelHourlyRate)
		{
			PersonnelRequired = personnelRequired;
			PersonnelOverheadDays = personnelOverheadDays;
			PersonnelHourlyRate = personnelHourlyRate;
		}

		public double CalculateOnSiteDays(double SqFtToBeSourceReduced, double PersonnelRoundTripDays)
        {
			CharacterizationSampling.LaborCostCalculator laborCostCalculatorCS = new CharacterizationSampling.LaborCostCalculator();
			double LaborDaysCS = laborCostCalculatorCS.CalculateLaborDays(PersonnelRoundTripDays);

			SourceReduction.LaborCostCalculator laborCostCalculatorSR = new SourceReduction.LaborCostCalculator();
			double LaborDaysSR = laborCostCalculatorSR.CalculateLaborDays(SqFtToBeSourceReduced, PersonnelRoundTripDays);

			Decontamination.LaborCostCalculator laborCostCalculatorDC = new Decontamination.LaborCostCalculator();
			double LaborDaysDC = laborCostCalculatorDC.CalculateLaborDays(PersonnelRoundTripDays);

			return (LaborDaysCS + LaborDaysSR + LaborDaysDC + PersonnelOverheadDays);
		}

		public double CalculateLaborCost(double SqFtToBeSourceReduced, double PersonnelRoundTripDays)
		{
			CharacterizationSampling.LaborCostCalculator laborCostCalculatorCS = new CharacterizationSampling.LaborCostCalculator();
			double LaborDaysCS = laborCostCalculatorCS.CalculateLaborDays(PersonnelRoundTripDays);

			SourceReduction.LaborCostCalculator laborCostCalculatorSR = new SourceReduction.LaborCostCalculator();
			double LaborDaysSR = laborCostCalculatorSR.CalculateLaborDays(SqFtToBeSourceReduced, PersonnelRoundTripDays);

			Decontamination.LaborCostCalculator laborCostCalculatorDC = new Decontamination.LaborCostCalculator();
			double LaborDaysDC = laborCostCalculatorDC.CalculateLaborDays(PersonnelRoundTripDays);

			double TotalPersonnel = 0;
			for (int i = 0; i < PersonnelRequired.Length; i++)
			{
				TotalPersonnel += PersonnelRequired[i];
			}

			double CostPerPersonPerHour = 0;
			for(int j = 0; j < PersonnelRequired.Length; j++)
            {
				CostPerPersonPerHour += (PersonnelRequired[j] * PersonnelHourlyRate[j]);
            }

			double LaborHours = (8 * (LaborDaysCS + LaborDaysSR + LaborDaysDC + PersonnelOverheadDays + PersonnelRoundTripDays));

			return ((8 * (CalculateOnSiteDays(SqFtToBeSourceReduced, PersonnelRoundTripDays) + PersonnelRoundTripDays)) * CostPerPersonPerHour);
		}
	}
}

