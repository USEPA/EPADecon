using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics;
using Battelle.EPA.WideAreaDecon.API.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.List
{
    public class ApplicationMethodEfficacy : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.Efficacy;
        public ParameterMetaData MetaData { get; set; }

        [ExcelProperty(15)] public Dictionary<SurfaceType, List<IParameter>> Parameters { get; set; }

        public static ApplicationMethodEfficacy FromExcelSheet(ApplicationMethod method, ISheet sheet)
        {
            var length = sheet.LastRowNum + 1;

            var rows = new List<IRow>();
            for (var r = 1; r < length; r++)
            {
                rows.Add(sheet.GetRow(r));
            }

            var parameters = rows.Where(
                    row => IParameter.ParseParameterType(row) != ParameterType.UniformXDependent)
                .ToDictionary(
                    row => typeof(ApplicationMethodEfficacy).GetCellValue(nameof(Parameters), row)
                        .ParseEnum<SurfaceType>(),
                    row => new List<IParameter>(
                        new[] {IParameter.FromExcel(ParameterMetaData.FromExcel(row), row)}));

            var xDependent = new Dictionary<SurfaceType, Dictionary<string, List<IRow>>>();
            foreach (var row in rows.Where(
                row => IParameter.ParseParameterType(row) == ParameterType.UniformXDependent))
            {
                var surfaceType = typeof(ApplicationMethodEfficacy).GetCellValue(nameof(Parameters), row)
                    .ParseEnum<SurfaceType>();
                var dependentParam =
                    typeof(UniformXDependentDistribution).GetCellValue(
                        nameof(UniformXDependentDistribution.DependentVariable), row);
                if (!xDependent.ContainsKey(surfaceType))
                {
                    xDependent.Add(surfaceType, new Dictionary<string, List<IRow>>());
                }

                if (!xDependent[surfaceType].ContainsKey(dependentParam))
                {
                    xDependent[surfaceType].Add(dependentParam, new List<IRow>());
                }
                xDependent[surfaceType][dependentParam].Add(row);
            }

            foreach (var surfaceType in xDependent.Keys)
            {
                foreach (var dependentParam in xDependent[surfaceType].Keys)
                {
                    if (!parameters.ContainsKey(surfaceType))
                    {
                        parameters.Add(surfaceType, new List<IParameter>());
                    }

                    var xDependentRows = xDependent[surfaceType][dependentParam];
                    if(xDependentRows.Count < 1)
                        throw new ApplicationException($"Incorrect number of parameters found for {surfaceType} : {dependentParam}");
                    parameters[surfaceType].Add(UniformXDependentDistribution.FromExcel(
                        ParameterMetaData.FromExcel(xDependentRows[0]), dependentParam, xDependentRows));
                }
            }

            return new ApplicationMethodEfficacy()
            {
                MetaData = new ParameterMetaData()
                {
                    Category = "Efficacy", 
                    Description = $"Parameters driving efficacy of decontamination for {method.GetStringValue()}",
                    Name = $"{method.GetStringValue()} Efficacy",
                    Units = $"Log Reduction",
                    ValidPhases = new [] {DecontaminationPhase.Indoor, DecontaminationPhase.Outdoor, DecontaminationPhase.Underground}
                },
                Parameters = parameters
            };
        }
    }
}