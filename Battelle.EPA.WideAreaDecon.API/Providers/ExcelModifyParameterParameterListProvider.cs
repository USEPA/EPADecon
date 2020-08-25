﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Providers;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Providers
{
    public class ExcelModifyParameterParameterListProvider : IParameterListProvider
    {
        private static int versionLocation = 2;

        public string FileName { get; set; }

        public string FileInfoSheetName { get; set; }

        public string[] GenericSheetNames { get; set; }

        public ParameterList GetParameterList()
        {
            // If the file exists, open a new file stream to open the excel workbook
            using var stream = new FileStream(FileName, FileMode.Open) { Position = 0 };
            XSSFWorkbook xssWorkbook = new XSSFWorkbook(stream);

            // Parse version in using the specific sheet name that contains the version info
            // making sure it isn't null or empty
            var sheet = xssWorkbook.GetSheet(FileInfoSheetName);
            IRow information = sheet.GetRow(0);
            string versionString = information.GetCell(versionLocation).ToString();
            if (string.IsNullOrEmpty(versionString))
                throw new SerializationException("No file version found in Excel");

            int version = int.Parse(versionString);

            // Parse Filters given other sheet names
            var filters = new List<ParameterFilter>();

            foreach (var genericSheetName in GenericSheetNames)
            {
                filters.AddRange(ParameterFilter.ParseExcelSheet(xssWorkbook.GetSheet(genericSheetName)));
            }

            return new ParameterList() { Version = version, Filters = filters.ToArray() };
        }
    }
}