using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using Battelle.EPA.WideAreaDecon.Model.VerificationSampling;
using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling;

namespace Battelle.EPA.WideAreaDecon.Model.Domain
{
    public class EventCalculators
    {
        public CharacterizationSamplingCostCalculator CharacterizationSamplingCostCalculator { get; set; }
        public SourceReductionCostCalculator SourceReductionCostCalculator { get; set; }
        public DecontaminationCostCalculator DecontaminationCostCalculator { get; set; }
        public VerificationSamplingCostCalculator VerificationSamplingCostCalculator { get; set; }
        public ClearanceSamplingCostCalculator ClearanceSamplingCostCalculator { get; set; }
        public WasteSamplingCostCalculator WasteSamplingCostCalculator { get; set; }
        public IncidentCommandCostCalculator IncidentCommandCostCalculator { get; set; }
    }
}
