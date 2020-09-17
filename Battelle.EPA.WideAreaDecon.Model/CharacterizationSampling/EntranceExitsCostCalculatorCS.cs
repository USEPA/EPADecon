namespace Battelle.EPA.WideAreaDecon.Model
{
	public class EntrancesExitsCostCalculator
	{
		private double RespiratorsPerPerson { get; set; }
		private double CostPerRespirator { get; set; }
		private double[] CostPerPPE { get; set; }

		public EntrancesExitsCostCalculator( double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE)
		{
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;
        }

		public double CalculateEntrancesExitsCost(double[] PersonnelReqPerTeam, double[] PersonnelHourlyRate, double[] PPE_PerLevelPerTeam)
		{
			double TotalPersonnel = 0;
			for (int i = 0; i < PersonnelReqPerTeam.Length; i++)
            {
				TotalPersonnel = TotalPersonnel + PersonnelReqPerTeam[i];
            }

			double TotalPPE_PerLevel = 0;
			for (int i = 0; i < PPE_PerLevelPerTeam.Length; i++)
			{
				TotalPPE_PerLevel = TotalPPE_PerLevel + PPE_PerLevelPerTeam[i];
			}

			double Total;

			SuppliesCostCalculatorCS suppliesCostCalculatorCS = new SuppliesCostCalculatorCS;
			double WorkDays = suppliesCostCalculatorCS.CalculateWorkDays();

			LaborCostCalulatorCS laborCostCalulatorCS = new LaborCostCalulatorCS;
			double EntExitLaborCost = laborCostCalulatorCS.CalculateEntExitLaborCost(PersonnelReqPerTeam, PersonnelHourlyRate);

			return EntExitLaborCost + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalPPE_PerLevel * CostPerPPE);
		}
	}
}