using System.IO;
using System;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using NPOI.XSSF.UserModel;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Models.Parameter
{
    [TestFixture]
    public class IParameterTests
    {

        private static string TestFileName => @"InputFiles\ParameterTests\GenericParameter.xlsx";
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

            Assert.AreEqual(0, sheet.FirstRowNum, $"Incorrect first row number in {TestFileName}");
            Assert.AreEqual(6, sheet.LastRowNum, $"Incorrect last row number in {TestFileName}");

            var expectedTypes = new[]
                {typeof(ConstantDistribution), typeof(UniformDistribution), typeof(BetaPertDistribution), 
                typeof(LogUniformDistribution), typeof(TruncatedLogNormalDistribution), typeof(TruncatedNormalDistribution)};

            for (int i = 0; i < 6; i++)
            {
                var dist = IParameter.FromExcel(sheet.GetRow(i + 1));

                switch(i)
                {
                    case 0:
                        Assert.AreEqual(typeof(ConstantDistribution), dist.GetType(), $"Type mismatch for row {i}");
                        break;
                    case 1:
                        Assert.AreEqual(typeof(UniformDistribution), dist.GetType(), $"Type mismatch for row {i}");
                        break;
                    case 2:
                        Assert.AreEqual(typeof(BetaPertDistribution), dist.GetType(), $"Type mismatch for row {i}");
                        break;
                    case 3:
                        Assert.AreEqual(typeof(LogUniformDistribution), dist.GetType(), $"Type mismatch for row {i}");
                        break;
                    case 4:
                        Assert.AreEqual(typeof(TruncatedNormalDistribution), dist.GetType(), $"Type mismatch for row {i}");
                        break;
                    case 5:
                        Assert.AreEqual(typeof(TruncatedLogNormalDistribution), dist.GetType(), $"Type mismatch for row {i}");
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                }
            }
        }
    }
}