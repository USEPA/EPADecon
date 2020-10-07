using Battelle.EPA.WideAreaDecon.API.Providers;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Providers
{
    [TestFixture]
    internal class ExcelDefineScenarioParameterListProviderTest
    {
        [SetUp]
        public void SetUp()
        {
        }

        private static string TestFileName => @"InputFiles\DefineScenario.xlsx";

        [Test]
        public void ReadFromExcel()
        {
            var defineScenario = new ExcelDefineScenarioParameterListProvider
            {
                FileName = TestFileName,
                FileInfoSheetName = "Internal - File Info",
                GenericSheetNames = new[]
                {
                    "Extent of Contamination",
                    "Indoor Contamination",
                    "Incident Command",
                    "Characterization Sampling",
                    "Source Reduction",
                    "Decontamination",
                    "Cost per Parameter"
                }
            };

            var paramList = defineScenario.GetParameterList();
            Assert.Pass();
        }
    }
}