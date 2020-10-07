﻿using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class EntranceExitCostCalculator : IEntranceExitCostCalculator
    {
        private readonly double[] _costPerPpe;
        private readonly double _costPerRespirator;

        private readonly IEntExitLaborCostCalculator _entExitLaborCostCalculator;
        private readonly double _numTeams;
        private readonly double[] _personnelReqPerTeam;
        private readonly double _respiratorsPerPerson;

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

        public double CalculateEntranceExitCost(double saToBeSourceReduced, double[] ppeEachLevelPerTeam)
        {
            var totalPersonnel = _personnelReqPerTeam.Sum() * _numTeams;

            var totalPpePerLevel = ppeEachLevelPerTeam.Select(x => x * _numTeams);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe, (ppe, cost) => ppe * cost).Sum();

            //EntExitLabor declared as local double as input is needed to calculate
            var entExitLabor = _entExitLaborCostCalculator.CalculateEntExitLaborCost(saToBeSourceReduced);

            return entExitLabor + totalPersonnel * _respiratorsPerPerson * _costPerRespirator + totalCostPpe;
        }
    }
}