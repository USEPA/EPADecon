using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var desiredSporeThreshold = 0.0;
            var applicationMethods = new Dictionary<SurfaceType, ApplicationMethod>();
            var initialSporeLoading = new Dictionary<SurfaceType, double>();
            var treatmentDaysPerAm = new Dictionary<ApplicationMethod, double>();
            var efficacyValues = new Dictionary<SurfaceType, double>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                applicationMethods.Add(surface, ApplicationMethod.Fogging);
                initialSporeLoading.Add(surface, 200.0);
                efficacyValues.Add(surface, 50.0);
            }

            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                treatmentDaysPerAm.Add(method, 3.0);
            }

            //Calculator = new WorkDaysCalculator(
            //    applicationMethods,
            //    initialSporeLoading,
            //    desiredSporeThreshold,
            //    treatmentDaysPerAm,
            //    new EfficacyCalculator(efficacyValues)
            //);
        }

        [Test]
        public void CalculateCost()
        {
            //Tuple<double, int> decontaminationLabor = Calculator.CalculateWorkDays();

            //Assert.AreEqual(12.0, decontaminationLabor.Item1, 1e-6, "Incorrect cost calculated");
            //Assert.AreEqual(4.0, decontaminationLabor.Item2, 1e-6, "Incorrect decontamination rounds calculated");

        }
    }
}