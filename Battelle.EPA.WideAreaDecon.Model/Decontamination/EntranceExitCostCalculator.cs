using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class EntranceExitCostCalculator : IEntranceExitCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;
        private readonly Dictionary<PersonnelLevel, double> _personnelReqPerTeam;
        private readonly double _respiratorsPerPerson;
        private readonly double _numberEntriesPerTeamPerDay;
        private readonly Dictionary<SurfaceType, double> _initialSporeLoading;

        private readonly IEntExitLaborCostCalculator _entExitLaborCostCalculator;

        private readonly IWorkDaysCalculator _workDaysCalculator;

        public EntranceExitCostCalculator(
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            double numberEntriesPerTeamPerDay,
            double respiratorsPerPerson,
            double costPerRespirator,
            Dictionary<PpeLevel, double> costPerPpe,
            Dictionary<SurfaceType,double> initialSporeLoading,
            IEntExitLaborCostCalculator entExitLaborCostCalculator,
            IWorkDaysCalculator workDaysCalculator
            )
        {
            _personnelReqPerTeam = personnelReqPerTeam;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _entExitLaborCostCalculator = entExitLaborCostCalculator;
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _initialSporeLoading = initialSporeLoading;
            _workDaysCalculator = workDaysCalculator;
        }

        public double CalculateEntranceExitCost(double _numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var totalPersonnel = _personnelReqPerTeam.Values.Sum() * _numberTeams;

            double totalWorkDays = _workDaysCalculator.CalculateWorkDays();
            
            var totalEntries = totalWorkDays * _numberEntriesPerTeamPerDay * _numberTeams;

            var totalPpePerLevel = ppePerLevelPerTeam.Values.Select(x => x * _numberTeams * totalEntries);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe.Values, (ppe, cost) => ppe * cost).Sum();

            var costLaborEntEx = _entExitLaborCostCalculator.CalculateEntExitLaborCost(_numberTeams);

            return costLaborEntEx + (totalPersonnel * _respiratorsPerPerson * _costPerRespirator) + totalCostPpe;
        }
    }
}