using System.Collections.Generic;
using System.Linq;
using static Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class EntranceExitCostCalculator : IEntranceExitCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;
        private readonly Dictionary<PersonnelLevel, double> _personnelReqPerTeam;
        private readonly double _respiratorsPerPerson;

        private readonly IEntExitLaborCostCalculator _entExitLaborCostCalculator;

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

        public double CalculateEntranceExitCost(double _numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var totalPersonnel = _personnelReqPerTeam.Values.Sum() * _numberTeams;

            var totalPpePerLevel = ppePerLevelPerTeam.Values.Select(x => x * _numberTeams);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe.Values, (ppe, cost) => ppe * cost).Sum();

            var costLaborEntEx = _entExitLaborCostCalculator.CalculateEntExitLaborCost(_numberTeams);

            return costLaborEntEx + totalPersonnel * _respiratorsPerPerson * _costPerRespirator + totalCostPpe;
        }
    }
}