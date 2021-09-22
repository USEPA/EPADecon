﻿using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;

namespace Battelle.EPA.WideAreaDecon.InterfaceData
{
    public class ScenarioCreator : IScenarioCreator
    {
        private readonly EnumeratedParameter<DecontaminationElement> _areaContaminated;
        private readonly EnumeratedParameter<DecontaminationElement> _loading;
        private readonly EnumeratedFraction<BuildingCategory> _indoorContaminationBreakout;
        private readonly EnumeratedFraction<SurfaceType> _indoorSurfaceTypeBreakout;
        private readonly EnumeratedFraction<SurfaceType> _outdoorSurfaceTypeBreakout;
        private readonly EnumeratedFraction<SurfaceType> _undergroundSurfaceTypeBreakout;

        public ScenarioCreator(EnumeratedParameter<DecontaminationElement> areaContaminated,
            EnumeratedParameter<DecontaminationElement> loading,
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

        private Dictionary<BuildingCategory, Dictionary<SurfaceType, ContaminationInformation>> CreateIndoorBuildings()
        {
            var areaContaminated = _areaContaminated.Values[DecontaminationElement.Indoor].CreateDistribution().Draw();
            var loading = _loading.Values[DecontaminationElement.Indoor].CreateDistribution().Draw();

            var contaminationBreakout = _indoorContaminationBreakout.Values.ToDictionary((v) => v.Key, (v) => new ContaminationInformation(areaContaminated * v.Value.Value.Value, loading * v.Value.Value.Value));

            var buildings = new Dictionary<BuildingCategory, Dictionary<SurfaceType, ContaminationInformation>>();

            foreach (var buildingCategory in contaminationBreakout.Keys)
            {
                buildings.Add(buildingCategory, ConvertToBuilding(contaminationBreakout[buildingCategory]));
            }

            return buildings;
        }

        private Dictionary<SurfaceType, ContaminationInformation> ConvertToBuilding(
            ContaminationInformation buildingInformation)
        {
            var buildingBreakdown = new Dictionary<SurfaceType, ContaminationInformation>();

            if (buildingInformation.AreaContaminated > 0)
            {
                foreach (SurfaceType surface in _indoorSurfaceTypeBreakout.Values.Keys)
                {
                    var surfaceFraction = _indoorSurfaceTypeBreakout.Values[surface].CreateDistribution().Draw();
                    var info = new ContaminationInformation(buildingInformation.AreaContaminated * surfaceFraction, buildingInformation.Loading * surfaceFraction);

                    buildingBreakdown.Add(surface, info);
                }
            }

            return buildingBreakdown;
        }

        private Dictionary<SurfaceType, ContaminationInformation> CreateUndergroundBuildings()
        {
            var areaContaminated = _areaContaminated.Values[DecontaminationElement.Underground].CreateDistribution().Draw();
            var loading = _loading.Values[DecontaminationElement.Underground].CreateDistribution().Draw();

            return _undergroundSurfaceTypeBreakout.Values.ToDictionary(v => v.Key, v => new ContaminationInformation(areaContaminated * v.Value.Value.Value, loading * v.Value.Value.Value));
        }

        private Dictionary<SurfaceType, ContaminationInformation> CreateOutdoorAreas()
        {
            var areaContaminated = _areaContaminated.Values[DecontaminationElement.Outdoor].CreateDistribution().Draw();
            var loading = _loading.Values[DecontaminationElement.Outdoor].CreateDistribution().Draw();

            return _outdoorSurfaceTypeBreakout.Values.ToDictionary(v => v.Key, v => new ContaminationInformation(areaContaminated * v.Value.Value.Value, loading * v.Value.Value.Value));
        }
    }
}