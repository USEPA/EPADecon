using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time
{
    public interface ILaborDaysCalculator
    {
        public double CalculateLaborDays(double numberTeams, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated);
    }
}
