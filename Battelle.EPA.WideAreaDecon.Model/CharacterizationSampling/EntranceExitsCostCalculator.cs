using System.Globalization;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
	public class EntrancesExitsCostCalculator
	{
		private double NumTeams { get; set; }
		private double[] PersonnelReqPerTeam { get; set; }
		private double RespiratorsPerPerson { get; set; }
		private double CostPerRespirator { get; set; }
		private double[] CostPerPPE { get; set; }

		public EntrancesExitsCostCalculator()
        {

        }

		public EntrancesExitsCostCalculator(double numTeams, double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE)
		{
			NumTeams = numTeams;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;
        }

		public double CalculateEntrancesExitsCost(double[] PPE_PerLevelPerTeam)
		{
			double TotalPersonnel = 0;
			for (int i = 0; i < PersonnelReqPerTeam.Length; i++)
            {
				TotalPersonnel += PersonnelReqPerTeam[i];
            }

			double[] TotalPPE_PerLevel = { 0, 0, 0, 0 };
			for (int j = 0; j < PPE_PerLevelPerTeam.Length; j++)
			{
				TotalPPE_PerLevel[j] = PPE_PerLevelPerTeam[j] * NumTeams;
			}

			double TotalCostPPE = 0;
			for (int k = 0; k < PPE_PerLevelPerTeam.Length; k++)
			{
				TotalCostPPE += (PPE_PerLevelPerTeam[k] + CostPerPPE[k]);
			}

			SuppliesCostCalculator suppliesCostCalculator = new SuppliesCostCalculator();
			double WorkDays = suppliesCostCalculator.CalculateWorkDays();

			LaborCostCalculator laborCostCalulator = new LaborCostCalculator();
			double EntExitLaborCost = laborCostCalulator.CalculateEntExitLaborCost();

			return EntExitLaborCost + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}
