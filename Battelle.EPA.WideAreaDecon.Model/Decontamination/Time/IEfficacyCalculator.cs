using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Time
{
    public interface IEfficacyCalculator
    {
        public Dictionary<SurfaceType, double> CalculateEfficacy(Dictionary<SurfaceType, double> initialSporeLoading, Dictionary<SurfaceType, ApplicationMethod> treatmentMethods);
    }
}