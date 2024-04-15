using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public interface IAnalysisQuantityCostCalculator
    {
        public double CalculateAnalysisQuantityCost(int deconTreatments, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated);
    }
}