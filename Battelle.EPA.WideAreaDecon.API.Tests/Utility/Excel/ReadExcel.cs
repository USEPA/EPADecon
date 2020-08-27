using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Utility.Excel
{
    public class CityEntry{
        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        public static CityEntry FromExcel(IRow sheet)
        {
            return new CityEntry()
            {
                Id = int.Parse(sheet.GetCell(0).ToString() ?? "0"),
                Name = sheet.GetCell(1).ToString(),
                City = sheet.GetCell(2).ToString(),
                Country = sheet.GetCell(3).ToString()
            };
        }

        public static CityEntry[] ListFromExcel(ISheet sheet)
        {
            var entries = new List<CityEntry>();
            for (int i = (sheet.FirstRowNum + 1); i <= sheet.LastRowNum; i++)
            {
                entries.Add(CityEntry.FromExcel(sheet.GetRow(i)));
            }

            return entries.ToArray();
        }
    }

    [TestFixture]
    public class ReadExcel
    {
        [SetUp]
        public void SetUp()
        {
        }

        [Test]
        public void TestReadFile()
        {
            using var stream = new FileStream("InputFiles\\ReadExcelTest.xlsx", FileMode.Open) {Position = 0};
            XSSFWorkbook xssWorkbook = new XSSFWorkbook(stream);
            var sheet = xssWorkbook.GetSheetAt(0);
            var entries = CityEntry.ListFromExcel(sheet);

            Assert.AreEqual(4, entries.Length, "Incorrect number of cities parsed");

            var ids = new int[]
            {
                1002,
                1003,
                1004,
                1005
            };

            for(int i = 0; i < ids.Count(); i++)
            {
                Assert.AreEqual(ids[i], entries[i].Id, $"ID mismatch for entry {i}");
            }
        }
    }
}