using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Domain;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Time;
using FluentAssertions;
using NUnit.Framework;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand.Time
{
    public class OnsiteDaysCalculatorTests
    {
        private OnsiteDaysCalculator _sut;
        private double _overheadDays;

        [SetUp]
        public void Setup()
        {
            _overheadDays = 8.0;

            _sut = new OnsiteDaysCalculator(
                _overheadDays
            );
        }

        [Test]
        public void NoAssignments_ExpectedReturned()
        {
            // Setup
            var emptyAssignments = new List<Assignment>();
            var expected = _overheadDays;

            // SUT
            var result = _sut.CalculateOnSiteDays(emptyAssignments);

            // Assert
            result.Should().BeApproximately(expected, 1e-6);
        }

        [Test]
        public void NullAssignments_ExpectedReturned()
        {
            // Setup
            List<Assignment> nullAssignments = null;
            var expected = _overheadDays;

            // SUT
            var result = _sut.CalculateOnSiteDays(nullAssignments);

            // Assert
            result.Should().BeApproximately(expected, 1e-6);
        }

        [Test]
        public void OneAssignmentWithNoChildren_ExpectedReturned()
        {
            // Setup
            var assignments = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 4.2907549832647980198164,
                    SubsequentAssignments = null
                }
            };

            var expected = 4.2907549832647980198164 + _overheadDays;

            // SUT
            var result = _sut.CalculateOnSiteDays(assignments);

            // Assert
            result.Should().BeApproximately(expected, 1e-6);
        }

        [Test]
        public void OneAssignmentWithChildren_ExpectedReturned()
        {
            // Setup
            var assignments = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 5.3,
                    LagPrecedingSubsequentAssignments = 2.3,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.VerificationSampling,
                            DaysToCompletion = 6.7,
                            SubsequentAssignments = new List<Assignment>()
                        },
                        new Assignment
                        {
                            ElementCategory = ElementCategory.Decontamination,
                            DaysToCompletion = 8.1,
                            LagPrecedingSubsequentAssignments = 0.5,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.VerificationSampling,
                                    DaysToCompletion = 2.1,
                                    SubsequentAssignments = new List<Assignment>()
                                }
                            }
                        }
                    }
                }
            };
            var expected = 5.3 + 2.3 + 6.7 + (8.1 + 0.5 - 6.7) + 2.1 + _overheadDays;

            // SUT
            var result = _sut.CalculateOnSiteDays(assignments);

            // Assert
            result.Should().BeApproximately(expected, 1e-6);
        }

        [Test]
        public void MultipleAssignmentsWithoutChildrenSameTeam_ExpectedReturned()
        {
            // Setup
            var assignments = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 4.2,
                    SubsequentAssignments = new List<Assignment>()
                },
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 6.2,
                    SubsequentAssignments = null
                },
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 11.3,
                    SubsequentAssignments = null
                }
            };
            var expected = 4.2 + 6.2 + 11.3 + _overheadDays;

            // SUT
            var result = _sut.CalculateOnSiteDays(assignments);

            // Assert
            result.Should().BeApproximately(expected, 1e-6);
        }

        [Test]
        public void MultipleAssignmentsWithoutChildrenDifferentTeams_ExpectedReturned()
        {
            // Setup
            var largestDaysToCompletion = 9.4;
            var assignments = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = largestDaysToCompletion / 2,
                    SubsequentAssignments = null
                },
                new Assignment
                {
                    ElementCategory = ElementCategory.Decontamination,
                    DaysToCompletion = largestDaysToCompletion,
                    SubsequentAssignments = null
                },
                new Assignment
                {
                    ElementCategory = ElementCategory.IncidentCommand,
                    DaysToCompletion = largestDaysToCompletion / 3,
                    SubsequentAssignments = null
                }
            };
            var expected = largestDaysToCompletion + _overheadDays;

            // SUT
            var result = _sut.CalculateOnSiteDays(assignments);

            // Assert
            result.Should().BeApproximately(expected, 1e-6);
        }

        [Test]
        public void MultipleAssignmentsWithoutChildrenDifferentTeamsButOneRepeat_ExpectedReturned()
        {
            // Setup
            var assignments = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 5,
                    SubsequentAssignments = null
                },
                new Assignment
                {
                    ElementCategory = ElementCategory.Decontamination,
                    DaysToCompletion = 7,
                    SubsequentAssignments = null
                },
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 4.2,
                    SubsequentAssignments = null
                }
            };
            var expected = 5 + 4.2 + _overheadDays;

            // SUT
            var result = _sut.CalculateOnSiteDays(assignments);

            // Assert
            result.Should().BeApproximately(expected, 1e-6);
        }

        [Test]
        public void MultipleAssignmentsWithChildren_ExpectedReturned()
        {
            // Setup
            var assignments = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 4.2,
                    LagPrecedingSubsequentAssignments = 1.0,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.IncidentCommand,
                            DaysToCompletion = 9,
                            LagPrecedingSubsequentAssignments = 0.5,
                            SubsequentAssignments = new List<Assignment>
                            {
                                new Assignment
                                {
                                    ElementCategory = ElementCategory.CharacterizationSampling,
                                    DaysToCompletion = 2.1,
                                    SubsequentAssignments = new List<Assignment>()
                                }
                            }
                        },
                        new Assignment
                        {
                            ElementCategory = ElementCategory.VerificationSampling,
                            DaysToCompletion = 3.6,
                            SubsequentAssignments = new List<Assignment>()
                        }
                    }
                },
                new Assignment
                {
                    ElementCategory = ElementCategory.Decontamination,
                    DaysToCompletion = 11.9,
                    SubsequentAssignments = new List<Assignment>()
                },
                new Assignment
                {
                    ElementCategory = ElementCategory.IncidentCommand,
                    DaysToCompletion = 2.5,
                    SubsequentAssignments = new List<Assignment>()
                }
            };
            var expected = (4.2 + 1.0) + (9 + 0.5) + 2.1 + _overheadDays;

            // SUT
            var result = _sut.CalculateOnSiteDays(assignments);

            // Assert
            result.Should().BeApproximately(expected, 1e-6);
        }

        [Test]
        public void OriginalTest_ExpectedReturns()
        {
            // Setup
            var assignments = new List<Assignment>
            {
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 58.5358450143538,
                    SubsequentAssignments = new List<Assignment>
                    {
                        new Assignment
                        {
                            ElementCategory = ElementCategory.VerificationSampling,
                            DaysToCompletion = 2.0,
                            SubsequentAssignments = new List<Assignment>()
                        },
                        new Assignment
                        {
                            ElementCategory = ElementCategory.VerificationSampling,
                            DaysToCompletion = 4.0,
                            SubsequentAssignments = new List<Assignment>()
                        }
                    }
                },
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 2.45732949434734,
                    SubsequentAssignments = null
                },
                new Assignment
                {
                    ElementCategory = ElementCategory.VerificationSampling,
                    DaysToCompletion = 12.0,
                    SubsequentAssignments = null
                }
            };
            var expected = 86.9931745087011;

            // SUT
            var result = _sut.CalculateOnSiteDays(assignments);

            // Assert
            Assert.AreEqual(expected, result, 1e-6, "Incorrect onsite days calculated");
        }
    }
}
