using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost
{
    public class EntranceExitCostCalculator : IEntranceExitCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly Dictionary<PpeLevel, double> _entryDurationByPPE;
        private readonly double _entryPrepTime;
        private readonly double _deconLineTime;
        private readonly double _postEntryRest;
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
            double entryPrepTime,
            double deconLineTime,
            double postEntryRest,
            double prepTimeCost,
            double deconLineCost)
        {
            _personnelReqPerTeam = personnelReqPerTeam;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _entryDurationByPPE = entryDurationByPPE;
            _entryPrepTime = entryPrepTime;
            _deconLineTime = deconLineTime;
            _postEntryRest = postEntryRest;
            _prepTimeCost = prepTimeCost;
            _deconLineCost = deconLineCost;
        }

        public DecontaminationResourceAndCostResults CalculateEntranceExitCost(double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam, List<Dictionary<ApplicationMethod, double>> decontaminationLaborDays)
        {
            //Calculating the non-fumigation and non-fogging workdays for decon to account for no site entries
            //being made for fumigation/fogging
            var laborDays = 0.0;

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

            if (laborDays.Equals(0))
            {
                return new DecontaminationResourceAndCostResults()
                {
                    DecontaminationCost = 0,
                    TotalDeconAgentVolume = new Dictionary<ApplicationMethod, double>(),
                    TotalPpeUnits = new Dictionary<PpeLevel, int>() {
                        { PpeLevel.A, 0 },
                        { PpeLevel.B, 0 },
                        { PpeLevel.C, 0 },
                        { PpeLevel.D, 0 }
                    }
                };
            }

            var totalPersonnel = _personnelReqPerTeam.Values.Sum() * numberTeams;

            var numTeamsByPPE = ppePerLevelPerTeam.Where(ppeFraction => ppeFraction.Value > 0).Count();
            var laborHoursPerPPELevel = (laborDays * GlobalConstants.HoursPerWorkDay) / numTeamsByPPE;

            var entranceTimeAdjustment = _entryPrepTime + _deconLineTime + _postEntryRest;

            var entriesPerPPELevel = new Dictionary<PpeLevel, double>
            {
                { PpeLevel.A, ppePerLevelPerTeam[PpeLevel.A].Equals(0) ? 0 : laborHoursPerPPELevel / (_entryDurationByPPE[PpeLevel.A] + entranceTimeAdjustment) },
                { PpeLevel.B, ppePerLevelPerTeam[PpeLevel.B].Equals(0) ? 0 : laborHoursPerPPELevel / (_entryDurationByPPE[PpeLevel.B] + entranceTimeAdjustment) },
                { PpeLevel.C, ppePerLevelPerTeam[PpeLevel.C].Equals(0) ? 0 : laborHoursPerPPELevel / (_entryDurationByPPE[PpeLevel.C] + entranceTimeAdjustment) },
                { PpeLevel.D, ppePerLevelPerTeam[PpeLevel.D].Equals(0) ? 0 : laborHoursPerPPELevel / (_entryDurationByPPE[PpeLevel.D] + entranceTimeAdjustment) }
            };

            var totalEntries = entriesPerPPELevel.Sum(x => x.Value);

            var totalPpePerLevel = ppePerLevelPerTeam.Values.Select(x => x * _personnelReqPerTeam.Values.Sum() * totalEntries);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe.Values, (ppe, cost) => ppe * cost).Sum();

            var totalEntryPrepCost = totalEntries * _prepTimeCost;
            var totalDeconLineCost = totalEntries * _deconLineCost;

            return new DecontaminationResourceAndCostResults()
            {
                DecontaminationCost = (totalPersonnel * _respiratorsPerPerson * _costPerRespirator) + totalCostPpe + totalEntryPrepCost + totalDeconLineCost,
                TotalDeconAgentVolume = new Dictionary<ApplicationMethod, double>(),
                TotalPpeUnits = new Dictionary<PpeLevel, int>()
                {
                    { PpeLevel.A, (int)Math.Ceiling((ppePerLevelPerTeam[PpeLevel.A] * _personnelReqPerTeam.Values.Sum() * totalEntries)) },
                    { PpeLevel.B, (int)Math.Ceiling((ppePerLevelPerTeam[PpeLevel.B] * _personnelReqPerTeam.Values.Sum() * totalEntries)) },
                    { PpeLevel.C, (int)Math.Ceiling((ppePerLevelPerTeam[PpeLevel.C] * _personnelReqPerTeam.Values.Sum() * totalEntries)) },
                    { PpeLevel.D, (int)Math.Ceiling((ppePerLevelPerTeam[PpeLevel.D] * _personnelReqPerTeam.Values.Sum() * totalEntries)) }
                }
            };
        }
    }
}