using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public interface ISuppliesCostCalculator
    {
        public WasteSamplingResourceAndCostResults CalculateSuppliesCost(int deconTreatments, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated);
    }
}