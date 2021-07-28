using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost
{
    public class EntranceExitCostCalculator : IEntranceExitCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly Dictionary<PpeLevel, double> _entryDurationByPPE;
        private readonly double _costPerRespirator;
        private readonly Dictionary<PersonnelLevel, double> _personnelReqPerTeam;
        private readonly double _respiratorsPerPerson;
        private readonly double _prepTimeCost;
        private readonly double _deconLineCost;

        public EntranceExitCostCalculator(
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            double respiratorsPerPerson,
            double costPerRespirator,
            Dictionary<PpeLevel, double> costPerPpe,
            Dictionary<PpeLevel, double> entryDurationByPPE,
            double prepTimeCost,
            double deconLineCost)
        {
            _personnelReqPerTeam = personnelReqPerTeam;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _entryDurationByPPE = entryDurationByPPE;
            _prepTimeCost = prepTimeCost;
            _deconLineCost = deconLineCost;
        }

        public double CalculateEntranceExitCost(double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam, List<Dictionary<ApplicationMethod, double>> decontaminationLaborDays)
        {
            //Calculating the non-fumigation and non-fogging workdays for decon to account for no site entries
            //being made for fumigation/fogging
            double laborDays = 0.0;

            foreach (var item in decontaminationLaborDays)
            {
                foreach (var method in item.Keys.ToList())
                {
                    if (method != ApplicationMethod.Fumigation && method != ApplicationMethod.Fogging)
                    {
                        laborDays += item[method];
                    }
                }
            }

            var totalPersonnel = _personnelReqPerTeam.Values.Sum() * numberTeams;

            var numTeamsByPPE = 0;

            foreach (var ppeFraction in ppePerLevelPerTeam)
            {
                if (ppeFraction.Value > 0)
                {
                    numTeamsByPPE++;
                }
            }

            var laborHoursPerPPELevel = (laborDays * GlobalConstants.HoursPerWorkDay) / numTeamsByPPE;

            var entriesPerPPELevel = new Dictionary<PpeLevel, double>
            {
                { PpeLevel.A, ppePerLevelPerTeam[PpeLevel.A] == 0 ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.A] },
                { PpeLevel.B, ppePerLevelPerTeam[PpeLevel.B] == 0 ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.B] },
                { PpeLevel.C, ppePerLevelPerTeam[PpeLevel.C] == 0 ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.C] },
                { PpeLevel.D, ppePerLevelPerTeam[PpeLevel.D] == 0 ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.D] }
            };

            var totalEntries = entriesPerPPELevel.Sum(x => x.Value);

            var totalPpePerLevel = ppePerLevelPerTeam.Values.Select(x => x * _personnelReqPerTeam.Values.Sum() * totalEntries);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe.Values, (ppe, cost) => ppe * cost).Sum();

            var totalEntryPrepCost = totalEntries * _prepTimeCost;
            var totalDeconLineCost = totalEntries * _deconLineCost;

            return (totalPersonnel * _respiratorsPerPerson * _costPerRespirator) + totalCostPpe + totalEntryPrepCost + totalDeconLineCost;
        }
    }
}