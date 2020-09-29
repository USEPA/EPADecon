using NUnit.Framework;
<<<<<<< HEAD
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
=======
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
>>>>>>> model-development

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class SuppliesCostCalculatorTests
    {
        private AnalysisQuantCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
<<<<<<< HEAD
            Calculator = new SuppliesCostCalculator(5.0, 10.0, 15.0, 15.0, 10.0, 0.25, 0.5, 20.0, 1000.0, 1000.0);
=======
            Calculator = new AnalysisQuantCostCalculator(10.0, 20.0, 15.0, 5.0, 10.0, 16.0);
>>>>>>> model-development
        }

        [Test]
        public void CalculateAnalysisQuantCost()
        {
<<<<<<< HEAD
            Assert.AreEqual((185 / 3), Calculator.CalculateSuppliesCost(), 1e-6, "Incorrect supplies cost calculated");
            Assert.AreEqual((1 / 3), Calculator.CalculateWorkDays(), 1e-6, "Incorrect work days cost calculated");
=======
            Assert.AreEqual(19.0, Calculator.CalculateAnalysisQuantCost(), 1e-6, "Incorrect cost calculated");
>>>>>>> model-development
        }
    }
}