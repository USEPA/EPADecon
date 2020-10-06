using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
	public class EntrancesExitsCostCalculator : IEntrancesExitsCostCalculator
	{
		private readonly double NumTeams;
		private readonly double[] PersonnelReqPerTeam;
		private readonly double RespiratorsPerPerson;
		private readonly double CostPerRespirator;
		private readonly double[] CostPerPPE;

		private readonly ILaborCostCalculator LaborCostCalculator;

		public EntrancesExitsCostCalculator(
			double numTeams, 
			double[] personnelReqPerTeam, 
			double respiratorsPerPerson, 
			double costPerRespirator, 
			double[] costPerPPE, 
			ILaborCostCalculator laborCostCalculator)
		{
			NumTeams = numTeams;
			PersonnelReqPerTeam = personnelReqPerTeam;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;
			LaborCostCalculator = laborCostCalculator;
        }

		public double CalculateEntrancesExitsCost(double[] PPE_PerLevelPerTeam)
		{
			double TotalPersonnel = PersonnelReqPerTeam.Sum();

			var TotalPPE_PerLevel = PPE_PerLevelPerTeam.Select(x => x * NumTeams);

			var TotalCostPPE = TotalPPE_PerLevel.Zip(CostPerPPE, (ppe, cost) => ppe * cost).Sum();

			double EntExitLaborCost = LaborCostCalculator.CalculateEntExitLaborCost();

			return EntExitLaborCost + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}
