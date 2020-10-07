using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class EntranceExitCostCalculator : IEntranceExitCostCalculator
	{
		private readonly double _numTeams;
		private readonly double[] _personnelReqPerTeam;
		private readonly double _respiratorsPerPerson;
		private readonly double _costPerRespirator;
		private readonly double[] _costPerPpe;

		private readonly IEntExitLaborCostCalculator _entExitLaborCostCalculator;

		
		public EntranceExitCostCalculator(
			double numTeams, 
			double[] personnelReqPerTeam, 
			double respiratorsPerPerson, 
			double costPerRespirator, 
			double[] costPerPpe,
			IEntExitLaborCostCalculator entExitLaborCostCalculator)
		{
			_numTeams = numTeams;
			_personnelReqPerTeam = personnelReqPerTeam;
			_respiratorsPerPerson = respiratorsPerPerson;
			_costPerRespirator = costPerRespirator;
			_costPerPpe = costPerPpe;
			_entExitLaborCostCalculator = entExitLaborCostCalculator;
		}

		public double CalculateEntranceExitCost(double[] ppePerLevelPerTeam)
		{
			double totalPersonnel = _personnelReqPerTeam.Sum() * _numTeams;

			var totalPpePerLevel = ppePerLevelPerTeam.Select(x => x * _numTeams);

			var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe, (ppe, cost) => ppe * cost).Sum();

			double costLaborEntEx = _entExitLaborCostCalculator.CalculateEntExitLaborCost();

			return costLaborEntEx + ((totalPersonnel * _respiratorsPerPerson) * _costPerRespirator) + (totalCostPpe);
		}
	}
}
