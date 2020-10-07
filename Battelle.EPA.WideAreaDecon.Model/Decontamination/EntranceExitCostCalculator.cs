﻿using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public enum PersonnelLevel
    {

    }

    public enum PpeLevel
    {

    }

    public class EntranceExitCostCalculator : IEntranceExitCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;

        private readonly IEntExitLaborCostCalculator _entExitLaborCostCalculator;
        private readonly Dictionary<PersonnelLevel, double> _personnelReqPerTeam;
        private readonly double _respiratorsPerPerson;


        public EntranceExitCostCalculator(
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
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

        public double CalculateEntranceExitCost(double _numberTeams, double[] ppePerLevelPerTeam)
        {
            var totalPersonnel = _personnelReqPerTeam.Sum() * _numberTeams;

            var totalPpePerLevel = ppePerLevelPerTeam.Select(x => x * _numberTeams);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe, (ppe, cost) => ppe * cost).Sum();

            var costLaborEntEx = _entExitLaborCostCalculator.CalculateEntExitLaborCost();

            return costLaborEntEx + totalPersonnel * _respiratorsPerPerson * _costPerRespirator + totalCostPpe;
        }
    }
}