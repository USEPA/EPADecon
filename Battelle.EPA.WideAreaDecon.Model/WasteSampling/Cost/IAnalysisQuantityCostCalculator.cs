using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public interface IAnalysisQuantityCostCalculator
    {
        public double CalculateAnalysisQuantityCost(double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated);
    }
}