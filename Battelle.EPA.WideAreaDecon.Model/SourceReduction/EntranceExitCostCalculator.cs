using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{

	public class EntranceExitCostCalculator
	{
		private double NumTeams { get; set; }
		private double[] PersonnelRequired { get; set; }
		private double RespiratorsPerPerson { get; set; }
		private double CostPerRespirator { get; set; }
		private double[] CostPerPPE { get; set; }

		EntExitLaborCostCalculator entExitLaborCostCalculator = new EntExitLaborCostCalculator();

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
			double TotalPersonnel = PersonnelReqPerTeam.Sum();

			var TotalPPE_PerLevel = PPE_PerLevelPerTeam.Select(x => x * NumTeams);

			var TotalCostPPE = TotalPPE_PerLevel.Zip(CostPerPPE, (ppe, cost) => ppe * cost).Sum();

			return entExitLaborCostCalculator.CostLaborEntEx + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}

