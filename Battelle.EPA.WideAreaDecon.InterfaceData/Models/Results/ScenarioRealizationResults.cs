using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class ScenarioRealizationResults
    {
        public GenericPhaseResults characterizationSamplingResults { get; set; }
        public GenericPhaseResults sourceReductionResults { get; set; }
        public GenericPhaseResults decontaminationResults { get; set; }
        public GenericPhaseResults wasteSamplingResults { get; set; }
        public IncidentCommandResults incidentCommandResults { get; set; }
        public GeneralResults generalResults { get; set; }
    }
}
