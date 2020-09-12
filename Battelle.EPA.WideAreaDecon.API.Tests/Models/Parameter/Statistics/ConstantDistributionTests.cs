using System;
using System.IO;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics;
using NPOI.HSSF.UserModel;
using NPOI.XSSF.UserModel;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Models.Parameter.Statistics
{
    [TestFixture]
    public class ConstantDistributionTests
    {
        private static string TestFileName => @"InputFiles\ParameterTests\ConstantDistribution.xlsx";
        [SetUp]
        public void SetUp()
        {
        }

        [Test]
        public void ReadFromExcel()
        {
            using var stream = new FileStream(TestFileName, FileMode.Open) { Position = 0 };
            XSSFWorkbook xssWorkbook = new XSSFWorkbook(stream);

            Assert.AreEqual(1, xssWorkbook.NumberOfSheets, $"Incorrect number of sheets in {TestFileName}");

            var sheet = xssWorkbook.GetSheetAt(0);

            Assert.AreEqual(0, sheet.FirstRowNum, $"Incorrect first row number in {TestFileName}" );
            Assert.AreEqual(3, sheet.LastRowNum, $"Incorrect last row number in {TestFileName}");

            var names = new string[]{
                "Test Parameter 1",
                "Test Parameter 2",
                "Test Parameter 3"
            };

            var descriptions = new string[]
            {
                "The first test parameter",
                "The second test parameter",
                "The third test parameter"
            };
            var units = "Some Units";
            var values = new double?[] {1, 2, null}; 

            for (int i = 0; i < 2; i++)
            {
                var row = sheet.GetRow(i + 1);
                var dist = ConstantDistribution.FromExcel(ParameterMetaData.FromExcel(row), row);
                Assert.AreEqual(names[i], dist.MetaData.Name, $"Name mismatch for distribution {i}");
                Assert.AreEqual(descriptions[i], dist.MetaData.Description, $"Description mismatch for distribution {i}");
                Assert.AreEqual(units, dist.MetaData.Units, $"Units mismatch for distribution {i}");
                Assert.AreEqual(values[i], dist.Value, $"Value mismatch for distribution {i}");
            }
        }
    }
}