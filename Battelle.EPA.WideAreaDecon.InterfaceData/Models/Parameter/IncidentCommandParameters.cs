using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class IncidentCommandParameters
    {
        private readonly Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        private readonly double personnelOverheadDays;
        private readonly double personnelRoundtripDays;

        public IncidentCommandParameters(ParameterFilter[] parameters)
        {

        }
    }
}
