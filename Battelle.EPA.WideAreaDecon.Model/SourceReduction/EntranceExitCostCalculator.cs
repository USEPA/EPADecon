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

		public EntranceExitCostCalculator(double numTeams, double[] personnelRequired, double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE )
		{
			NumTeams = numTeams;
			PersonnelRequired = personnelRequired;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;		
		}

		public double CalculateEntranceExitCost(double[] PPE_EachLevelPerTeam)
        {
			double TotalPersonnel = 0;
			double[] TotalPPE_PerLevel = { 0, 0, 0, 0 };
			double TotalCostPPE = 0;

			for (int i = 0; i < PersonnelRequired.Length; i++)
            {
				TotalPersonnel = TotalPersonnel + PersonnelRequired[i];
            }

			for (int j = 0; j < PersonnelRequired.Length; j++)
			{
				TotalPPE_PerLevel[j] = PPE_EachLevelPerTeam[j] * NumTeams;
			}

			for (int k = 0; k < TotalPPE_PerLevel.Length; k++)
            {
				TotalCostPPE = TotalCostPPE + TotalPPE_PerLevel[k];
            }

			Battelle.EPA.WideAreaDecon.Model.SourceReduction.EntExitLaborCostCalculator entExitLaborCostCalculator = new Battelle.EPA.WideAreaDecon.Model.SourceReduction.EntExitLaborCostCalculator();
			double CostLaborEntEx = entExitLaborCostCalculator.CalculateEntExitLaborCost();

			return CostLaborEntEx + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}

