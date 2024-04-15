using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Json;
using Newtonsoft.Json;
using NPOI.SS.UserModel;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class ParameterFilter
    {
        public string Name { get; set; }
        public ParameterFilter[] Filters { get; set; }
        [JsonProperty(ItemConverterType = typeof(ParameterConverter))]
        public IParameter[] Parameters { get; set; }

        public static ParameterFilter FromExcelSheet(ISheet sheet)
        {
            var categories = new Dictionary<string, List<IRow>>();
            for (var r = 1; r <= sheet.LastRowNum; r++)
            {
                var row = sheet.GetRow(r);
                var cat = typeof(ParameterMetaData).GetCellValue(nameof(ParameterMetaData.Category), row);

                if (!categories.ContainsKey(cat)) categories.Add(cat, new List<IRow>());
                categories[cat].Add(row);
            }


            return new ParameterFilter()
            {
                Name = sheet.SheetName,
                Parameters = System.Array.Empty<IParameter>(),
                Filters = categories.Select(pair => FromExcelRow(pair.Key, pair.Value)).ToArray()
            };
        }


        public static ParameterFilter FromExcelRow(string category, IEnumerable<IRow> rows)
        {
            // If the set of parameter rows contains PPE Fractions, PPE Fractions will
            // have to be built differently than other parameters so we invoke that
            // function to handle those rows separately
            return (rows.Any(row => (row.GetCell(2).ToString() == ParameterNames.Safety.PPE.A) ||
                    (row.GetCell(2).ToString() == ParameterNames.Safety.PPE.B) ||
                    (row.GetCell(2).ToString() == ParameterNames.Safety.PPE.C) ||
                    (row.GetCell(2).ToString() == ParameterNames.Safety.PPE.D)))
                ? SafetyParameterFilter(category, rows)
                : new() // Otherwise, the standard parameter building can be used
                {
                    Name = category,
                    Filters = System.Array.Empty<ParameterFilter>(),
                    Parameters = rows.Select(row => IParameter.FromExcel(ParameterMetaData.FromExcel(row), row)).ToArray()
                };
        }

        private static ParameterFilter SafetyParameterFilter(string category, IEnumerable<IRow> rows)
        {
            // Get all of the safety category rows for non-PPE parameters
            // These will be normal statistical parameters
            var nonPpeRows = rows.Where(row => (row.GetCell(2).ToString() != ParameterNames.Safety.PPE.A) &&
                (row.GetCell(2).ToString() != ParameterNames.Safety.PPE.B) &&
                (row.GetCell(2).ToString() != ParameterNames.Safety.PPE.C) &&
                (row.GetCell(2).ToString() != ParameterNames.Safety.PPE.D)).ToArray();

            // Build the PPE EnumeratedFraction with only the Fraction PPE Required rows
            IParameter[] ppeParameters = new IParameter[] {EnumeratedFraction<PpeLevel>.FromExcel(new ParameterMetaData()
            {
                Category = ParameterNames.Safety.Name,
                Name = ParameterNames.Safety.PPE.Name,
                Description = "The distribution of required PPE for each level of PPE"
            }, rows.Where(row => (ParameterMetaData.FromExcel(row).Name ==ParameterNames.Safety.PPE.A) ||
                (ParameterMetaData.FromExcel(row).Name == ParameterNames.Safety.PPE.B) ||
                (ParameterMetaData.FromExcel(row).Name == ParameterNames.Safety.PPE.C) ||
                (ParameterMetaData.FromExcel(row).Name == ParameterNames.Safety.PPE.D))) };

            // Build the non-PPE parameter types with the remaining rows
            var nonPpeParameters = nonPpeRows.Select(row => IParameter.FromExcel(ParameterMetaData.FromExcel(row), row)).ToArray();

            // Return the special ParameterFilter
            return new ParameterFilter()
            {
                Name = category,
                Filters = new ParameterFilter[0],
                Parameters = ppeParameters.Concat(nonPpeParameters).ToArray()
            };
        }
    }
}