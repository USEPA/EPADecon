using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{

	public class EntranceExitCostCalculator
	{
		private double NumTeams { get; set; }
		private double[] PersonnelReqPerTeam { get; set; }
		private double RespiratorsPerPerson { get; set; }
		private double CostPerRespirator { get; set; }
		private double[] CostPerPPE { get; set; }

		EntExitLaborCostCalculator entExitLaborCostCalculator = new EntExitLaborCostCalculator();

		public EntranceExitCostCalculator()
        {

        }

		public EntranceExitCostCalculator(double numTeams, double[] personnelReqPerTeam, double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE )
		{
			NumTeams = numTeams;
			PersonnelReqPerTeam = personnelReqPerTeam;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;		
		}

		public double CalculateEntranceExitCost(double SqMtToBeSourceReduced, double[] PPE_EachLevelPerTeam)
        {
			double TotalPersonnel = PersonnelReqPerTeam.Sum();

			var TotalPPE_PerLevel = PPE_EachLevelPerTeam.Select(x => x * NumTeams);

			var TotalCostPPE = TotalPPE_PerLevel.Zip(CostPerPPE, (ppe, cost) => ppe * cost).Sum();

			return entExitLaborCostCalculator.CalculateEntExitLaborCost(SqMtToBeSourceReduced) + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}

