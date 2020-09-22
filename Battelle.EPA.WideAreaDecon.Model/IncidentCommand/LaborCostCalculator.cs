using System;
namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
public class LaborCostCalculator
{
	private double[] PersonnelRequired { get; set; }
	private double PersonnelOverheadDays { get; set; }

	public LaborCostCalculator(double[] personnelRequired, double personnelOverheadDays)
	{
		PersonnelRequired = personnelRequired;
		PersonnelOverheadDays = personnelOverheadDays;
	}

	public double CalculateLaborCost(double PersonnelRoundTripDays)
    {
		double TotalPersonnel = 0;
		for(int i = 0; i < PersonnelRequired.Length; i++)
        {
			TotalPersonnel = TotalPersonnel + PersonnelRequired[i];
        }
}
}
