using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class EntrancesExitsCostCalculator : IEntrancesExitsCostCalculator
    {
        private readonly double[] _costPerPpe;
        private readonly double _costPerRespirator;

        private readonly ILaborCostCalculator _laborCostCalculator;
        private readonly double _numberTeams;
        private readonly double[] _personnelRequiredPerTeam;
        private readonly double _respiratorsPerPerson;

        public EntrancesExitsCostCalculator(
            double numberTeams,
            double[] personnelRequiredPerTeam,
            double respiratorsPerPerson,
            double costPerRespirator,
            double[] costPerPpe,
            ILaborCostCalculator laborCostCalculator)
        {
            _numberTeams = numberTeams;
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _laborCostCalculator = laborCostCalculator;
        }

        public double CalculateEntrancesExitsCost(IEnumerable<double> ppePerLevelPerTeam)
        {
            var totalPersonnel = _personnelRequiredPerTeam.Sum() * _numberTeams;

            var totalPpePerLevel = ppePerLevelPerTeam.Select(x => x * _numberTeams);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe, (ppe, cost) => ppe * cost).Sum();

            var entExitLaborCost = _laborCostCalculator.CalculateEntExitLaborCost();

            return entExitLaborCost + totalPersonnel * _respiratorsPerPerson * _costPerRespirator + totalCostPpe;
        }
    }
}