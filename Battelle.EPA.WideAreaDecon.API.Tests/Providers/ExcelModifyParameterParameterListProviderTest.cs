using Battelle.EPA.WideAreaDecon.API.Providers;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Providers
{
    [TestFixture]
    internal class ExcelModifyParameterParameterListProviderTest
    {
        [SetUp]
        public void SetUp()
        {
        }

        private static string TestFileName => @"InputFiles\ModifyParameters.xlsx";

        [Test]
        public void ReadFromExcel()
        {
            var modifyParameter = new ExcelModifyParameterParameterListProvider
            {
                FileName = TestFileName,
                FileInfoSheetName = "Internal - File Info",
                GenericSheetNames = new[]
                {
                    "Incident Command",
                    "Characterization Sampling",
                    "Source Reduction",
                    "Decontamination",
                    "Other",
                    "Cost per Parameter"
                }
            };

            var paramList = modifyParameter.GetParameterList();

            Assert.Pass();
        }
    }
}