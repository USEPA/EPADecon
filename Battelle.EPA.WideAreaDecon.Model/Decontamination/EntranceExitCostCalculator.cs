using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class EntranceExitCostCalculator : IEntranceExitCostCalculator
	{
		private readonly double NumTeams;
		private readonly double[] PersonnelReqPerTeam;
		private readonly double RespiratorsPerPerson;
		private readonly double CostPerRespirator;
		private readonly double[] CostPerPPE;

		private readonly EntExitLaborCostCalculator EntExitLaborCostCalculator;

		
		public EntranceExitCostCalculator(double numTeams, double[] personnelReqPerTeam, double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE)
		{
			NumTeams = numTeams;
			PersonnelReqPerTeam = personnelReqPerTeam;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;
		}

		public double CalculateEntranceExitCost(double[] PPE_PerLevelPerTeam)
		{
			double TotalPersonnel = PersonnelReqPerTeam.Sum();

			var TotalPPE_PerLevel = PPE_PerLevelPerTeam.Select(x => x * NumTeams);

			var TotalCostPPE = TotalPPE_PerLevel.Zip(CostPerPPE, (ppe, cost) => ppe * cost).Sum();

			double CostLaborEntEx = EntExitLaborCostCalculator.CalculateEntExitLaborCost();

			return CostLaborEntEx + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}
