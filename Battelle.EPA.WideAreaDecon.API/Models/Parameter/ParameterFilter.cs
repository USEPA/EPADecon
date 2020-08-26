using System;
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
        public string Name { get; set; }
        public ParameterFilter[] Filters { get; set; }
        public IParameter[] Parameters { get; set; } // IParameter[]
        

        public static ParameterFilter FromExcelSheet(ISheet sheet)
        {
            var categories = new Dictionary<string, List<IRow>>();
            for (int row = 1; row < sheet.LastRowNum; row++)
            {
                var current_row = sheet.GetRow(row);
                var cat = current_row.GetCell(1).StringCellValue;

                if(!categories.ContainsKey(cat)) categories.Add(cat, new List<IRow>());
                categories[cat].Add(current_row);
            }


            return new ParameterFilter()
            {
                Name = sheet.SheetName,
                Parameters = new IParameter[0],
                Filters = categories.Select(pair => FromExcelRow(pair.Key, pair.Value)).ToArray()
            };
        }

        public static ParameterFilter FromExcelRow(string category, IEnumerable<IRow> rows)
        {
            return new ParameterFilter()
            {
                Name = category,
                Filters = new ParameterFilter[0],
                Parameters = rows.Select(IParameter.FromExcel).ToArray()
            };
        }
    }
}
