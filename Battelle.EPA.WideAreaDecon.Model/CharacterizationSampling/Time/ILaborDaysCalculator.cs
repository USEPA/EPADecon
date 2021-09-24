using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Time
{
    public interface ILaborDaysCalculator
    {
        public double CalculateLaborDays(double _numberTeams, double _fractionSampledWipe, double _fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> _areaContaminated);
    }
}
