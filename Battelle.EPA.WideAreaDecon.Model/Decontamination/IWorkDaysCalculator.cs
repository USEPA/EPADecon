using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface IWorkDaysCalculator
    {
        public double CalculateWorkDays(Dictionary<SurfaceType, double> _initialSporeLoading);
    }
}