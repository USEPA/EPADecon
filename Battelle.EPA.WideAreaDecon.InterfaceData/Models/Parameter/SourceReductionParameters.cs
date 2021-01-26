using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class SourceReductionParameters
    {
        public double surfaceAreaToBeSourceReduced;
        public double massPerSurfaceArea;
        public double massRemovedPerHourPerTeam;
        public double numEntriesPerDay;
        public double respiratorsPerPerson;
        public double hoursEntering;
        public double hoursExiting;
        public double numTeams;
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverheadDays;
        public double personnelRoundtripDays;
        public Dictionary<PpeLevel, double> ppeRequired;

        public SourceReductionParameters(ParameterFilter[] parameters)
        {

        }
    }
}
