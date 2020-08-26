using System.IO;
using System;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.API.Providers;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using NPOI.XSSF.UserModel;
using NUnit.Framework;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using NPOI.SS.UserModel;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Models.Parameter
{
    [TestFixture]
    class ParameterFilterTest
    {
        private static string TestFileName => @"InputFiles\ParameterTests\ParameterFilterTestFile.xlsx";
        [SetUp]
        public void SetUp()
        {

        }

        [Test]
        public void ReadFromExcel()
        {
            using var stream = new FileStream(TestFileName, FileMode.Open) { Position = 0 };
            XSSFWorkbook xssWorkbook = new XSSFWorkbook(stream);

            Assert.AreEqual(3, xssWorkbook.NumberOfSheets, $"Incorrect number of sheets in {TestFileName}");

            var SheetNames = new List<string>();

            var expectedSheetNames = new List<string>()
            {
                "Incident Command",
                "Characterization Sampling"
            };

            for (int i = 1; i < 3; i++)
            {
                var sheet = xssWorkbook.GetSheetName(i);
                SheetNames.Add(sheet);

                Assert.AreEqual(expectedSheetNames[i - 1], sheet, $"{sheet} does not match expected sheet");
            }
            
            foreach (var sheet in SheetNames)
                ParameterFilter.FromExcelSheet(xssWorkbook.GetSheet(sheet));

        }
    }
}
