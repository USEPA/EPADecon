using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.Model.Domain;
using Battelle.EPA.WideAreaDecon.Model.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Interface
{
    public interface IResultsCalculator
    {
        Dictionary<BuildingCategory, ScenarioRealizationResults> CalculateScenarioResults(
            Dictionary<BuildingCategory, Dictionary<SurfaceType, ContaminationInformation>> contaminatedAreaByBuildingCategory,
            ScenarioParameterManager parameterManager,
            DecontaminationElement element);

        ScenarioRealizationResults CalculateScenarioResults(
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
            ScenarioParameterManager parameterManager,
            DecontaminationElement element);

        EventResults CalculateEventResults(
            EventParameters parameters, 
            EventCalculators calculators, 
            GeneralResults generalScenarioResults, 
            List<Assignment> assignments);
    }
}
