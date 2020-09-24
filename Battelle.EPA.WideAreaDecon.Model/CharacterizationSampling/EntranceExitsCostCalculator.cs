namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
	public class EntrancesExitsCostCalculator
	{
		private double[] PersonnelReqPerTeam { get; set; }
		private double RespiratorsPerPerson { get; set; }
		private double CostPerRespirator { get; set; }
		private double[] CostPerPPE { get; set; }

		public EntrancesExitsCostCalculator( double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE)
		{
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;
        }

		public double CalculateEntrancesExitsCost(double[] PPE_PerLevelPerTeam)
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

			Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.SuppliesCostCalculator suppliesCostCalculator = new Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.SuppliesCostCalculator();
			double WorkDays = suppliesCostCalculatorCS.CalculateWorkDays();

			Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.LaborCostCalulator laborCostCalulatorCS = new Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.LaborCostCalulator();
			double EntExitLaborCost = laborCostCalulatorCS.CalculateEntExitLaborCost();

			return EntExitLaborCost + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalPPE_PerLevel * CostPerPPE);
		}
	}
}
