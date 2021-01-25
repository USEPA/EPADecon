using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class SourceReductionParameters
    {
        private readonly double surfaceAreaToBeSourceReduced;
        private readonly double massPerSurfaceArea;
        private readonly double massRemovedPerHourPerTeam;
        private readonly double numEntriesPerDay;
        private readonly double respiratorsPerPerson;
        private readonly double hoursEntering;
        private readonly double hoursExiting;
        private readonly double numTeams;
        private readonly Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        private readonly double personnelOverheadDays;
        private readonly double personnelRoundtripDays;
        private readonly Dictionary<PpeLevel, double> ppeRequired;

        public SourceReductionParameters(ParameterFilter[] parameters)
        {

        }
    }
}
