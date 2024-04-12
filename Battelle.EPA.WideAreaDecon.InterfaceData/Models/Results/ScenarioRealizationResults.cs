namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class ScenarioRealizationResults
    {
        public CharacterizationSamplingResults CharacterizationSamplingResults { get; set; }
        public SourceReductionResults SourceReductionResults { get; set; }
        public DecontaminationResults DecontaminationResults { get; set; }
        public VerificationSamplingResults VerificationSamplingResults { get; set; }
        public ClearanceSamplingResults ClearanceSamplingResults { get; set; }
        public WasteSamplingResults WasteSamplingResults { get; set; }
        public GeneralResults GeneralResults { get; set; }
    }
}
