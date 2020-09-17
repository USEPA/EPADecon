using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Scenario
{
    public class ExtentOfContamination
    {
        public const string SheetName = "Extent of Contamination";
        private const string AreaRowName = "Area Contaminated";
        private const string LoadingRowName = "Loading";
        private const string IndoorBuildingBreakoutName = "Indoor Contamination Breakout";
        private const string OutdoorSurfaceBreakoutName = "Outdoor Surface Type Breakout";
        private const string UndergroundSurfaceBreakoutName = "Underground Surface Type Breakout";

        public EnumeratedParameter<DecontaminationPhase> Area { get; set; }
        public EnumeratedParameter<DecontaminationPhase> Loading { get; set; }
        public EnumeratedFraction<BuildingCategory> IndoorBuildingBreakout { get; set; }
        public EnumeratedFraction<SurfaceType> OutdoorSurfaceBreakout { get; set; }
        public EnumeratedFraction<SurfaceType> UndergroundSurfaceBreakout { get; set; }

        public static ExtentOfContamination FromExcel(ISheet sheet)
        {
            var rows = new List<IRow>();
            for (var i = 0; i <= sheet.LastRowNum; i++)
            {
                rows.Add(sheet.GetRow(i));
            }
            return new ExtentOfContamination()
            {
                Area = EnumeratedParameter<DecontaminationPhase>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Description = "Contaminated Area",
                    Name = "The amount of contaminated area for each phase"
                }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == AreaRowName)),
                Loading = EnumeratedParameter<DecontaminationPhase>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Description = "Loading",
                    Name = "The loading of contaminate for each phase"
                }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == LoadingRowName)),
                IndoorBuildingBreakout = EnumeratedFraction<BuildingCategory>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Description = "Building Type Breakout",
                    Name = "The breakout of building types in model"
                }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == IndoorBuildingBreakoutName)),
                OutdoorSurfaceBreakout = EnumeratedFraction<SurfaceType>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Description = "The breakout of outdoor surfaces in the model",
                    Name = OutdoorSurfaceBreakoutName
                }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == OutdoorSurfaceBreakoutName)),
                UndergroundSurfaceBreakout = EnumeratedFraction<SurfaceType>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Description = "The breakout of surface types for underground areas",
                    Name = UndergroundSurfaceBreakoutName
                }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == UndergroundSurfaceBreakoutName)),
            };
        }

        public ParameterFilter GetParameterFilter()
        {
            return new ParameterFilter()
            {
                Name = SheetName,
                Filters = new ParameterFilter[0],
                Parameters = new IParameter[]
                {
                    Area,
                    Loading,
                    IndoorBuildingBreakout,
                    OutdoorSurfaceBreakout,
                    UndergroundSurfaceBreakout
                }
            };
        }
    }
}