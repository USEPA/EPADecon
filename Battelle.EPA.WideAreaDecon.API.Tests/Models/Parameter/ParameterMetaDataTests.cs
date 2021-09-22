using System.IO;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using NPOI.XSSF.UserModel;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Models.Parameter
{
    [TestFixture]
    public class ParameterMetaDataTests
    {
        [SetUp]
        public void SetUp()
        {
        }

        private static string TestFileName => @"InputFiles\ParameterTests\ParameterMetaDataTests.xlsx";

        private readonly ParameterMetaData[] _expected =
        {
            new ParameterMetaData
            {
                Category = "Test",
                Description = "Test Description 0",
                LowerLimit = 0,
                UpperLimit = 10,
                Step = 1,
                Name = "Test 0",
                Units = "Units 0",
                ValidElements = new[] {DecontaminationElement.Indoor}
            },
            new ParameterMetaData
            {
                Category = "Test",
                Description = "Test Description 1",
                LowerLimit = 0,
                UpperLimit = 10,
                Step = 1,
                Name = "Test 1",
                Units = "Units 1",
                ValidElements = new[] {DecontaminationElement.Outdoor}
            },
            new ParameterMetaData
            {
                Category = "Test",
                Description = "Test Description 2",
                LowerLimit = 0,
                UpperLimit = 10,
                Step = 1,
                Name = "Test 2",
                Units = "Units 2",
                ValidElements = new[]
                    {DecontaminationElement.Indoor, DecontaminationElement.Outdoor, DecontaminationElement.Underground}
            },
            new ParameterMetaData
            {
                Category = "Test",
                Description = "Test Description 3",
                LowerLimit = 0,
                UpperLimit = 10,
                Step = 1,
                Name = "Test 3",
                Units = "Units 3",
                ValidElements = new[] {DecontaminationElement.Indoor, DecontaminationElement.Underground}
            },
            new ParameterMetaData
            {
                Category = "Other",
                Description = "Test Description 4",
                LowerLimit = 1.5,
                UpperLimit = 100.5,
                Step = 0.01,
                Name = "Test 4",
                Units = "Units 4",
                ValidElements = new[] {DecontaminationElement.Indoor, DecontaminationElement.Outdoor}
            },
            new ParameterMetaData
            {
                Category = "Other",
                Description = "Test Description 5",
                LowerLimit = 1.5,
                UpperLimit = 100.5,
                Step = 0.01,
                Name = "Test 5",
                Units = "Units 5",
                ValidElements = new[] {DecontaminationElement.Indoor, DecontaminationElement.Outdoor}
            },
            new ParameterMetaData
            {
                Category = "Other",
                Description = "Test Description 6",
                LowerLimit = 1.5,
                UpperLimit = 100.5,
                Step = 0.01,
                Name = "Test 6",
                Units = "Units 6",
                ValidElements = new[] {DecontaminationElement.Indoor, DecontaminationElement.Outdoor}
            }
        };

        [Test]
        public void SerializeExcel()
        {
            if (!File.Exists(TestFileName)) Assert.Fail($"Could not find test file at path: {TestFileName}");
            // If the file exists, open a new file stream to open the excel workbook
            using var stream = new FileStream(TestFileName, FileMode.Open, FileAccess.Read) {Position = 0};
            var xssWorkbook = new XSSFWorkbook(stream);

            if (xssWorkbook.NumberOfSheets < 1)
                Assert.Fail($"Incorrect format of test file: {TestFileName}");

            var sheet = xssWorkbook.GetSheetAt(0);

            if (sheet.PhysicalNumberOfRows != _expected.Length + 1)
                Assert.Fail($"Incorrect number of rows for: {TestFileName}");

            for (var i = 1; i < sheet.PhysicalNumberOfRows; i++)
            {
                var expected = _expected[i - 1];
                var actual = ParameterMetaData.FromExcel(sheet.GetRow(i));

                Assert.AreEqual(expected.ValidElements.Length, actual.ValidElements.Length,
                    $"Incorrect number of valid elements for entry {i}");
                for (var j = 0; j < expected.ValidElements.Length; j++)
                    Assert.AreEqual(expected.ValidElements[j], actual.ValidElements[j],
                        $"Mismatch for entry {i} and element {j}");

                Assert.AreEqual(expected.Category, actual.Category,
                    $"Incorrect {nameof(expected.Category)} for entry {i}");
                Assert.AreEqual(expected.Description, actual.Description,
                    $"Incorrect {nameof(expected.Description)} for entry {i}");
                Assert.AreEqual(expected.Name, actual.Name, $"Incorrect {nameof(expected.Name)} for entry {i}");
                Assert.AreEqual(expected.Units, actual.Units, $"Incorrect {nameof(expected.Units)} for entry {i}");
                Assert.AreEqual(expected.LowerLimit, actual.LowerLimit, 1e-3,
                    $"Incorrect {nameof(expected.LowerLimit)} for entry {i}");
                Assert.AreEqual(expected.UpperLimit, actual.UpperLimit, 1e-3,
                    $"Incorrect {nameof(expected.UpperLimit)} for entry {i}");
                Assert.AreEqual(expected.Step, actual.Step, 1e-3, $"Incorrect {nameof(expected.Step)} for entry {i}");
            }
        }
    }
}