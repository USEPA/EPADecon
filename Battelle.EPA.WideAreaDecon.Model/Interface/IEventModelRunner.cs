using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Interface
{
    public interface IEventModelRunner
    {
        public EventResults RunEventModel(
            Dictionary<BuildingCategory, BuildingCategoryResults> indoorResults,
            ScenarioRealizationResults outdoorResults,
            ScenarioRealizationResults undergroundResults,
            ParameterList scenarioParameters);
    }
}
