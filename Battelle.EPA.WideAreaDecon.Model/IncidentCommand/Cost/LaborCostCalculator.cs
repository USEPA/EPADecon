using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Cost
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

        public double CalculateLaborCost(double onSiteDays)
        {
            var personnelHoursCost = _personnelReqPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            var laborHours = GlobalConstants.HoursPerWorkDay * onSiteDays;

            return (laborHours * personnelHoursCost);
        }
    }
}