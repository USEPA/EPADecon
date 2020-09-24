using System;
namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
	public class LaborCostCalculator
	{
		private double[] PersonnelRequired { get; set; }
		private double PersonnelOverheadDays { get; set; }
		private double[] PersonnelHourlyRate { get; set; }

		public LaborCostCalculator(double[] personnelRequired, double personnelOverheadDays, double[] personnelHourlyRate)
		{
			PersonnelRequired = personnelRequired;
			PersonnelOverheadDays = personnelOverheadDays;
			PersonnelHourlyRate = personnelHourlyRate;
		}

		public double CalculateOnSiteDays(double PersonnelRoundTripDays)
        {
			Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.LaborCostCalculator laborCostCalculator = new Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.LaborCostCalculator();
			double LaborDaysCS = laborCostCalculator.CalculateLaborDays(PersonnelRoundTripDays);

			Battelle.EPA.WideAreaDecon.Model.SourceReduction.LaborCostCalculator laborCostCalculator = new Battelle.EPA.WideAreaDecon.Model.SourceReduction.LaborCostCalculator();
			double LaborDaysSR = laborCostCalculator.CalculateLaborDays(PersonnelRoundTripDays);

			Battelle.EPA.WideAreaDecon.Model.Decontamination.LaborCostCalculator laborCostCalculator = new Battelle.EPA.WideAreaDecon.Model.Decontamination.LaborCostCalculator();
			double LaborDaysDC = laborCostCalculator.CalculateLaborDays(PersonnelRoundTripDays);

			return (LaborDaysCS + LaborDaysSR + LaborDaysDC + PersonnelOverheadDays);
		}

		public double CalculateLaborCost(double PersonnelRoundTripDays)
		{
			double TotalPersonnel = 0;
			for (int i = 0; i < PersonnelRequired.Length; i++)
			{
				TotalPersonnel = TotalPersonnel + PersonnelRequired[i];
			}

			double CostPerPersonPerHour = 0;
			for(int j = 0; j < PersonnelRequired.Length; j++)
            {
				CostPerPersonPerHour = CostPerPersonPerHour + (PersonnelRequired[j] * PersonnelHourlyRate[j]);
            }

			double LaborHours = (8 * (LaborDaysCS + LaborDaysSR + LaborDaysDC + PersonnelOverheadDays + PersonnelRoundTripDays));



			return ((8 * (CalculateOnSiteDays(PersonnelRoundTripDays) + PersonnelRoundTripDays)) * CostPerPersonPerHour);
			
		}
	}
}

