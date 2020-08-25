using System;
using System.Collections.Generic;
using System.IO;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Providers;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Providers
{
    public class ExcelDefineScenarioParameterListProvider : IParameterListProvider
    {
        private static int versionLocation = 2;

        public string FileName { get; set; }

        public string FileInfoSheetName { get; set; }

        public string[] GenericSheetNames { get; set; }

        public ParameterList GetParameterList()
        {
            if(string.IsNullOrEmpty(FileName))
                throw new ApplicationException($"No file name provided for {nameof(ExcelDefineScenarioParameterListProvider)}");
            if (!File.Exists(FileName))
                throw new ApplicationException($"Could not find {nameof(ExcelDefineScenarioParameterListProvider)} filename: {FileName}");

            // If the file exists, open a new file stream to open the excel workbook
            using var stream = new FileStream(FileName, FileMode.Open) { Position = 0 };
            XSSFWorkbook xssWorkbook = new XSSFWorkbook(stream);

            // Parse version in using the specific sheet name that contains the version info
            var sheet = xssWorkbook.GetSheet(FileInfoSheetName);
            IRow information = sheet.GetRow(0);
            int version = int.Parse(information.GetCell(versionLocation).ToString());

            // Parse Filters given other sheet names
            var filters = new List<ParameterFilter>();

            foreach (var genericSheetName in GenericSheetNames)
            {
                sheet = xssWorkbook.GetSheet(genericSheetName);
                // Parse the filters
                filters.AddRange(ParameterFilter.ParseExcelSheet(sheet));
            }

            return new ParameterList(){ Version = version, Filters = filters.ToArray()};
        }
    }
}