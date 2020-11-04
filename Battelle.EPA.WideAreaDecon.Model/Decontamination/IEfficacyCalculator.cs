using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface IEfficacyCalculator
    {
        public Dictionary<SurfaceType, double> CalculateEfficacy(Dictionary<SurfaceType, double> _initialSporeLoading);
    }
}