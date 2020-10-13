using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public enum PpeLevel
    {
        [EnumMember(Value = "A")] A,
        [EnumMember(Value = "B")] B,
        [EnumMember(Value = "C")] C,
        [EnumMember(Value = "D")] D
    }

    public enum PersonnelLevel
    {
        [EnumMember(Value = "OSC")] OSC,
        [EnumMember(Value = "PL-1")] PL1,
        [EnumMember(Value = "PL-2")] PL2,
        [EnumMember(Value = "PL-3")] PL3,
        [EnumMember(Value = "PL-4")] PL4
    }

    public class EntrancesExitsCostCalculator : IEntrancesExitsCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;

        private readonly ILaborCostCalculator _laborCostCalculator;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;
        private readonly double _respiratorsPerPerson;

        public EntrancesExitsCostCalculator(
            Dictionary<PersonnelLevel, double> personnelRequiredPerTeam,
            double respiratorsPerPerson,
            double costPerRespirator,
            Dictionary<PpeLevel, double> costPerPpe,
            ILaborCostCalculator laborCostCalculator)
        {
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _laborCostCalculator = laborCostCalculator;
        }

        public double CalculateEntrancesExitsCost(double _numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            var totalPersonnel = _personnelRequiredPerTeam.Values.Sum() * _numberTeams;

            var totalPpePerLevel = ppePerLevelPerTeam.Values.Select(x => x * _numberTeams);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe.Values, (ppe, cost) => ppe * cost).Sum();

            var entExitLaborCost = _laborCostCalculator.CalculateEntExitLaborCost( _numberTeams,  _surfaceAreaToBeHepa,  _surfaceAreaToBeWiped);

            return entExitLaborCost + totalPersonnel * _respiratorsPerPerson * _costPerRespirator + totalCostPpe;
        }
    }
}