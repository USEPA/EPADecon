using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{

	public class EntranceExitCostCalculator : IEntranceExitCostCalculator 
	{
		private readonly double TeamsRequired;
		private readonly double[] PersonnelReqPerTeam;
		private readonly double RespiratorsPerPerson;
		private readonly double CostPerRespirator;
		private readonly double[] CostPerPPE;

		private readonly EntExitLaborCostCalculator EntExitLaborCostCalculator;

		public EntranceExitCostCalculator(double teamsRequired, double[] personnelReqPerTeam, double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE )
		{
			TeamsRequired = teamsRequired;
			PersonnelReqPerTeam = personnelReqPerTeam;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;		
		}

		public double CalculateEntranceExitCost(double SAToBeSourceReduced, double[] PPE_EachLevelPerTeam)
        {
			double TotalPersonnel = PersonnelReqPerTeam.Sum();

			var TotalPPE_PerLevel = PPE_EachLevelPerTeam.Select(x => x * TeamsRequired);

			var TotalCostPPE = TotalPPE_PerLevel.Zip(CostPerPPE, (ppe, cost) => ppe * cost).Sum();

			//EntExitLabor declared as local double as input is needed to calculate
			double EntExitLabor = EntExitLaborCostCalculator.CalculateEntExitLaborCost(SAToBeSourceReduced);

			return EntExitLabor + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}

