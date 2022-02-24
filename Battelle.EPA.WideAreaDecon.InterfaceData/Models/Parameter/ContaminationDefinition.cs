using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using Battelle.RiskAssessment.Common.Statistics;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class ContaminationDefinition: IParameter
    {
        public EnumeratedParameter<DecontaminationElement> AreaContaminated { get; set; }
        public EnumeratedParameter<DecontaminationElement> Loading { get; set; }
        public ParameterType Type { get; } = ParameterType.ContaminationDefinition;
        public ParameterMetaData MetaData { get; set; }
        public IDistribution CreateDistribution()
        {
            throw new System.NotImplementedException();
        }

        public string GetTextValue()
        {
            throw new System.NotImplementedException();
        }
    }
}