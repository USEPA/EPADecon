using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class ScenarioRealizationResults
    {
        public GenericElementResults characterizationSamplingResults { get; set; }
        public GenericElementResults sourceReductionResults { get; set; }
        public GenericElementResults decontaminationResults { get; set; }
        public GenericElementResults wasteSamplingResults { get; set; }
        public IncidentCommandResults incidentCommandResults { get; set; }
        public GeneralResults generalResults { get; set; }
    }
}
