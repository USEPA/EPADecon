using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class EntranceExitCostCalculator : IEntranceExitCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;
        private readonly double _numberEntriesPerTeamPerDay;

        private readonly IEntExitLaborCostCalculator _entExitLaborCostCalculator;

        private readonly IWorkDaysCalculator _workDaysCalculator;

        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;
        private readonly double _respiratorsPerPerson;

        public EntranceExitCostCalculator(
            Dictionary<PersonnelLevel, double> personnelRequiredPerTeam,
            double numberEntriesPerTeamPerDay,
            double respiratorsPerPerson,
            double costPerRespirator,
            Dictionary<PpeLevel, double> costPerPpe,
            IEntExitLaborCostCalculator entExitLaborCostCalculator,
            IWorkDaysCalculator workDaysCalculator)
        {
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _entExitLaborCostCalculator = entExitLaborCostCalculator;
            _workDaysCalculator= workDaysCalculator;
        }

        public double CalculateEntranceExitCost(double workDays, double _numberTeams, double saToBeSourceReduced, Dictionary<PpeLevel, double> ppeEachLevelPerTeam)
        {
            var totalPersonnel = _personnelRequiredPerTeam.Values.Sum() * _numberTeams;
            
            var totalEntries = workDays * _numberEntriesPerTeamPerDay * _numberTeams;

            var totalPpePerLevel = ppeEachLevelPerTeam.Values.Select(x => x * _numberTeams * totalEntries);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe.Values, (ppe, cost) => ppe * cost).Sum();

            //EntExitLabor declared as local double as input is needed to calculate
            var entExitLabor = _entExitLaborCostCalculator.CalculateEntExitLaborCost(workDays, _numberTeams, saToBeSourceReduced);

            return entExitLabor + totalPersonnel * _respiratorsPerPerson * _costPerRespirator + totalCostPpe;
        }
    }
}