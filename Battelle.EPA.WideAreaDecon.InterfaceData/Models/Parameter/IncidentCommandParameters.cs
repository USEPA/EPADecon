using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class IncidentCommandParameters : IBaseParameters
    {
        public Dictionary<PersonnelLevel, double> PersonnelReqPerTeam { get; set; }
        public double PersonnelOverheadDays { get; set; }
        public double RoundtripDays { get; set; }

        //Event parameters constructor
        public IncidentCommandParameters(
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            double roundtripDays,
            double personnelOverheadDays)
        {
            PersonnelReqPerTeam = personnelReqPerTeam;
            PersonnelOverheadDays = personnelOverheadDays;
            RoundtripDays = roundtripDays;
        }
    }
}
