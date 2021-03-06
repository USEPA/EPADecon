﻿using System;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            // Setting parameters
            string TestFileName1 = @"InputFiles\ModifyParametersTest.xlsx";
            var modifyParameters = new ExcelModifyParameterParameterListProvider
            {
                FileName = TestFileName1,
                GenericSheetNames = new[]
                {
                    "Decontamination"
                }
            };
            var scenarioDetails = modifyParameters.GetParameterList();

            var efficacyParameters = scenarioDetails.Filters.First(f => f.Name == "Efficacy").Parameters;

            var desiredSporeThreshold = 0.0;
            var applicationMethods = new Dictionary<SurfaceType, ApplicationMethod>();
            var initialSporeLoading = new Dictionary<SurfaceType, double>();
            var treatmentDaysPerAm = new Dictionary<ApplicationMethod, double>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                applicationMethods.Add(surface, ApplicationMethod.Fogging);
                initialSporeLoading.Add(surface, 40.0);
            }

            treatmentDaysPerAm.Add(ApplicationMethod.Fogging, 3.0);

            Calculator = new WorkDaysCalculator(
                applicationMethods,
                initialSporeLoading,
                desiredSporeThreshold,
                treatmentDaysPerAm,
                new EfficacyCalculator(efficacyParameters)
            );
        }

        [Test]
        public void CalculateCost()
        {
            Tuple<double, int> decontaminationLabor = Calculator.CalculateWorkDays();

            Assert.AreEqual(12.0, decontaminationLabor.Item1, 1e-6, "Incorrect workdays calculated");
            Assert.AreEqual(4.0, decontaminationLabor.Item2, 1e-6, "Incorrect decontamination rounds calculated");

        }
    }
}