﻿using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class IncidentCommandParameters
    {
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverheadDays;
        public double roundtripDays;

        public IncidentCommandParameters(
            Dictionary<PersonnelLevel, double> _personnelReqPerTeam,
            double _personnelOverheadDays,
            double _roundtripDays)
        {
            personnelReqPerTeam = _personnelReqPerTeam;
            personnelOverheadDays = _personnelOverheadDays;
            roundtripDays = _roundtripDays;
        }
    }
}
