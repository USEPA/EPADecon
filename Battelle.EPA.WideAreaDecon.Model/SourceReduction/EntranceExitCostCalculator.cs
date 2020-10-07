﻿using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public enum PpeLevel
    {

    }

    public enum PersonnelLevel
    {

    }

    public class EntranceExitCostCalculator : IEntranceExitCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;

        private readonly IEntExitLaborCostCalculator _entExitLaborCostCalculator;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;
        private readonly double _respiratorsPerPerson;

        public EntranceExitCostCalculator(
            Dictionary<PersonnelLevel, double> personnelRequiredPerTeam,
            double respiratorsPerPerson,
            double costPerRespirator,
            Dictionary<PpeLevel, double> costPerPpe,
            IEntExitLaborCostCalculator entExitLaborCostCalculator)
        {
            _personnelReqPerTeam = personnelReqPerTeam;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _entExitLaborCostCalculator = entExitLaborCostCalculator;
        }

        public double CalculateEntranceExitCost(double _numberTeams, double saToBeSourceReduced, double[] ppeEachLevelPerTeam)
        {
            var totalPersonnel = _personnelReqPerTeam.Sum() * _numberTeams;

            var totalPpePerLevel = ppeEachLevelPerTeam.Select(x => x * _numberTeams);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe, (ppe, cost) => ppe * cost).Sum();

            //EntExitLabor declared as local double as input is needed to calculate
            var entExitLabor = _entExitLaborCostCalculator.CalculateEntExitLaborCost(saToBeSourceReduced);

            return entExitLabor + totalPersonnel * _respiratorsPerPerson * _costPerRespirator + totalCostPpe;
        }
    }
}