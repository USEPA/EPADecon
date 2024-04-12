using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class BuildingCategoryResults
    {
        public ScenarioRealizationResults RealizationResults { get; set; }
        public int BuildingCount { get; set; }
        public List<double> BuildingAreas { get; set; }
    }
}
