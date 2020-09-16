﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Providers;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Providers;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Providers
{
    public class ExcelDefineScenarioParameterListProvider : IParameterListProvider
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterListProviderType Type => ParameterListProviderType.ExcelDefineScenario;
        private static int VersionRowLocation => 0;
        private static int VersionCellLocation => 1;

        public string FileName { get; set; }

        private string FullFileName => Path.Join(
            Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), FileName);

        public string FileInfoSheetName { get; set; }

        public string[] GenericSheetNames { get; set; }

        public ParameterList GetParameterList()
        {
            if (string.IsNullOrEmpty(FileName))
                throw new ApplicationException(
                    $"No file name provided for {nameof(ExcelDefineScenarioParameterListProvider)}");
            if (!File.Exists(FileName))
            {
                FileName = FullFileName;
                if(!File.Exists(FileName))
                {
                    throw new ApplicationException(
                        $"Could not find {nameof(ExcelDefineScenarioParameterListProvider)} filename: {FileName}");
                }
            }
            // If the file exists, open a new file stream to open the excel workbook
            using var stream = new FileStream(FileName, FileMode.Open, FileAccess.Read) {Position = 0};
            XSSFWorkbook xssWorkbook = new XSSFWorkbook(stream);

            // Parse version in using the specific sheet name that contains the version info
            // making sure it isn't null or empty
            var sheet = xssWorkbook.GetSheet(FileInfoSheetName);
            IRow information = sheet.GetRow(VersionRowLocation);
            string versionString = information.GetCell(VersionCellLocation).ToString();
            if (string.IsNullOrEmpty(versionString))
                throw new SerializationException("No file version found in Excel");

            int version = int.Parse(versionString);

            return new ParameterList()
            {
                Version = version,
                Filters = GenericSheetNames.Select(genericSheetName =>
                    ParameterFilter.FromExcelSheet(xssWorkbook.GetSheet(genericSheetName) ?? 
                        throw new ApplicationException($"Could not find sheet {genericSheetName}"))).ToArray()
            };
        }
    }
}