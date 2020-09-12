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
    public class EfficacyParameterMetaDataTests
    {

        private static string TestFileName => @"InputFiles\ParameterTests\EfficacyParameterMetaDataTests.xlsx";

        private readonly EfficacyParameterMetaData[] Expected =
        {
            new EfficacyParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 0",
                Min = 0,
                Max = 10,
                Step = 1,
                Name = "Test 0",
                Notes = "Note 0",
                Units = "Units 0",
                ValidPhases = new [] {DecontaminationPhase.Indoor},
                Method = ApplicationMethod.Aerosol,
                Type = SurfaceType.HVAC
            },
            new EfficacyParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 1",
                Min = 0,
                Max = 10,
                Step = 1,
                Name = "Test 1",
                Notes = "Note 1",
                Units = "Units 1",
                ValidPhases = new [] {DecontaminationPhase.Outdoor},
                Method = ApplicationMethod.Fogging,
                Type = SurfaceType.Roofing
            },
            new EfficacyParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 2",
                Min = 0,
                Max = 10,
                Step = 1,
                Name = "Test 2",
                Notes = "Note 2",
                Units = "Units 2",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Outdoor, DecontaminationPhase.Underground},
                Method = ApplicationMethod.Gel,
                Type = SurfaceType.IndoorExterior
            },
            new EfficacyParameterMetaData()
            {
                Category = "Test",
                Description = "Test Description 3",
                Min = 0,
                Max = 10,
                Step = 1,
                Name = "Test 3",
                Notes = "Note 3",
                Units = "Units 3",
                ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Underground},
                Method = ApplicationMethod.FoamSpray,
                Type = SurfaceType.OutdoorExterior
            },
            new EfficacyParameterMetaData()
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
                Method = ApplicationMethod.Physical,
                Type = SurfaceType.Pavement
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
                var actual = EfficacyParameterMetaData.FromExcel(sheet.GetRow(i));

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
                Assert.AreEqual(expected.Method, actual.Method, $"Incorrect {nameof(expected.Method)} for entry {i}");
                Assert.AreEqual(expected.Type, actual.Type, $"Incorrect {nameof(expected.Type)} for entry {i}");
            }


        }
    }
}