using System.IO;
using System;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Providers;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using NPOI.XSSF.UserModel;
using NUnit.Framework;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Providers
{
    [TestFixture]
    class ExcelDefineScenarioParameterListProviderTest
    {
        private static string TestFileName => @"InputFiles\DefineScenario.xlsx";
        [SetUp]
        public void SetUp()
        {

        }

        [Test]
        public void ReadFromExcel()
        {
            ExcelDefineScenarioParameterListProvider defineScenario = new ExcelDefineScenarioParameterListProvider
            {
                FileName = TestFileName,
                FileInfoSheetName = "Internal - File Info",
                GenericSheetNames = new []
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
