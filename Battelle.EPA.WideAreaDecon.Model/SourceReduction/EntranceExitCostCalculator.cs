using System;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
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

		public EntranceExitCostCalculator(double numTeams, double[] personnelRequired, double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE )
		{
			NumTeams = numTeams;
			PersonnelRequired = personnelRequired;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;		
		}

		public double CalculateEntranceExitCost(double SqFtToBeSourceReduced, double[] PPE_EachLevelPerTeam)
        {
			double TotalPersonnel = 0;
			double[] TotalPPE_PerLevel = { 0, 0, 0, 0 };
			double TotalCostPPE = 0;

			for (int i = 0; i < PersonnelRequired.Length; i++)
            {
				TotalPersonnel += PersonnelRequired[i];
            }

			for (int j = 0; j < PersonnelRequired.Length; j++)
			{
				TotalPPE_PerLevel[j] = PPE_EachLevelPerTeam[j] * NumTeams;
			}

			for (int k = 0; k < TotalPPE_PerLevel.Length; k++)
            {
				TotalCostPPE += TotalPPE_PerLevel[k];
            }

			EntExitLaborCostCalculator entExitLaborCostCalculator = new EntExitLaborCostCalculator();
			double CostLaborEntEx = entExitLaborCostCalculator.CalculateEntExitLaborCost(SqFtToBeSourceReduced);

			return CostLaborEntEx + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}

