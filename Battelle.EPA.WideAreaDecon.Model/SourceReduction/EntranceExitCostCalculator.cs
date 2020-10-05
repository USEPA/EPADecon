﻿using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{

	public class EntranceExitCostCalculator : IEntranceExitCostCalculator 
	{
		private readonly double TeamsRequired;
		private readonly double[] PersonnelPerTeam;
		private readonly double RespiratorsPerPerson;
		private readonly double CostPerRespirator;
		private readonly double[] CostPerPPE;

		EntExitLaborCostCalculator entExitLaborCostCalculator = new EntExitLaborCostCalculator();

		public EntranceExitCostCalculator(double numTeams, double[] personnelReqPerTeam, double respiratorsPerPerson, double costPerRespirator, double[] costPerPPE )
		{
			NumTeams = numTeams;
			PersonnelReqPerTeam = personnelReqPerTeam;
			RespiratorsPerPerson = respiratorsPerPerson;
			CostPerRespirator = costPerRespirator;
			CostPerPPE = costPerPPE;		
		}

		public double CalculateEntranceExitCost(double SAToBeSourceReduced, double[] PPE_EachLevelPerTeam)
        {
			double TotalPersonnel = PersonnelReqPerTeam.Sum();

			var TotalPPE_PerLevel = PPE_EachLevelPerTeam.Select(x => x * NumTeams);

			var TotalCostPPE = TotalPPE_PerLevel.Zip(CostPerPPE, (ppe, cost) => ppe * cost).Sum();

			double EntExitLabor = entExitLaborCostCalculator.CalculateEntExitLaborCost(SAToBeSourceReduced);

			return EntExitLabor + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + (TotalCostPPE);
		}
	}
}

