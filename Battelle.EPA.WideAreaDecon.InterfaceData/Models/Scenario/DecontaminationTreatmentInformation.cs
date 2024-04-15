using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Scenario
{
    public class DecontaminationTreatmentInformation
    {
        public List<Dictionary<ApplicationMethod, double>> DecontaminationTreatments { get; set; }
        public Dictionary<SurfaceType, int> SurfaceTreatments { get; set; }
    }
}
