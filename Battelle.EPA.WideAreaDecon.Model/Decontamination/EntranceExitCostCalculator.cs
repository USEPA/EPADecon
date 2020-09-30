using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
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
			double TotalPersonnel = PersonnelReqPerTeam.Sum();

			var TotalPPE_PerLevel = PPE_PerLevelPerTeam.Select(x => x * NumTeams);

			var TotalCostPPE = TotalPPE_PerLevel.Zip(CostPerPPE, (ppe, cost) => ppe * cost).Sum();

			double CostLaborEntEx = entExitLaborCostCalculator.CalculateEntExitLaborCost();

			return CostLaborEntEx + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}
