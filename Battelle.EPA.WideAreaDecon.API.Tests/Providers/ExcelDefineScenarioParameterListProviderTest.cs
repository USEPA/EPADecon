using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Providers
{
    [TestFixture]
    internal class ExcelDefineScenarioParameterListProviderTest
    {
        private static string TestFileName => @"InputFiles\DefineScenario.xlsx";

        [Test]
        public void ReadFromExcel()
        {
            var defineScenario = new ExcelDefineScenarioParameterListProvider
            {
                FileName = TestFileName
            };

            _ = defineScenario.GetParameterList();

            Assert.Pass();
        }
    }
}