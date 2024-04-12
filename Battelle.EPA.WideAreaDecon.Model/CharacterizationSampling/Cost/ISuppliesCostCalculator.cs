using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Cost
{
    public interface ISuppliesCostCalculator
    {
        public SiteSamplingResourceAndCostResults CalculateSuppliesCost(double numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated);
    }
}