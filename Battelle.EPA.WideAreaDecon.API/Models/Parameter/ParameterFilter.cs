﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter
{
    public class ParameterFilter
    {
        private static int CategoryLocation => 1;

        public string Name { get; set; }
        public ParameterFilter[] Filters { get; set; }
        public IParameter[] Parameters { get; set; } // IParameter[]


        public static ParameterFilter FromExcelSheet(ISheet sheet) => FromExcelSheet(sheet, DefaultMetaDataGenerator);

        public static ParameterFilter FromExcelSheet(ISheet sheet, Func<IRow, ParameterMetaData> metaDataGenerator)
        {
            var categories = new Dictionary<string, List<IRow>>();
            for (int row = 1; row <= sheet.LastRowNum; row++)
            {
                var current_row = sheet.GetRow(row);
                var cat = current_row.GetCell(CategoryLocation).StringCellValue;

                if (!categories.ContainsKey(cat)) categories.Add(cat, new List<IRow>());
                categories[cat].Add(current_row);
            }


            return new ParameterFilter()
            {
                Name = sheet.SheetName,
                Parameters = new IParameter[0],
                Filters = categories.Select(pair => FromExcelRow(pair.Key, pair.Value, metaDataGenerator)).ToArray()
            };
        }

        public static ParameterFilter FromExcelRow(string category, IEnumerable<IRow> rows) =>
            FromExcelRow(category, rows, DefaultMetaDataGenerator);

        public static ParameterFilter FromExcelRow(string category, IEnumerable<IRow> rows,
            Func<IRow, ParameterMetaData> metaDataGenerator)
        {
            return new ParameterFilter()
            {
                Name = category,
                Filters = new ParameterFilter[0],
                Parameters = rows.Select(row => IParameter.FromExcel(metaDataGenerator(row), row)).ToArray()
            };
        }

        private static ParameterMetaData DefaultMetaDataGenerator(IRow row)
        {
            return ParameterMetaData.FromExcel(row);
        }
    }
}