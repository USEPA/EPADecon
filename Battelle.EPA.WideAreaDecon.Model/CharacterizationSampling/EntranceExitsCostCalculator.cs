using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class EntrancesExitsCostCalculator : IEntrancesExitsCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;

        private readonly ILaborCostCalculator _laborCostCalculator;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;
        private readonly double _respiratorsPerPerson;
        private readonly double _numberEntriesPerTeamPerDay;

        private readonly ISuppliesCostCalculator _suppliesCostCalculator;

        public EntrancesExitsCostCalculator(
            Dictionary<PersonnelLevel, double> personnelRequiredPerTeam,
            double numberEntriesPerTeamPerDay,
            double respiratorsPerPerson,
            double costPerRespirator,
            Dictionary<PpeLevel, double> costPerPpe,
            ILaborCostCalculator laborCostCalculator,
            ISuppliesCostCalculator suppliesCostCalculator)
        {
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _laborCostCalculator = laborCostCalculator;
            _suppliesCostCalculator = suppliesCostCalculator;
        }

        public double CalculateEntrancesExitsCost(double _numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            var totalPersonnel = _personnelRequiredPerTeam.Values.Sum() * _numberTeams;

            var workDays = _suppliesCostCalculator.CalculateWorkDays( _numberTeams, _surfaceAreaToBeHepa, _surfaceAreaToBeWiped);

            var totalEntries = workDays * _numberEntriesPerTeamPerDay * _numberTeams;

            var totalPpePerLevel = ppePerLevelPerTeam.Values.Select(x => x * _numberTeams * totalEntries);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe.Values, (ppe, cost) => ppe * cost).Sum();

            var entExitLaborCost = _laborCostCalculator.CalculateEntExitLaborCost( _numberTeams,  _surfaceAreaToBeHepa,  _surfaceAreaToBeWiped);

            return entExitLaborCost + totalPersonnel * _respiratorsPerPerson * _costPerRespirator + totalCostPpe;
        }
    }
}