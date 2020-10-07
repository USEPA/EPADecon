using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public enum PpeLevel
    {

    }

    public enum PersonnelLevel
    {

    }

    public class EntrancesExitsCostCalculator : IEntrancesExitsCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;

        private readonly ILaborCostCalculator _laborCostCalculator;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;
        private readonly double _respiratorsPerPerson;

        public EntrancesExitsCostCalculator(
            Dictionary<PpeLevel, double> personnelRequiredPerTeam,
            double respiratorsPerPerson,
            double costPerRespirator,
            Dictionary<PersonnelLevel, double> costPerPpe,
            ILaborCostCalculator laborCostCalculator)
        {
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _laborCostCalculator = laborCostCalculator;
        }

        public double CalculateEntrancesExitsCost(double _numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var totalPersonnel = _personnelRequiredPerTeam.Sum() * _numberTeams;

            var totalPpePerLevel = ppePerLevelPerTeam.Select(x => x * _numberTeams);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe, (ppe, cost) => ppe * cost).Sum();

            var entExitLaborCost = _laborCostCalculator.CalculateEntExitLaborCost();

            return entExitLaborCost + totalPersonnel * _respiratorsPerPerson * _costPerRespirator + totalCostPpe;
        }
    }
}