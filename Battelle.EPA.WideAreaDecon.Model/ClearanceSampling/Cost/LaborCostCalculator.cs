using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Cost
{
    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;

        public LaborCostCalculator(
            Dictionary<PersonnelLevel, double> personnelRequiredPerTeam,
            Dictionary<PersonnelLevel, double> personnelHourlyRate)
        {
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
        }
        
        public double CalculateLaborCost(double onsiteDays, double numberTeams)
        {
            var personnelHoursCost = _personnelRequiredPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            return onsiteDays * GlobalConstants.HoursPerWorkDay * numberTeams * personnelHoursCost;
        }
    }
}