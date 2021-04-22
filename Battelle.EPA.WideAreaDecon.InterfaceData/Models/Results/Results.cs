using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class Results
    {
        public GenericPhaseResults preDeconCharacterizationSamplingResults { get; set; }
        public GenericPhaseResults postDeconCharacterizationSamplingResults { get; set; }
        public GenericPhaseResults totalCharacterizationSamplingResults { get; set; }
        public GenericPhaseResults sourceReductionResults { get; set; }
        //public GenericPhaseResults decontaminationResults { get; set; }
        //TEMPORARY DECONTAMINATION RESULTS FOR MODEL VERIFICATION
        public TempDeconResults decontaminationResults { get; set; }
        public IncidentCommandResults incidentCommandResults { get; set; }
        public OtherResults otherResults { get; set; }
        public GeneralResults generalResults { get; set; }
    }
}
