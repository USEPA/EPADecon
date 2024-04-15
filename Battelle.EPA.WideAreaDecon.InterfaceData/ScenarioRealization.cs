using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData
{
    public class ScenarioRealization
    {
        public ScenarioRealization(Dictionary<BuildingCategory, List<Dictionary<SurfaceType, ContaminationInformation>>> indoorBuildingsContaminated,
            List<Dictionary<SurfaceType, ContaminationInformation>> outdoorAreasContaminated,
            List<Dictionary<SurfaceType, ContaminationInformation>> undergroundBuildingsContaminated)
        {
            IndoorBuildingsContaminated = indoorBuildingsContaminated ??
                                          throw new ArgumentNullException(nameof(indoorBuildingsContaminated));
            OutdoorAreasContaminated= outdoorAreasContaminated ??
                                      throw new ArgumentNullException(nameof(outdoorAreasContaminated));
            UndergroundBuildingsContaminated= undergroundBuildingsContaminated ??
                                          throw new ArgumentNullException(nameof(undergroundBuildingsContaminated));
        }
        public Dictionary<BuildingCategory, List<Dictionary<SurfaceType, ContaminationInformation>>> IndoorBuildingsContaminated { get; }
        public List<Dictionary<SurfaceType, ContaminationInformation>> OutdoorAreasContaminated { get; }
        public List<Dictionary<SurfaceType, ContaminationInformation>> UndergroundBuildingsContaminated { get; }
    }
}