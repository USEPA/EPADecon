using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.Model.Domain;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Interface
{
    /// <summary>
    /// Allows for work across all locations to be completed concurrently
    /// </summary>
    public interface IAssignmentGenerator
    {
        /// <summary>
        /// Creates assignments based on the given values
        /// </summary>
        /// <param name="results">The list of scenario realization results calculated by the model</param>
        /// <param name="decontaminationRounds">The number of decontamination rounds</param>
        /// <param name="verificationSamplingFrequency">The frequency of Verification Sampling</param>
        /// <param name="clearanceSamplingFrequency">The frequency of Clearance Sampling</param>
        /// <returns></returns>
        List<Assignment> GetAssignments(
            List<ScenarioRealizationResults> results,
            int decontaminationRounds,
            FrequencyValueType verificationSamplingFrequency,
            FrequencyValueType clearanceSamplingFrequency);
    }
}
