using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.Model.Domain;
using Battelle.EPA.WideAreaDecon.Model.Tests.Helpers;
using FluentAssertions;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Tests
{
    public class AssignmentGeneratorTests
    {
        private AssignmentGenerator _sut;
        private int _decontaminationRounds;
        private List<ScenarioRealizationResults> _results;
        private ScenarioRealizationResults _firstResult;

        [SetUp]
        public void Setup()
        {
            _decontaminationRounds = 2;

            var indoorResults = ResultsCalculatorTestAssets.IndoorResults[ResultsCalculatorTestAssets.BuildingCategory];

            indoorResults.VerificationSamplingResults.Lag = 1;
            indoorResults.ClearanceSamplingResults.Lag = 1;

            _results = new List<ScenarioRealizationResults>
            {
                indoorResults
            };
            _firstResult = _results.First();

            _sut = new AssignmentGenerator();
        }

        [Test]
        public void NullResults_Exception()
        {
            // Setup
            List<ScenarioRealizationResults> results = null;

            var decontaminationRounds = 0;
            var vsFrequency = FrequencyValueType.Never;
            var clFrequency = FrequencyValueType.Never;

            // SUT & Assert
            _sut.Invoking(sut => sut.GetAssignments(
                    results,
                    decontaminationRounds,
                    vsFrequency,
                    clFrequency
                )).Should().Throw<ArgumentNullException>();
        }

        [Test]
        public void NoDecontaminationRounds_ExpectedReturned()
        {
            // Setup
            var decontaminationRounds = 0;

            var results = new List<ScenarioRealizationResults>();
            var vsFrequency = FrequencyValueType.Never;
            var clFrequency = FrequencyValueType.Never;
            var expected = new List<Assignment>();

            // SUT
            var assignments = _sut.GetAssignments(results, decontaminationRounds, vsFrequency, clFrequency);

            // Assert
            assignments.Should().BeEquivalentTo(expected);
        }

        [Test]
        // Expected order: CS SR DC DC WS
        public void NeverVSNeverCL_ExpectedReturned()
        {
            // Setup
            var vsFrequency = FrequencyValueType.Never;
            var clFrequency = FrequencyValueType.Never;

            var expected = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = _firstResult.CharacterizationSamplingResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.SourceReduction,
                            DaysToCompletion = _firstResult.SourceReductionResults.OnSiteDays,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.Decontamination,
                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                    SubsequentAssignments = new List<Assignment>
                                    {
                                        new Assignment
                                        {
                                            ElementCategory = ElementCategory.Decontamination,
                                            DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                            SubsequentAssignments = new List<Assignment>
                                            {
                                                new Assignment
                                                {
                                                    ElementCategory = ElementCategory.WasteSampling,
                                                    DaysToCompletion = _firstResult.WasteSamplingResults.OnSiteDays,
                                                }
                                            }
                                        },
                                    }
                                },
                            }
                        }
                    }
                }
            };

            // SUT
            var assignments = _sut.GetAssignments(_results, _decontaminationRounds, vsFrequency, clFrequency);

            // Assert
            assignments.Should().BeEquivalentTo(expected);
        }

        [Test]
        // Expected order: CS SR DC DC CL WS
        public void NeverVSOnceCL_ExpectedReturned()
        {
            // Setup
            var vsFrequency = FrequencyValueType.Never;
            var clFrequency = FrequencyValueType.Once;

            var expected = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = _firstResult.CharacterizationSamplingResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.SourceReduction,
                            DaysToCompletion = _firstResult.SourceReductionResults.OnSiteDays,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.Decontamination,
                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                    SubsequentAssignments = new List<Assignment>
                                    {
                                        new Assignment
                                        {
                                            ElementCategory = ElementCategory.Decontamination,
                                            DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                            SubsequentAssignments = new List<Assignment>
                                            {
                                                new Assignment
                                                {
                                                    ElementCategory = ElementCategory.ClearanceSampling,
                                                    DaysToCompletion = (_firstResult.ClearanceSamplingResults.OnSiteDays - _firstResult.ClearanceSamplingResults.Lag),
                                                    LagPrecedingSubsequentAssignments = _firstResult.ClearanceSamplingResults.Lag,
                                                    SubsequentAssignments = new List<Assignment>
                                                    {
                                                        new Assignment
                                                        {
                                                            ElementCategory = ElementCategory.WasteSampling,
                                                            DaysToCompletion = _firstResult.WasteSamplingResults.OnSiteDays,
                                                        }
                                                    }
                                                },
                                            }
                                        },
                                    }
                                },
                            }
                        }
                    }
                }
            };

            // SUT
            var assignments = _sut.GetAssignments(_results, _decontaminationRounds, vsFrequency, clFrequency);

            // Assert
            assignments.Should().BeEquivalentTo(expected);
        }

        [Test]
        // Expected order: CS SR DC CL DC CL WS
        public void NeverVSAfterEveryRoundCL_ExpectedReturned()
        {
            // Setup
            var vsFrequency = FrequencyValueType.Never;
            var clFrequency = FrequencyValueType.Multiple;

            var expected = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = _firstResult.CharacterizationSamplingResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.SourceReduction,
                            DaysToCompletion = _firstResult.SourceReductionResults.OnSiteDays,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.Decontamination,
                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                    SubsequentAssignments = new List<Assignment>
                                    {
                                        new Assignment
                                        {
                                            ElementCategory = ElementCategory.ClearanceSampling,
                                            DaysToCompletion = (_firstResult.ClearanceSamplingResults.OnSiteDays - _firstResult.ClearanceSamplingResults.Lag) / _decontaminationRounds,
                                            LagPrecedingSubsequentAssignments = _firstResult.ClearanceSamplingResults.Lag / _decontaminationRounds,
                                            SubsequentAssignments = new List<Assignment>
                                            {
                                                new Assignment
                                                {
                                                    ElementCategory = ElementCategory.Decontamination,
                                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                                    SubsequentAssignments = new List<Assignment>
                                                    {
                                                        new Assignment
                                                        {
                                                            ElementCategory = ElementCategory.ClearanceSampling,
                                                            DaysToCompletion = (_firstResult.ClearanceSamplingResults.OnSiteDays - _firstResult.ClearanceSamplingResults.Lag) / _decontaminationRounds,
                                                            LagPrecedingSubsequentAssignments = _firstResult.ClearanceSamplingResults.Lag / _decontaminationRounds,
                                                            SubsequentAssignments = new List<Assignment>
                                                            {
                                                                new Assignment
                                                                {
                                                                    ElementCategory = ElementCategory.WasteSampling,
                                                                    DaysToCompletion = _firstResult.WasteSamplingResults.OnSiteDays,
                                                                }
                                                            }
                                                        },
                                                    }
                                                },
                                            }
                                        },
                                    }
                                },
                            }
                        }
                    }
                }
            };

            // SUT
            var assignments = _sut.GetAssignments(_results, _decontaminationRounds, vsFrequency, clFrequency);

            // Assert
            assignments.Should().BeEquivalentTo(expected);
        }

        [Test]
        // Expected order: CS SR DC DC VS WS
        public void OnceVSNeverCL_ExpectedReturned()
        {
            // Setup
            var vsFrequency = FrequencyValueType.Once;
            var clFrequency = FrequencyValueType.Never;

            var expected = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = _firstResult.CharacterizationSamplingResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.SourceReduction,
                            DaysToCompletion = _firstResult.SourceReductionResults.OnSiteDays,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.Decontamination,
                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                    SubsequentAssignments = new List<Assignment>
                                    {
                                        new Assignment
                                        {
                                            ElementCategory = ElementCategory.Decontamination,
                                            DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays/ _decontaminationRounds,
                                            SubsequentAssignments = new List<Assignment>
                                            {
                                                new Assignment
                                                {
                                                    ElementCategory = ElementCategory.VerificationSampling,
                                                    DaysToCompletion = _firstResult.VerificationSamplingResults.OnSiteDays - _firstResult.VerificationSamplingResults.Lag,
                                                    LagPrecedingSubsequentAssignments = _firstResult.VerificationSamplingResults.Lag,
                                                    SubsequentAssignments = new List<Assignment>
                                                    {
                                                        new Assignment
                                                        {
                                                            ElementCategory = ElementCategory.WasteSampling,
                                                            DaysToCompletion = _firstResult.WasteSamplingResults.OnSiteDays,
                                                        }
                                                    }
                                                },
                                            }
                                        },
                                    }
                                },
                            }
                        }
                    }
                }
            };

            // SUT
            var assignments = _sut.GetAssignments(_results, _decontaminationRounds, vsFrequency, clFrequency);

            // Assert
            assignments.Should().BeEquivalentTo(expected);
        }

        [Test]
        // Expected order: CS SR DC DC VS CL WS
        public void OnceVSOnceCL_ExpectedReturned()
        {
            // Setup
            var vsFrequency = FrequencyValueType.Once;
            var clFrequency = FrequencyValueType.Once;

            var expected = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = _firstResult.CharacterizationSamplingResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.SourceReduction,
                            DaysToCompletion = _firstResult.SourceReductionResults.OnSiteDays,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.Decontamination,
                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays/ _decontaminationRounds,
                                    SubsequentAssignments = new List<Assignment>
                                    {
                                        new Assignment
                                        {
                                            ElementCategory = ElementCategory.Decontamination,
                                            DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays/ _decontaminationRounds,
                                            SubsequentAssignments = new List<Assignment>
                                            {
                                                new Assignment
                                                {
                                                    ElementCategory = ElementCategory.VerificationSampling,
                                                    DaysToCompletion = _firstResult.VerificationSamplingResults.OnSiteDays - _firstResult.VerificationSamplingResults.Lag,
                                                    SubsequentAssignments = new List<Assignment>
                                                    {
                                                        new Assignment
                                                        {
                                                            ElementCategory = ElementCategory.ClearanceSampling,
                                                            DaysToCompletion = _firstResult.ClearanceSamplingResults.OnSiteDays - _firstResult.ClearanceSamplingResults.Lag,
                                                            LagPrecedingSubsequentAssignments = _firstResult.ClearanceSamplingResults.Lag,
                                                            SubsequentAssignments = new List<Assignment>
                                                            {
                                                                new Assignment
                                                                {
                                                                    ElementCategory = ElementCategory.WasteSampling,
                                                                    DaysToCompletion = _firstResult.WasteSamplingResults.OnSiteDays,
                                                                }
                                                            }
                                                        },
                                                    }
                                                },
                                            }
                                        },
                                    }
                                },
                            }
                        }
                    }
                }
            };

            // SUT
            var assignments = _sut.GetAssignments(_results, _decontaminationRounds, vsFrequency, clFrequency);

            // Assert
            assignments.Should().BeEquivalentTo(expected);
        }

        [Test]
        // Expected order: CS SR DC CL DC VS CL WS
        public void OnceVSAfterEveryRoundCL_ExpectedReturned()
        {
            // Setup
            var vsFrequency = FrequencyValueType.Once;
            var clFrequency = FrequencyValueType.Multiple;

            var expected = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = _firstResult.CharacterizationSamplingResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.SourceReduction,
                            DaysToCompletion = _firstResult.SourceReductionResults.OnSiteDays,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.Decontamination,
                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                    SubsequentAssignments = new List<Assignment>
                                    {
                                        new Assignment
                                        {
                                            ElementCategory = ElementCategory.ClearanceSampling,
                                            DaysToCompletion = (_firstResult.ClearanceSamplingResults.OnSiteDays - _firstResult.ClearanceSamplingResults.Lag) / _decontaminationRounds,
                                            LagPrecedingSubsequentAssignments = _firstResult.ClearanceSamplingResults.Lag / _decontaminationRounds,
                                            SubsequentAssignments = new List<Assignment>
                                            {
                                                new Assignment
                                                {
                                                    ElementCategory = ElementCategory.Decontamination,
                                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                                    SubsequentAssignments = new List<Assignment>
                                                    {
                                                        new Assignment
                                                        {
                                                            ElementCategory = ElementCategory.VerificationSampling,
                                                            DaysToCompletion = _firstResult.VerificationSamplingResults.OnSiteDays - _firstResult.VerificationSamplingResults.Lag,
                                                            SubsequentAssignments = new List<Assignment>
                                                            {
                                                                new Assignment
                                                                {
                                                                    ElementCategory = ElementCategory.ClearanceSampling,
                                                                    DaysToCompletion = (_firstResult.ClearanceSamplingResults.OnSiteDays - _firstResult.ClearanceSamplingResults.Lag) / _decontaminationRounds,
                                                                    LagPrecedingSubsequentAssignments = _firstResult.ClearanceSamplingResults.Lag / _decontaminationRounds,
                                                                    SubsequentAssignments = new List<Assignment>
                                                                    {
                                                                        new Assignment
                                                                        {
                                                                            ElementCategory = ElementCategory.WasteSampling,
                                                                            DaysToCompletion = _firstResult.WasteSamplingResults.OnSiteDays,
                                                                        }
                                                                    }
                                                                },
                                                            }
                                                        },
                                                    }
                                                },
                                            }
                                        }
                                    }
                                },
                            }
                        }
                    }
                }
            };

            // SUT
            var assignments = _sut.GetAssignments(_results, _decontaminationRounds, vsFrequency, clFrequency);

            // Assert
            assignments.Should().BeEquivalentTo(expected);
        }

        [Test]
        // Expected order: CS SR DC VS DC VS WS
        public void AfterEveryRoundVSNeverCL_ExpectedReturned()
        {
            // Setup
            var vsFrequency = FrequencyValueType.Multiple;
            var clFrequency = FrequencyValueType.Never;

            var expected = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = _firstResult.CharacterizationSamplingResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.SourceReduction,
                            DaysToCompletion = _firstResult.SourceReductionResults.OnSiteDays,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.Decontamination,
                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                    SubsequentAssignments = new List<Assignment>
                                    {
                                        new Assignment
                                        {
                                            ElementCategory = ElementCategory.VerificationSampling,
                                            DaysToCompletion = (_firstResult.VerificationSamplingResults.OnSiteDays - _firstResult.VerificationSamplingResults.Lag) / _decontaminationRounds,
                                            LagPrecedingSubsequentAssignments = _firstResult.VerificationSamplingResults.Lag / _decontaminationRounds,
                                            SubsequentAssignments = new List<Assignment>
                                            {
                                                new Assignment
                                                {
                                                    ElementCategory = ElementCategory.Decontamination,
                                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                                    SubsequentAssignments = new List<Assignment>
                                                    {
                                                        new Assignment
                                                        {
                                                            ElementCategory = ElementCategory.VerificationSampling,
                                                            DaysToCompletion = (_firstResult.VerificationSamplingResults.OnSiteDays - _firstResult.VerificationSamplingResults.Lag) / _decontaminationRounds,
                                                            LagPrecedingSubsequentAssignments = _firstResult.VerificationSamplingResults.Lag / _decontaminationRounds,
                                                            SubsequentAssignments = new List<Assignment>
                                                            {
                                                                new Assignment
                                                                {
                                                                    ElementCategory = ElementCategory.WasteSampling,
                                                                    DaysToCompletion = _firstResult.WasteSamplingResults.OnSiteDays,
                                                                }
                                                            }
                                                        },
                                                    }
                                                },
                                            }
                                        },
                                    }
                                },
                            }
                        }
                    }
                }
            };

            // SUT
            var assignments = _sut.GetAssignments(_results, _decontaminationRounds, vsFrequency, clFrequency);

            // Assert
            assignments.Should().BeEquivalentTo(expected);
        }

        [Test]
        // Expected order: CS SR DC VS DC VS CL WS
        public void AfterEveryRoundVSOnceCL_ExpectedReturned()
        {
            // Setup
            var vsFrequency = FrequencyValueType.Multiple;
            var clFrequency = FrequencyValueType.Once;

            var expected = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = _firstResult.CharacterizationSamplingResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.SourceReduction,
                            DaysToCompletion = _firstResult.SourceReductionResults.OnSiteDays,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.Decontamination,
                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                    SubsequentAssignments = new List<Assignment>
                                    {
                                        new Assignment
                                        {
                                            ElementCategory = ElementCategory.VerificationSampling,
                                            DaysToCompletion = (_firstResult.VerificationSamplingResults.OnSiteDays - _firstResult.VerificationSamplingResults.Lag)/ _decontaminationRounds,
                                            LagPrecedingSubsequentAssignments = _firstResult.VerificationSamplingResults.Lag / _decontaminationRounds,
                                            SubsequentAssignments = new List<Assignment>
                                            {
                                                new Assignment
                                                {
                                                    ElementCategory = ElementCategory.Decontamination,
                                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                                    SubsequentAssignments = new List<Assignment>
                                                    {
                                                        new Assignment
                                                        {
                                                            ElementCategory = ElementCategory.VerificationSampling,
                                                            DaysToCompletion = (_firstResult.VerificationSamplingResults.OnSiteDays - _firstResult.VerificationSamplingResults.Lag) / _decontaminationRounds,
                                                            LagPrecedingSubsequentAssignments = _firstResult.VerificationSamplingResults.Lag / _decontaminationRounds,
                                                            SubsequentAssignments = new List<Assignment>
                                                            {
                                                                new Assignment
                                                                {
                                                                    ElementCategory = ElementCategory.ClearanceSampling,
                                                                    DaysToCompletion = _firstResult.ClearanceSamplingResults.OnSiteDays - _firstResult.ClearanceSamplingResults.Lag,
                                                                    LagPrecedingSubsequentAssignments = _firstResult.ClearanceSamplingResults.Lag,
                                                                    SubsequentAssignments = new List<Assignment>
                                                                    {
                                                                        new Assignment
                                                                        {
                                                                            ElementCategory = ElementCategory.WasteSampling,
                                                                            DaysToCompletion = _firstResult.WasteSamplingResults.OnSiteDays,
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                    }
                                                },
                                            }
                                        },
                                    }
                                },
                            }
                        }
                    }
                }
            };

            // SUT
            var assignments = _sut.GetAssignments(_results, _decontaminationRounds, vsFrequency, clFrequency);

            // Assert
            assignments.Should().BeEquivalentTo(expected);
        }

        [Test]
        // Expected order: CS SR DC VS CL DC VS CL WS
        public void AfterEveryRoundVSAfterEveryRoundCL_ExpectedReturned()
        {
            // Setup
            var vsFrequency = FrequencyValueType.Multiple;
            var clFrequency = FrequencyValueType.Multiple;

            var expected = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = _firstResult.CharacterizationSamplingResults.OnSiteDays,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.SourceReduction,
                            DaysToCompletion = _firstResult.SourceReductionResults.OnSiteDays,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.Decontamination,
                                    DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                    SubsequentAssignments = new List<Assignment>
                                    {
                                        new Assignment
                                        {
                                            ElementCategory = ElementCategory.VerificationSampling,
                                            DaysToCompletion = (_firstResult.VerificationSamplingResults.OnSiteDays - _firstResult.VerificationSamplingResults.Lag) / _decontaminationRounds,
                                            SubsequentAssignments = new List<Assignment>
                                            {
                                                new Assignment
                                                {
                                                    ElementCategory = ElementCategory.ClearanceSampling,
                                                    DaysToCompletion = (_firstResult.ClearanceSamplingResults.OnSiteDays - _firstResult.ClearanceSamplingResults.Lag) / _decontaminationRounds,
                                                    LagPrecedingSubsequentAssignments = _firstResult.ClearanceSamplingResults.Lag / _decontaminationRounds,
                                                    SubsequentAssignments = new List<Assignment>
                                                    {
                                                        new Assignment
                                                        {
                                                            ElementCategory = ElementCategory.Decontamination,
                                                            DaysToCompletion = _firstResult.DecontaminationResults.OnSiteDays / _decontaminationRounds,
                                                            SubsequentAssignments = new List<Assignment>
                                                            {
                                                                new Assignment
                                                                {
                                                                    ElementCategory = ElementCategory.VerificationSampling,
                                                                    DaysToCompletion = (_firstResult.VerificationSamplingResults.OnSiteDays - _firstResult.VerificationSamplingResults.Lag) / _decontaminationRounds,
                                                                    SubsequentAssignments = new List<Assignment>
                                                                    {
                                                                        new Assignment
                                                                        {
                                                                            ElementCategory = ElementCategory.ClearanceSampling,
                                                                            DaysToCompletion = (_firstResult.ClearanceSamplingResults.OnSiteDays - _firstResult.ClearanceSamplingResults.Lag) / _decontaminationRounds,
                                                                            LagPrecedingSubsequentAssignments = _firstResult.ClearanceSamplingResults.Lag / _decontaminationRounds,
                                                                            SubsequentAssignments = new List<Assignment>
                                                                            {
                                                                                new Assignment
                                                                                {
                                                                                    ElementCategory = ElementCategory.WasteSampling,
                                                                                    DaysToCompletion = _firstResult.WasteSamplingResults.OnSiteDays,
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                            }
                                                        },
                                                    }
                                                }
                                            }
                                        },
                                    }
                                },
                            }
                        }
                    }
                }
            };

            // SUT
            var assignments = _sut.GetAssignments(_results, _decontaminationRounds, vsFrequency, clFrequency);

            // Assert
            assignments.Should().BeEquivalentTo(expected);
        }
    }
}
