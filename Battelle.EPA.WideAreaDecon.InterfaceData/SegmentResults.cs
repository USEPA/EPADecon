using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.InterfaceData
{
    public class SegmentResults
    {
        public List<ScenarioRealizationResults> Results { get; set; }

        public ScenarioRealizationResults SumResults()
        {
            List<CharacterizationSamplingResults> csResults = new List<CharacterizationSamplingResults>();
            List<SourceReductionResults> srResults = new List<SourceReductionResults>();
            List<DecontaminationResults> dcResults = new List<DecontaminationResults>();
            List<VerificationSamplingResults> vsResults = new List<VerificationSamplingResults>();
            List<ClearanceSamplingResults> clResults = new List<ClearanceSamplingResults>();
            List<WasteSamplingResults> wsResults = new List<WasteSamplingResults>();
            List<GeneralResults> genResults = new List<GeneralResults>();

            foreach (var s in Results)
            {
                csResults.Add(s.CharacterizationSamplingResults);
                srResults.Add(s.SourceReductionResults);
                dcResults.Add(s.DecontaminationResults);
                vsResults.Add(s.VerificationSamplingResults);
                clResults.Add(s.ClearanceSamplingResults);
                wsResults.Add(s.WasteSamplingResults);
                genResults.Add(s.GeneralResults);
            }

            ScenarioRealizationResults summedResults = new ScenarioRealizationResults
            {
                CharacterizationSamplingResults = CharacterizationSamplingResults.SumResults(csResults),
                SourceReductionResults = SourceReductionResults.SumResults(srResults),
                DecontaminationResults = DecontaminationResults.SumResults(dcResults),
                VerificationSamplingResults = VerificationSamplingResults.SumResults(vsResults),
                ClearanceSamplingResults = ClearanceSamplingResults.SumResults(clResults),
                WasteSamplingResults = WasteSamplingResults.SumResults(wsResults),
                GeneralResults = GeneralResults.SumResults(genResults)
            };

            return summedResults;
        }
    }
}
