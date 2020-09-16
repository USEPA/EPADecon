using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;

namespace Battelle.EPA.WideAreaDecon.API.Models.Scenario
{
    public class ExtentOfContamination
    {
        public static readonly string SheetName = "Extent of Contamination";
        private string AreaRowName(DecontaminationPhase phase) => $"{phase.GetStringValue()} Area Contaminated";
        private string LoadingRowName(DecontaminationPhase phase) => $"{phase.GetStringValue()} Area Contamination Loading";
        private string IndoorBuildingBreakoutName => "Indoor Contamination Breakout";
        private string OutdoorSurfaceBreakoutName => "Outdoor Surface Type Breakout";
        private string UndergroundSurfaceBreakoutName => "Underground Surface Type Breakout";

        public Dictionary<DecontaminationPhase, IParameter> Area { get; set; }
        public Dictionary<DecontaminationPhase, IParameter> Loading { get; set; }
        public Dictionary<BuildingCategory, IParameter> IndoorBuildingBreakout { get; set; }
        public Dictionary<SurfaceType, IParameter> OutdoorSurfaceBreakout { get; set; }
        public Dictionary<SurfaceType, IParameter> UndergroundSurfaceBreakout { get; set; }

        public ParameterFilter GetParameterFilter()
        {
            return new ParameterFilter()
            {
                Name = SheetName,
                Filters = new ParameterFilter[0],
                Parameters = new []
                {
                    Area[DecontaminationPhase.Indoor],
                    Area[DecontaminationPhase.Outdoor],
                    Area[DecontaminationPhase.Underground],
                    Loading[DecontaminationPhase.Indoor],
                    Loading[DecontaminationPhase.Outdoor],
                    Loading[DecontaminationPhase.Underground]
                }
            };
        }
    }
}