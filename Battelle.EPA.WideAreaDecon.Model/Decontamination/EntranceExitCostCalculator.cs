﻿using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class EntranceExitCostCalculator : IEntranceExitCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;
        private readonly Dictionary<PersonnelLevel, double> _personnelReqPerTeam;
        private readonly double _respiratorsPerPerson;
        private readonly double _numberEntriesPerTeamPerDay;

        private readonly IEntExitLaborCostCalculator _entExitLaborCostCalculator;

        public EntranceExitCostCalculator(
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            double numberEntriesPerTeamPerDay,
            double respiratorsPerPerson,
            double costPerRespirator,
            Dictionary<PpeLevel, double> costPerPpe,
            IEntExitLaborCostCalculator entExitLaborCostCalculator
            )
        {
            _personnelReqPerTeam = personnelReqPerTeam;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _entExitLaborCostCalculator = entExitLaborCostCalculator;
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
        }

        public double CalculateEntranceExitCost(double workDays, double _numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var totalPersonnel = _personnelReqPerTeam.Values.Sum() * _numberTeams;
            
            var totalEntries = workDays * _numberEntriesPerTeamPerDay * _numberTeams;

            var totalPpePerLevel = ppePerLevelPerTeam.Values.Select(x => x * totalPersonnel * totalEntries);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe.Values, (ppe, cost) => ppe * cost).Sum();

            var costLaborEntEx = _entExitLaborCostCalculator.CalculateEntExitLaborCost(_numberTeams, workDays);

            return costLaborEntEx + (totalPersonnel * _respiratorsPerPerson * _costPerRespirator) + totalCostPpe;
        }
    }
}