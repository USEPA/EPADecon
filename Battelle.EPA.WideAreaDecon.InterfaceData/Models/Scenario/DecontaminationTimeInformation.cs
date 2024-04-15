using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Scenario
{
    public class DecontaminationTimeInformation : DecontaminationTreatmentInformation
    {
        public Dictionary<ElementDays, double> DecontaminationDays { get; set; }
    }
}
