using System;
namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{

	public class EntranceExitCostCalculator
	{
		private double[] PersonnelRequired { get; set; }
		private double RespiratorsPerPerson { get; set; }
		private double CostPerRespirator { get; set; }
		private double[] CostPerPPE { get; set; }

		public EntranceExitCostCalculator(double[] personnelRequired, double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE)
		{
			PersonnelRequired = personnelRequired;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;
		}

		public double CalculateEntranceExitCost(double[] PPE_EachLevelPerTeam)
		{
			double TotalPersonnel = 0;
			for (int i = 0; i < PersonnelRequired.Length; i++)
			{
				TotalPersonnel = TotalPersonnel + PersonnelRequired[i];
			}

			double TotalPPE_PerLevel;
			for (int j = 0; j < PersonnelRequired.Length; j++)
			{
				TotalPPE_PerLevel = TotalPPE_PerLevel + PPE_EachLevelPerTeam[j];
			}

			Battelle.EPA.WideAreaDecon.Model.Decontamination.EntExitLaborCostCalculator entExitLaborCostCalculator = new Battelle.EPA.WideAreaDecon.Model.Decontamination.EntExitLaborCostCalculator();
			double CostLaborEntEx = entExitLaborCostCalculator.CalculateEntExitLaborCost();

			return CostLaborEntEx + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalPPE_PerLevel * CostPerPPE);
		}
	}
}
