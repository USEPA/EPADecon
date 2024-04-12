using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using NPOI.SS.UserModel;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Scenario
{
    public class ExtentOfContamination
    {
        public static string SheetName => "Extent of Contamination";
        public static string AreaRowName => "Area Contaminated";
        public static string LoadingRowName => "Loading";
        public static string BuildingSizeName => "Building Size";
        public static string CityBlockSizeName => "City Block Size";
        public static string IndoorBuildingBreakoutName => "Infrastructure Distribution";
        public static string IndoorSurfaceBreakoutName => "Indoor Surface Distribution";
        public static string OutdoorSurfaceBreakoutName => "Outdoor Surface Distribution";
        public static string UndergroundSurfaceBreakoutName => "Underground Surface Distribution";

        public ContaminationDefinition Contamination { get; set; }
        public EnumeratedParameter<BuildingCategory> BuildingSize { get; set; }
        public EnumeratedParameter<DecontaminationElement> CityBlockSize { get; set; }
        public EnumeratedFraction<BuildingCategory> IndoorBuildingBreakout { get; set; }
        public EnumeratedFraction<SurfaceType> IndoorSurfaceBreakout { get; set; }
        public EnumeratedFraction<SurfaceType> OutdoorSurfaceBreakout { get; set; }
        public EnumeratedFraction<SurfaceType> UndergroundSurfaceBreakout { get; set; }

        public static ExtentOfContamination FromExcel(ISheet sheet)
        {
            var rows = new List<IRow>();
            for (var i = 1; i <= sheet.LastRowNum; i++)
            {
                rows.Add(sheet.GetRow(i));
            }

            return new ExtentOfContamination()
            {
                Contamination = new ContaminationDefinition
                {
                    AreaContaminated = EnumeratedParameter<DecontaminationElement>.FromExcel(new ParameterMetaData()
                    {
                        Category = SheetName,
                        Name = AreaRowName,
                        Description = "The amount of contaminated area for each element"
                    }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == AreaRowName)),
                    Loading = EnumeratedParameter<DecontaminationElement>.FromExcel(new ParameterMetaData()
                    {
                        Category = SheetName,
                        Name = LoadingRowName,
                        Description = "The loading of contaminate for each element"
                    }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == LoadingRowName)),
                    MetaData = new ParameterMetaData
                    {
                        Category = SheetName,
                        Name = "Contamination Definition",
                        Description = "Contaminated area details",
                    },
                },
                BuildingSize = EnumeratedParameter<BuildingCategory>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Name = BuildingSizeName,
                    Description = "The building size for buildings of each category"
                }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == BuildingSizeName)),
                CityBlockSize = EnumeratedParameter<DecontaminationElement>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Name = CityBlockSizeName,
                    Description = "The surface area of city blocks to segment outdoor and underground areas"
                }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == CityBlockSizeName)),
                IndoorBuildingBreakout = EnumeratedFraction<BuildingCategory>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Name = IndoorBuildingBreakoutName,
                    Description = "The distribution of building types in model"
                }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == IndoorBuildingBreakoutName)),
                IndoorSurfaceBreakout = EnumeratedFraction<SurfaceType>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Description = "The distribution of indoor surfaces in the model",
                    Name = IndoorSurfaceBreakoutName
                }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == IndoorSurfaceBreakoutName)),
                OutdoorSurfaceBreakout = EnumeratedFraction<SurfaceType>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Description = "The distribution of outdoor surfaces in the model",
                    Name = OutdoorSurfaceBreakoutName
                }, rows.Where(row => ParameterMetaData.FromExcel(row).Name == OutdoorSurfaceBreakoutName)),
                UndergroundSurfaceBreakout = EnumeratedFraction<SurfaceType>.FromExcel(new ParameterMetaData()
                {
                    Category = SheetName,
                    Description = "The distribution of surface types for underground areas",
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
                    Contamination,
                    BuildingSize,
                    CityBlockSize,
                    IndoorBuildingBreakout,
                    IndoorSurfaceBreakout,
                    OutdoorSurfaceBreakout,
                    UndergroundSurfaceBreakout
                }
            };
        }
    }
}