using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Model;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Scenario
{
    public class BuildingData
    {
        public Dictionary<CharacterizationSamplingParameters, ParameterData> CharacterizationSampling { get; set; }
        public Dictionary<SourceReductionParameters, ParameterData> SourceReduction { get; set; }
        public Dictionary<DecontaminationParameters, ParameterData> Decontamination { get; set; }
        public Dictionary<EfficacyParameters, ParameterData> Efficacy { get; set; }
        public Dictionary<IncidentCommandParameters, ParameterData> IncidentCommand { get; set; }
        public Dictionary<CostParameters, ParameterData> Cost { get; set; }
    }
}
