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
        private static string TestFileName => @"InputFiles\ParameterTests\ModifyParameterTestFile.xlsx";
        [SetUp]
        public void SetUp()
        {

        }

        [Test]
        public void ReadFromExcel()
        {
            using var stream = new FileStream(TestFileName, FileMode.Open) { Position = 0 };
            XSSFWorkbook xssWorkbook = new XSSFWorkbook(stream);

            var SheetNames = new List<string>();

            for (int i = 1; i < 3; i++)
            {
                SheetNames.Add(xssWorkbook.GetSheetName(i));
            }

            ExcelModifyParameterParameterListProvider modifyParameter = new ExcelModifyParameterParameterListProvider
            {
                FileName = TestFileName,
                FileInfoSheetName = "Internal - File Info",
                GenericSheetNames = SheetNames.ToArray()
            };

            var paramList = modifyParameter.GetParameterList();

            Assert.AreEqual(4, paramList.Version, "Version number does not match expected version");
            Assert.AreEqual("Incident Command", paramList.Filters[0].Name, $"{paramList.Filters[0].Name} does not match expected value");
            Assert.AreEqual("Characterization Sampling", paramList.Filters[1].Name, $"{paramList.Filters[1].Name} does not match expected value");
        }
    }
}
