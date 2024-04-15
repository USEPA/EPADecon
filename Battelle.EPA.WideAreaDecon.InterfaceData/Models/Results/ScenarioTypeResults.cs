using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class ScenarioTypeResults
    {
        public Dictionary<BuildingCategory, BuildingCategoryResults> IndoorResults { get; set; }
        public ScenarioRealizationResults OutdoorResults { get; set; }
        public ScenarioRealizationResults UndergroundResults { get; set; }
    }
}
