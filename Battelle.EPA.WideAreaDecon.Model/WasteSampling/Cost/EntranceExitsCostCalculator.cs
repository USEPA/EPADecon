using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public class EntrancesExitsCostCalculator : IEntrancesExitsCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;
        private readonly double _respiratorsPerPerson;
        private readonly double _numberEntriesPerTeamPerDay;
        private readonly double _prepTimeCost;
        private readonly double _deconLineCost;

        public EntrancesExitsCostCalculator(
            Dictionary<PersonnelLevel, double> personnelRequiredPerTeam,
            double numberEntriesPerTeamPerDay,
            double respiratorsPerPerson,
            double costPerRespirator,
            Dictionary<PpeLevel, double> costPerPpe,
            double prepTimeCost,
            double deconLineCost)
        {
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _prepTimeCost = prepTimeCost;
            _deconLineCost = deconLineCost;
        }

        public double CalculateEntrancesExitsCost(double laborDays, double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var totalPersonnel = _personnelRequiredPerTeam.Values.Sum() * numberTeams;

            var totalEntries = laborDays * _numberEntriesPerTeamPerDay * numberTeams;

            var totalPpePerLevel = ppePerLevelPerTeam.Values.Select(x => x * _personnelRequiredPerTeam.Values.Sum() * totalEntries);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe.Values, (ppe, cost) => ppe * cost).Sum();

            var totalEntryPrepCost = totalEntries * _prepTimeCost;
            var totalDeconLineCost = totalEntries * _deconLineCost;

            return (totalPersonnel * _respiratorsPerPerson * _costPerRespirator) + totalCostPpe + totalEntryPrepCost + totalDeconLineCost;
        }
    }
}