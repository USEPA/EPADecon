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
    class ExcelModifyParameterParameterListProviderTest
    {
        private static string TestFileName => @"InputFiles\ModifyParameters.xlsx";
        [SetUp]
        public void SetUp()
        {

        }

        [Test]
        public void ReadFromExcel()
        {
            ExcelModifyParameterParameterListProvider modifyParameter = new ExcelModifyParameterParameterListProvider
            {
                FileName = TestFileName,
                FileInfoSheetName = "Internal - File Info",
                GenericSheetNames = new []
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
