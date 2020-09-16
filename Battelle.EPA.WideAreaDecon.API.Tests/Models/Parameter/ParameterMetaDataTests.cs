using System;
using System.Collections.Generic;
using System.IO;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Providers;
using NPOI.XSSF.UserModel;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Models.Parameter
{
    [TestFixture]
    public class ParameterMetaDataTests
    {

        private static string TestFileName => @"InputFiles\ParameterTests\ParameterMetaDataTests.xlsx";

        private readonly ParameterMetaData[] Expected =
        {
            new ParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 0",
                LowerLimit = 0,
                UpperLimit = 10,
                Step = 1,
                Name = "Test 0",
                Units = "Units 0",
                ValidPhases = new [] {DecontaminationPhase.Indoor}
            },
            new ParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 1",
                LowerLimit = 0,
                UpperLimit = 10,
                Step = 1,
                Name = "Test 1",
                Units = "Units 1",
                ValidPhases = new [] {DecontaminationPhase.Outdoor}
            },
            new ParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 2",
                LowerLimit = 0,
                UpperLimit = 10,
                Step = 1,
                Name = "Test 2",
                Units = "Units 2",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Outdoor, DecontaminationPhase.Underground}
            },
            new ParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 3",
                LowerLimit = 0,
                UpperLimit = 10,
                Step = 1,
                Name = "Test 3",
                Units = "Units 3",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Underground}
            },
            new ParameterMetaData()
            {
                Category = "Other",
                Description = "Test Description 4",
                LowerLimit = 1.5,
                UpperLimit = 100.5,
                Step = 0.01,
                Name = "Test 4",
                Units = "Units 4",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Outdoor},
            },
            new ParameterMetaData()
            {
                Category = "Other",
                Description = "Test Description 5",
                LowerLimit = 1.5,
                UpperLimit = 100.5,
                Step = 0.01,
                Name = "Test 5",
                Units = "Units 5",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Outdoor},
            },
            new ParameterMetaData()
            {
                Category = "Other",
                Description = "Test Description 6",
                LowerLimit = 1.5,
                UpperLimit = 100.5,
                Step = 0.01,
                Name = "Test 6",
                Units = "Units 6",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Outdoor}
            }
        };
        [SetUp]
        public void SetUp()
        {
        }

        [Test]
        public void SerializeExcel()
        {
            if (!File.Exists(TestFileName))
            {
                Assert.Fail($"Could not find test file at path: {TestFileName}");
            }
            // If the file exists, open a new file stream to open the excel workbook
            using var stream = new FileStream(TestFileName, FileMode.Open, FileAccess.Read) { Position = 0 };
            var xssWorkbook = new XSSFWorkbook(stream);

            if(xssWorkbook.NumberOfSheets < 1)
                Assert.Fail($"Incorrect format of test file: {TestFileName}");

            var sheet = xssWorkbook.GetSheetAt(0);
            
            if(sheet.PhysicalNumberOfRows != Expected.Length + 1)
                Assert.Fail($"Incorrect number of rows for: {TestFileName}");

            for (var i = 1; i < sheet.PhysicalNumberOfRows; i++)
            {
                var expected = Expected[i - 1];
                var actual = ParameterMetaData.FromExcel(sheet.GetRow(i));

                Assert.AreEqual(expected.ValidPhases.Length, actual.ValidPhases.Length, $"Incorrect number of valid phases for entry {i}");
                for (var j = 0; j < expected.ValidPhases.Length; j++)
                {
                    Assert.AreEqual(expected.ValidPhases[j], actual.ValidPhases[j], $"Mismatch for entry {i} and phase {j}");
                }

                Assert.AreEqual(expected.Category, actual.Category, $"Incorrect {nameof(expected.Category)} for entry {i}");
                Assert.AreEqual(expected.Description, actual.Description, $"Incorrect {nameof(expected.Description)} for entry {i}");
                Assert.AreEqual(expected.Name, actual.Name, $"Incorrect {nameof(expected.Name)} for entry {i}");
                Assert.AreEqual(expected.Units, actual.Units, $"Incorrect {nameof(expected.Units)} for entry {i}");
                Assert.AreEqual(expected.LowerLimit, actual.LowerLimit, 1e-3, $"Incorrect {nameof(expected.LowerLimit)} for entry {i}");
                Assert.AreEqual(expected.UpperLimit, actual.UpperLimit, 1e-3, $"Incorrect {nameof(expected.UpperLimit)} for entry {i}");
                Assert.AreEqual(expected.Step, actual.Step, 1e-3, $"Incorrect {nameof(expected.Step)} for entry {i}");
            }


        }
    }
}