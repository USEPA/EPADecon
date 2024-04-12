using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Interface
{
    public interface IScenarioModelRunner
    {
        public Dictionary<BuildingCategory, ScenarioRealizationResults> RunScenarioModel(
            ParameterList scenarioParameters,
            DecontaminationElement element,
            Dictionary<BuildingCategory, Dictionary<SurfaceType, ContaminationInformation>> contaminationAreaByBuildingCategory);

        public ScenarioRealizationResults RunScenarioModel(
            ParameterList scenarioParameters,
            DecontaminationElement element,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated);
    }
}
