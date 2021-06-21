using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class EfficacyCalculatorTests
    {
        private EfficacyCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
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

            Calculator = new EfficacyCalculator(efficacyParameters);
        }

        [Test]
        public void CalculateCost()
        {
            var initialSporeLoading = new Dictionary<SurfaceType, double>();
            var newSporeLoading = new Dictionary<SurfaceType, double>();
            var treatmentMethods = new Dictionary<SurfaceType, ApplicationMethod>();
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                initialSporeLoading.Add(surface, 20.0);
                newSporeLoading.Add(surface, 10.0);

                treatmentMethods.Add(surface, ApplicationMethod.Fogging);
            }

            Assert.AreEqual(newSporeLoading.Values.Sum(),
                Calculator.CalculateEfficacy(initialSporeLoading, treatmentMethods).Values.Sum(), 1e-6, "Incorrect efficacy values calculated");
        }
    }
}