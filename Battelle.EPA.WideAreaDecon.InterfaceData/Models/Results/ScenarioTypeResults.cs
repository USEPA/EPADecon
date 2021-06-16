using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class ScenarioTypeResults
    {
        public Dictionary<BuildingCategory, ScenarioRealizationResults> indoorResults { get; set; }
        public ScenarioRealizationResults outdoorResults { get; set; }
        public ScenarioRealizationResults undergroundResults { get; set; }
    }
}
