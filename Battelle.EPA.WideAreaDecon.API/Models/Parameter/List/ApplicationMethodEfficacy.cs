using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics;
using Battelle.EPA.WideAreaDecon.API.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.List
{
    public class ApplicationMethodEfficacy : IParameter
    {
        public ParameterType Type => ParameterType.Efficacy;
        public ParameterMetaData MetaData { get; set; }

        [ExcelProperty(18)] public Dictionary<SurfaceType, IParameter> Parameters { get; set; }

        public ApplicationMethodEfficacy FromExcelSheet(ISheet sheet)
        {
            var length = sheet.LastRowNum + 1;

            var rows = new List<IRow>();
            for (var r = 1; r < length; r++)
            {
                rows.Add(sheet.GetRow(r));
            }
            var xDependent = new Dictionary<SurfaceType, List<IRow>>();
            foreach(var row in rows)
            {
                var type = typeof(ApplicationMethodEfficacy).GetCellValue(nameof(Parameters), row).ParseEnum<SurfaceType>();
                if (!xDependent.ContainsKey(type))
                {
                    xDependent.Add(type, new List<IRow>());
                }
                xDependent[type].Add(row);
            }

            throw new NotImplementedException();
        }
    }
}