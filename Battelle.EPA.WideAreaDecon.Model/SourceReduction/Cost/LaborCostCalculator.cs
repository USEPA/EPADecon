using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction.Cost
{
    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly double _massPerSa;
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;
        private readonly Dictionary<PersonnelLevel, double> _personnelPerTeam;

        public LaborCostCalculator(
            Dictionary<PersonnelLevel, double> personnelPerTeam,
            Dictionary<PersonnelLevel, double> personnelHourlyRate,
            double massPerSa)
        {
            _personnelPerTeam = personnelPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _massPerSa = massPerSa;
        }
        
        public double CalculateLaborCost(double onsiteDays, double numberTeams, double saToBeSourceReduced,
            double costPerTonRemoved, double area)
        {
            var personnelHoursCost = _personnelPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            return onsiteDays * GlobalConstants.HoursPerWorkDay * numberTeams * personnelHoursCost +
                (saToBeSourceReduced * area) * _massPerSa * costPerTonRemoved;
        }
    }
}