using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
	public class EntrancesExitsCostCalculator
	{
		private readonly double NumTeams;
		private readonly double[] PersonnelReqPerTeam;
		private readonly double RespiratorsPerPerson;
		private readonly double CostPerRespirator;
		private readonly double[] CostPerPPE;

		readonly LaborCostCalculator laborCostCalulator = new LaborCostCalculator();

		public EntrancesExitsCostCalculator()
        {

        }

		public EntrancesExitsCostCalculator(double numTeams, double[] personnelReqPerTeam, double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE)
		{
			NumTeams = numTeams;
			PersonnelReqPerTeam = personnelReqPerTeam;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;
        }

		public double CalculateEntrancesExitsCost(double[] PPE_PerLevelPerTeam)
		{
			double TotalPersonnel = PersonnelReqPerTeam.Sum();

			var TotalPPE_PerLevel = PPE_PerLevelPerTeam.Select(x => x * NumTeams);

			var TotalCostPPE = TotalPPE_PerLevel.Zip(CostPerPPE, (ppe, cost) => ppe * cost).Sum();

			double EntExitLaborCost = laborCostCalulator.CalculateEntExitLaborCost();

			return EntExitLaborCost + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}
