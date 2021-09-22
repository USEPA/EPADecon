using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost
{
    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;
        private readonly Dictionary<PersonnelLevel, double> _personnelReqPerTeam;

        public LaborCostCalculator(
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            Dictionary<PersonnelLevel, double> personnelHourlyRate)
        {
            _personnelReqPerTeam = personnelReqPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
        }

        public double CalculateLaborCost(double onsiteDays, double numberTeams)
        {
            var personnelHoursCost = _personnelReqPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            return onsiteDays * GlobalConstants.HoursPerWorkDay * numberTeams * personnelHoursCost;
        }
    }
}