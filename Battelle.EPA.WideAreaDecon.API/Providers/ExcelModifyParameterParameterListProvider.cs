using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Providers;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Providers;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using Microsoft.OpenApi.Extensions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Providers
{
    public class ExcelModifyParameterParameterListProvider : IParameterListProvider
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterListProviderType Type => ParameterListProviderType.ExcelModifyParameter;

        public string FileName { get; set; }

        private string FullFileName => Path.Join(
            Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), FileName);

        public string[] GenericSheetNames { get; set; }

        public ParameterList GetParameterList()
        {
            if (string.IsNullOrEmpty(FileName))
                throw new ApplicationException(
                    $"No file name provided for {nameof(ExcelDefineScenarioParameterListProvider)}");

            if (!File.Exists(FileName))
            {
                FileName = FullFileName;
                if (!File.Exists(FileName))
                {
                    throw new ApplicationException(
                        $"Could not find {nameof(ExcelDefineScenarioParameterListProvider)} filename: {FileName}");
                }
            }

            // If the file exists, open a new file stream to open the excel workbook
            using var stream = new FileStream(FileName, FileMode.Open, FileAccess.Read) {Position = 0};
            XSSFWorkbook xssWorkbook = new XSSFWorkbook(stream);

            var efficacyParameters = new List<IParameter>();
            foreach (var method in Enum.GetValues(typeof(ApplicationMethod)).Cast<ApplicationMethod>())
            {
                var methodSheet = xssWorkbook.GetSheet(method.GetStringValue());
                var rows = new Dictionary<IRow, ParameterMetaData>();
                for (var i = 1; i <= methodSheet.LastRowNum; i++)
                {
                    rows.Add(methodSheet.GetRow(i), ParameterMetaData.FromExcel(methodSheet.GetRow(i)));
                }

                var cat = rows.Where(row =>
                    Enum.TryParse(typeof(SurfaceType), row.Value.Category, true, out var tmp)).ToArray();
                if (cat.Any())
                {
                    efficacyParameters.Add(EnumeratedParameter<SurfaceType>.FromExcel(new ParameterMetaData()
                    {
                        Name = $"{method} Efficacy by Surface",
                        Description = $"The Efficacy of {method} based on the surface it is applied to",
                        Units = "log reduction",
                    }, cat.Select(row => row.Key)));
                }

                var nonCat = rows.Where(row => !Enum.TryParse(typeof(SurfaceType),
                    ParameterMetaData.FromExcel(row).Category,
                    true,
                    out var tmp)).ToArray();
                if (nonCat.Any())
                    efficacyParameters.AddRange(nonCat.Select(row =>
                        IParameter.FromExcel(ParameterMetaData.FromExcel(row), row)));
            }

            var filters = GenericSheetNames.Select(genericSheetName =>
                ParameterFilter.FromExcelSheet(xssWorkbook.GetSheet(genericSheetName))).ToList();
            filters.Add(new ParameterFilter()
            {
                Name = "Efficacy",
                Filters = new ParameterFilter[0],
                Parameters = efficacyParameters.ToArray()
            });


            return new ParameterList()
            {
                Filters = filters.ToArray()
            };
        }
    }
}