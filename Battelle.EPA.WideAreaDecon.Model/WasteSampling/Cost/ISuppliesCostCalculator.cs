using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public interface ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated);
    }
}