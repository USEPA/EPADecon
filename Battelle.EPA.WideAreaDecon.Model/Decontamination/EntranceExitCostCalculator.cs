using System;
namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{

	public class EntranceExitCostCalculator
	{
		private double NumTeams { get; set; }
		private double[] PersonnelRequired { get; set; }
		private double RespiratorsPerPerson { get; set; }
		private double CostPerRespirator { get; set; }
		private double[] CostPerPPE { get; set; }
		
		public EntranceExitCostCalculator()
        {

        }

		public EntranceExitCostCalculator(double numTeams, double[] personnelRequired, double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE)
		{
			NumTeams = numTeams;
			PersonnelRequired = personnelRequired;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;
		}

		public double CalculateEntranceExitCost(double[] PPE_PerLevelPerTeam)
		{
			double TotalPersonnel = 0;
			for (int i = 0; i < PersonnelRequired.Length; i++)
			{
				TotalPersonnel += PersonnelRequired[i];
			}

			double[] TotalPPE_PerLevel = { 0, 0, 0, 0 };
			for (int j = 0; j < PPE_PerLevelPerTeam.Length; j++)
			{
				TotalPPE_PerLevel[j] = PPE_PerLevelPerTeam[j] * NumTeams;
			}

			double TotalCostPPE = 0;
			for (int k = 0; k < PPE_PerLevelPerTeam.Length; k++)
			{
				TotalCostPPE += (PPE_PerLevelPerTeam[k] * CostPerPPE[k]);
			}

			EntExitLaborCostCalculator entExitLaborCostCalculator = new EntExitLaborCostCalculator();
			double CostLaborEntEx = entExitLaborCostCalculator.CalculateEntExitLaborCost();

			return CostLaborEntEx + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}
