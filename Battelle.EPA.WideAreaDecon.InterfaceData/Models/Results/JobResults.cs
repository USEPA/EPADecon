using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class JobResults
    {
        public ScenarioTypeResults scenarioResults { get; set; }
        public EventResults eventResults { get; set; }
    }
}
