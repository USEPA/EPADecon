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
                FileName = TestFileName
            };

            var paramList = defineScenario.GetParameterList();
            Assert.Pass();
        }
    }
}