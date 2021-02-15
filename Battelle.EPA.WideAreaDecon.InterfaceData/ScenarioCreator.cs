using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using Battelle.RiskAssessment.Common.Statistics;

namespace Battelle.EPA.WideAreaDecon.InterfaceData
{
    public class ScenarioCreator : IScenarioCreator
    {
        private readonly EnumeratedParameter<DecontaminationPhase> _areaContaminated;
        private readonly EnumeratedParameter<DecontaminationPhase> _loading;
        private readonly EnumeratedFraction<BuildingCategory> _indoorContaminationBreakout;
        private readonly EnumeratedFraction<SurfaceType> _indoorSurfaceTypeBreakout;
        private readonly EnumeratedFraction<SurfaceType> _outdoorSurfaceTypeBreakout;
        private readonly EnumeratedFraction<SurfaceType> _undergroundSurfaceTypeBreakout;

        public ScenarioCreator(EnumeratedParameter<DecontaminationPhase> areaContaminated,
            EnumeratedParameter<DecontaminationPhase> loading,
            EnumeratedFraction<BuildingCategory> indoorContaminationBreakout,
            EnumeratedFraction<SurfaceType> indoorSurfaceTypeBreakout,
            EnumeratedFraction<SurfaceType> outdoorSurfaceTypeBreakout,
            EnumeratedFraction<SurfaceType> undergroundSurfaceTypeBreakout)
        {
            _areaContaminated = areaContaminated;
            _loading = loading;
            _indoorContaminationBreakout = indoorContaminationBreakout;
            _indoorSurfaceTypeBreakout = indoorSurfaceTypeBreakout;
            _outdoorSurfaceTypeBreakout = outdoorSurfaceTypeBreakout;
            _undergroundSurfaceTypeBreakout = undergroundSurfaceTypeBreakout;
        }

        public ScenarioRealization CreateRealizationScenario()
        {
            return new ScenarioRealization(
                CreateIndoorBuildings(),
                CreateOutdoorAreas(),
                CreateUndergroundBuildings());
        }

        private Dictionary<SurfaceType, ContaminationInformation>[] CreateIndoorBuildings()
        {
            var areaContaminated = _areaContaminated.Values[DecontaminationPhase.Indoor].CreateDistribution().Draw();

            return _indoorContaminationBreakout.Values.ToDictionary((v) => v.Key, (v) => areaContaminated * v.Value.Value.Value).SelectMany(ConvertToBuilding).ToArray();
        }

        private Dictionary<SurfaceType, ContaminationInformation>[] ConvertToBuilding(
            KeyValuePair<BuildingCategory, double> kvp)
        {
            if (kvp.Value <= 0)
            {
                return new Dictionary<SurfaceType, ContaminationInformation>[0];
            }

            throw new NotImplementedException();
        }

        private Dictionary<SurfaceType, ContaminationInformation> CreateUndergroundBuildings()
        {
            var areaContaminated = _areaContaminated.Values[DecontaminationPhase.Underground].CreateDistribution().Draw();
            var loading = _loading.Values[DecontaminationPhase.Underground].CreateDistribution().Draw();

            return _undergroundSurfaceTypeBreakout.Values.ToDictionary(v => v.Key, v => new ContaminationInformation(areaContaminated * v.Value.Value.Value, loading * v.Value.Value.Value));
        }

        private Dictionary<SurfaceType, ContaminationInformation> CreateOutdoorAreas()
        {
            var areaContaminated = _areaContaminated.Values[DecontaminationPhase.Outdoor].CreateDistribution().Draw();
            var loading = _loading.Values[DecontaminationPhase.Outdoor].CreateDistribution().Draw();

            return _outdoorSurfaceTypeBreakout.Values.ToDictionary(v => v.Key, v => new ContaminationInformation(areaContaminated * v.Value.Value.Value, loading * v.Value.Value.Value));
        }
    }
}