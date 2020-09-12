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
                Min = 0,
                Max = 10,
                Step = 1,
                Name = "Test 0",
                Notes = "Note 0",
                Units = "Units 0",
                ValidPhases = new [] {DecontaminationPhase.Indoor}
            },
            new ParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 1",
                Min = 0,
                Max = 10,
                Step = 1,
                Name = "Test 1",
                Notes = "Note 1",
                Units = "Units 1",
                ValidPhases = new [] {DecontaminationPhase.Outdoor}
            },
            new ParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 2",
                Min = 0,
                Max = 10,
                Step = 1,
                Name = "Test 2",
                Notes = "Note 2",
                Units = "Units 2",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Outdoor, DecontaminationPhase.Underground}
            },
            new ParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 3",
                Min = 0,
                Max = 10,
                Step = 1,
                Name = "Test 3",
                Notes = "Note 3",
                Units = "Units 3",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Underground}
            },
            new ParameterMetaData()
            {
                Category = "Other",
                Description = "Test Description 4",
                Min = 1.5,
                Max = 100.5,
                Step = 0.01,
                Name = "Test 4",
                Notes = "Note 4",
                Units = "Units 4",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Outdoor},
                Method = ApplicationMethod.Gel,
                Type = SurfaceType.HVAC
            },
            new ParameterMetaData()
            {
                Category = "Other",
                Description = "Test Description 5",
                Min = 1.5,
                Max = 100.5,
                Step = 0.01,
                Name = "Test 5",
                Notes = "Note 5",
                Units = "Units 5",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Outdoor},
                Method = ApplicationMethod.Physical,
                Type = SurfaceType.OutdoorExterior
            },
            new ParameterMetaData()
            {
                Category = "Other",
                Description = "Test Description 6",
                Min = 1.5,
                Max = 100.5,
                Step = 0.01,
                Name = "Test 6",
                Notes = "Note 6",
                Units = "Units 6",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Outdoor},
                Method = ApplicationMethod.LiquidSpray,
                Type = SurfaceType.Roofing
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
                Assert.AreEqual(expected.Notes, actual.Notes, $"Incorrect {nameof(expected.Notes)} for entry {i}");
                Assert.AreEqual(expected.Units, actual.Units, $"Incorrect {nameof(expected.Units)} for entry {i}");
                Assert.AreEqual(expected.Min, actual.Min, 1e-3, $"Incorrect {nameof(expected.Min)} for entry {i}");
                Assert.AreEqual(expected.Max, actual.Max, 1e-3, $"Incorrect {nameof(expected.Max)} for entry {i}");
                Assert.AreEqual(expected.Step, actual.Step, 1e-3, $"Incorrect {nameof(expected.Step)} for entry {i}");
            }


        }
    }
}