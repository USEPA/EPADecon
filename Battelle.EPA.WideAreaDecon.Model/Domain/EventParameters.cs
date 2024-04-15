using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Domain
{
    public class EventParameters
    {
        public CharacterizationSamplingParameters CharacterizationSamplingParameters { get; set; }
        public SourceReductionParameters SourceReductionParameters { get; set; }
        public DecontaminationParameters DecontaminationParameters { get; set; }
        public VerificationSamplingParameters VerificationSamplingParameters { get; set; }
        public ClearanceSamplingParameters ClearanceSamplingParameters { get; set; }
        public WasteSamplingParameters WasteSamplingParameters { get; set; }
        public IncidentCommandParameters IncidentCommandParameters { get; set; }
        public OtherParameters OtherParameters { get; set; }
        public CostParameters CostParameters { get; set; }
    }
}
