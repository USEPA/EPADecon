using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Providers
{
    [TestFixture]
    internal class ExcelModifyParameterParameterListProviderTest
    {
        private static string TestFileName => @"InputFiles\ModifyParameters.xlsx";

        [Test]
        public void ReadFromExcel()
        {
            var modifyParameter = new ExcelModifyParameterParameterListProvider
            {
                FileName = TestFileName,
                GenericSheetNames = new[]
                {
                    ParameterNames.IncidentCommand,
                    ParameterNames.CharacterizationSampling,
                    ParameterNames.SourceReduction,
                    ParameterNames.Decontamination,
                    ParameterNames.VerificationSampling,
                    ParameterNames.ClearanceSampling,
                    ParameterNames.WasteSampling,
                    ParameterNames.Other,
                    ParameterNames.Cost
                }
            };

            _ = modifyParameter.GetParameterList();

            Assert.Pass();
        }
    }
}