using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.Model.Domain;
using Battelle.EPA.WideAreaDecon.Model.Interface;
using System;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model
{
    /// <summary>
    /// <inheritdoc cref="IAssignmentGenerator"/>
    /// </summary>
    public class AssignmentGenerator : IAssignmentGenerator
    {
        // Assumption: VS and CL cannot occur simultaneously in same building
        // Assumption: VS always happens before CL
        /// <summary>
        /// <inheritdoc cref="IAssignmentGenerator.GetAssignments"/>
        /// </summary>
        /// <exception cref="ArgumentNullException"></exception>
        public List<Assignment> GetAssignments(
            List<ScenarioRealizationResults> results,
            int decontaminationRounds,
            FrequencyValueType verificationSamplingFrequency,
            FrequencyValueType clearanceSamplingFrequency)
        {
            if (results == null)
            {
                throw new ArgumentNullException(nameof(results));
            }

            var assignments = new List<Assignment>();
            if (decontaminationRounds < 1)
            {
                return assignments;
            }

            foreach (var result in results)
            {
                var wasteSamplingAssignment = new Assignment
                {
                    ElementCategory = ElementCategory.WasteSampling,
                    DaysToCompletion = result.WasteSamplingResults.OnSiteDays,
                    SubsequentAssignments = null
                };
                var decontaminationAssignment = GetDecontaminationAssignments(
                    decontaminationRounds,
                    verificationSamplingFrequency,
                    clearanceSamplingFrequency,
                    result.DecontaminationResults.OnSiteDays,
                    result.VerificationSamplingResults.OnSiteDays - result.VerificationSamplingResults.Lag,
                    result.ClearanceSamplingResults.OnSiteDays - result.ClearanceSamplingResults.Lag,
                    result.VerificationSamplingResults.Lag,
                    result.ClearanceSamplingResults.Lag,
                    wasteSamplingAssignment);

                var sourceReductionAssignment = new Assignment
                {
                    ElementCategory = ElementCategory.SourceReduction,
                    DaysToCompletion = result.SourceReductionResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment> { decontaminationAssignment }
                };
                var characterizationSamplingAssignment = new Assignment
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = result.CharacterizationSamplingResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment> { sourceReductionAssignment }
                };

                assignments.Add(characterizationSamplingAssignment);
            }

            return assignments;
        }

        private static Assignment GetDecontaminationAssignments(
            int decontaminationRounds,
            FrequencyValueType vsFrequency,
            FrequencyValueType clFrequency,
            double decontaminationOnSiteDays,
            double vsOnSiteDaysNoLag,
            double clOnSiteDaysNoLag,
            double vsLag,
            double clLag,
            Assignment wasteSamplingAssignment)
        {
            var baseAssignment = wasteSamplingAssignment;
            var numberOfRepeats = decontaminationRounds;

            // defines assignment to be repeated for every round of decon
            Func<Assignment, Assignment> repeatedAssignment = (next) => new Assignment
            {
                ElementCategory = ElementCategory.Decontamination,
                DaysToCompletion = decontaminationOnSiteDays / decontaminationRounds,
                SubsequentAssignments = new List<Assignment> { next }
            };

            var deconOnSiteDaysPerRoundOfDecon = decontaminationOnSiteDays / decontaminationRounds;
            var vsOnSiteDaysPerRoundOfDecon = vsOnSiteDaysNoLag / decontaminationRounds;
            var vsLagPerRoundOfDecon = vsLag / decontaminationRounds;
            var clOnSiteDaysPerRoundOfDecon = clOnSiteDaysNoLag / decontaminationRounds;
            var clLagPerRoundOfDecon = clLag / decontaminationRounds;

            if (clFrequency == FrequencyValueType.Never && vsFrequency == FrequencyValueType.Once)
            {
                baseAssignment = new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = vsOnSiteDaysNoLag,
                    LagPrecedingSubsequentAssignments = vsLag,
                    SubsequentAssignments = new List<Assignment> { wasteSamplingAssignment }
                };
            }
            if (clFrequency == FrequencyValueType.Once && vsFrequency != FrequencyValueType.Once)
            {
                baseAssignment = new Assignment
                {
                    ElementCategory = ElementCategory.ClearanceSampling,
                    DaysToCompletion = clOnSiteDaysNoLag,
                    LagPrecedingSubsequentAssignments = clLag,
                    SubsequentAssignments = new List<Assignment> { wasteSamplingAssignment }
                };
            }
            if (clFrequency != FrequencyValueType.Multiple && vsFrequency == FrequencyValueType.Multiple)
            {
                repeatedAssignment = (next) => new Assignment()
                {
                    ElementCategory = ElementCategory.Decontamination,
                    DaysToCompletion = deconOnSiteDaysPerRoundOfDecon,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.VerificationSampling,
                            DaysToCompletion = vsOnSiteDaysPerRoundOfDecon,
                            LagPrecedingSubsequentAssignments = vsLagPerRoundOfDecon,
                            SubsequentAssignments = new List<Assignment> { next }
                        }
                    }
                };
            }
            if (clFrequency == FrequencyValueType.Multiple && vsFrequency != FrequencyValueType.Multiple)
            {
                repeatedAssignment = (next) => new Assignment
                {
                    ElementCategory = ElementCategory.Decontamination,
                    DaysToCompletion = deconOnSiteDaysPerRoundOfDecon,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.ClearanceSampling,
                            DaysToCompletion = clOnSiteDaysPerRoundOfDecon,
                            LagPrecedingSubsequentAssignments = clLagPerRoundOfDecon,
                            SubsequentAssignments = new List<Assignment> { next }
                        }
                    }
                };
            }
            if (clFrequency == FrequencyValueType.Once && vsFrequency == FrequencyValueType.Once)
            {
                baseAssignment = new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = vsOnSiteDaysNoLag,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.ClearanceSampling,
                            DaysToCompletion = clOnSiteDaysNoLag,
                            LagPrecedingSubsequentAssignments = Math.Max(clLag, vsLag - clOnSiteDaysNoLag),
                            SubsequentAssignments = new List<Assignment> { wasteSamplingAssignment }
                        }
                    }
                };
            }
            if (clFrequency == FrequencyValueType.Multiple && vsFrequency == FrequencyValueType.Once)
            {
                numberOfRepeats--;
                baseAssignment = new Assignment
                {
                    ElementCategory = ElementCategory.Decontamination,
                    DaysToCompletion = deconOnSiteDaysPerRoundOfDecon,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.VerificationSampling,
                            DaysToCompletion = vsOnSiteDaysNoLag,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.ClearanceSampling,
                                    DaysToCompletion = clOnSiteDaysPerRoundOfDecon,
                                    LagPrecedingSubsequentAssignments = Math.Max(clLagPerRoundOfDecon, vsLag - clOnSiteDaysPerRoundOfDecon),
                                    SubsequentAssignments = new List<Assignment> { wasteSamplingAssignment }
                                }
                            }
                        }
                    }
                };
            }
            if (clFrequency == FrequencyValueType.Multiple && vsFrequency == FrequencyValueType.Multiple)
            {
                repeatedAssignment = (next) => new Assignment
                {
                    ElementCategory = ElementCategory.Decontamination,
                    DaysToCompletion = deconOnSiteDaysPerRoundOfDecon,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.VerificationSampling,
                            DaysToCompletion = vsOnSiteDaysPerRoundOfDecon,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.ClearanceSampling,
                                    DaysToCompletion = clOnSiteDaysPerRoundOfDecon,
                                    LagPrecedingSubsequentAssignments = Math.Max(clLagPerRoundOfDecon, vsLagPerRoundOfDecon - clOnSiteDaysPerRoundOfDecon),
                                    SubsequentAssignments = new List<Assignment> { next }
                                }
                            }
                        }
                    }
                };
            }

            var result = baseAssignment;
            for (int i = 0; i < numberOfRepeats; i++)
            {
                result = repeatedAssignment(result);
            }

            return result;
        }
    }
}
