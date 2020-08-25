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

        public static ParameterFilter[] FromExcelWorkbook(XSSFWorkbook xssWorkbook)
        {
            // Workbook should be passed in so we can create filtering on the sheet names? 
            // Or just pass in the sheet names
            throw new NotImplementedException();
        }

        public static ParameterFilter[] FromExcelSheet(ISheet sheet)
        {
            // Sheet should be passed in so we can create filtering on the categories
            throw new NotImplementedException();
        }

        public static ParameterFilter[] FromExcelRow(IRow[] rows)
        {
            // All of the rows that go into the same filtering should be passed in here
            throw new NotImplementedException();
        }
    }
}
