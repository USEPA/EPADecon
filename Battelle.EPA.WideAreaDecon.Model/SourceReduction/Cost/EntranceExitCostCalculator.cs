using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction.Cost
{
    public class EntranceExitCostCalculator : IEntranceExitCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly Dictionary<PpeLevel, double> _entryDurationByPPE;
        private readonly double _costPerRespirator;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;
        private readonly double _respiratorsPerPerson;
        private readonly double _prepTimeCost;
        private readonly double _deconLineCost;

        public EntranceExitCostCalculator(
            Dictionary<PersonnelLevel, double> personnelRequiredPerTeam,
            double respiratorsPerPerson,
            double costPerRespirator,
            Dictionary<PpeLevel, double> costPerPpe,
            Dictionary<PpeLevel, double> entryDurationByPPE,
            double prepTimeCost,
            double deconLineCost)
        {
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _entryDurationByPPE = entryDurationByPPE;
            _respiratorsPerPerson = respiratorsPerPerson;
            _costPerRespirator = costPerRespirator;
            _costPerPpe = costPerPpe;
            _prepTimeCost = prepTimeCost;
            _deconLineCost = deconLineCost;
        }

        public SourceReductionResourceAndCostResults CalculateEntranceExitCost(double laborDays, double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var totalPersonnel = _personnelRequiredPerTeam.Values.Sum() * numberTeams;

            var numTeamsByPPE = ppePerLevelPerTeam.Where(ppeFraction => ppeFraction.Value > 0).Count();
            var laborHoursPerPPELevel = (laborDays * GlobalConstants.HoursPerWorkDay) / numTeamsByPPE;

            var entriesPerPPELevel = new Dictionary<PpeLevel, double>
            {
                { PpeLevel.A, ppePerLevelPerTeam[PpeLevel.A].Equals(0) ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.A] },
                { PpeLevel.B, ppePerLevelPerTeam[PpeLevel.B].Equals(0) ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.B] },
                { PpeLevel.C, ppePerLevelPerTeam[PpeLevel.C].Equals(0) ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.C] },
                { PpeLevel.D, ppePerLevelPerTeam[PpeLevel.D].Equals(0) ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.D] }
            };

            var totalEntries = entriesPerPPELevel.Sum(x => x.Value);

            var totalPpePerLevel = ppePerLevelPerTeam.Values.Select(x => x * _personnelRequiredPerTeam.Values.Sum() * totalEntries);

            var totalCostPpe = totalPpePerLevel.Zip(_costPerPpe.Values, (ppe, cost) => ppe * cost).Sum();

            var totalEntryPrepCost = totalEntries * _prepTimeCost;
            var totalDeconLineCost = totalEntries * _deconLineCost;

            return new SourceReductionResourceAndCostResults()
            {
                SourceReductionCost = (totalPersonnel * _respiratorsPerPerson * _costPerRespirator) + totalCostPpe + totalEntryPrepCost + totalDeconLineCost,
                TotalPpeUnits = new Dictionary<PpeLevel, int>()
                {
                    { PpeLevel.A, (int)Math.Ceiling((ppePerLevelPerTeam[PpeLevel.A] * _personnelRequiredPerTeam.Values.Sum() * totalEntries)) },
                    { PpeLevel.B, (int)Math.Ceiling((ppePerLevelPerTeam[PpeLevel.B] * _personnelRequiredPerTeam.Values.Sum() * totalEntries)) },
                    { PpeLevel.C, (int)Math.Ceiling((ppePerLevelPerTeam[PpeLevel.C] * _personnelRequiredPerTeam.Values.Sum() * totalEntries)) },
                    { PpeLevel.D, (int)Math.Ceiling((ppePerLevelPerTeam[PpeLevel.D] * _personnelRequiredPerTeam.Values.Sum() * totalEntries)) }
                }
            };
        }
    }
}