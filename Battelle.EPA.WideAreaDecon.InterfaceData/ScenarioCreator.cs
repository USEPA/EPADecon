using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.Statistics;
using System;
using System.Collections.Generic;
using System.Linq;
using Stats = Battelle.RiskAssessment.Common.Statistics;

namespace Battelle.EPA.WideAreaDecon.InterfaceData
{
    public class ScenarioCreator : IScenarioCreator
    {
        private readonly EnumeratedParameter<DecontaminationElement> _areaContaminated;
        private readonly EnumeratedParameter<DecontaminationElement> _cityBlockSize;
        private readonly EnumeratedParameter<BuildingCategory> _buildingSize;
        private readonly IEnumerable<double> _buildingAreasInPlume;
        private readonly EnumeratedParameter<DecontaminationElement> _loading;
        private readonly EnumeratedFraction<BuildingCategory> _indoorContaminationBreakout;
        private readonly EnumeratedFraction<SurfaceType> _indoorSurfaceTypeBreakout;
        private readonly EnumeratedFraction<SurfaceType> _outdoorSurfaceTypeBreakout;
        private readonly EnumeratedFraction<SurfaceType> _undergroundSurfaceTypeBreakout;
        private readonly ScenarioDefinitionMode _definitionMode;

        public ScenarioCreator(EnumeratedParameter<DecontaminationElement> areaContaminated,
            EnumeratedParameter<DecontaminationElement> cityBlockSize,
            EnumeratedParameter<BuildingCategory> buildingSize,
            IEnumerable<double> buildingAreasInPlume,
            EnumeratedParameter<DecontaminationElement> loading,
            EnumeratedFraction<BuildingCategory> indoorContaminationBreakout,
            EnumeratedFraction<SurfaceType> indoorSurfaceTypeBreakout,
            EnumeratedFraction<SurfaceType> outdoorSurfaceTypeBreakout,
            EnumeratedFraction<SurfaceType> undergroundSurfaceTypeBreakout,
            ScenarioDefinitionMode definitionMode)
        {
            _areaContaminated = areaContaminated;
            _cityBlockSize = cityBlockSize;
            _buildingSize = buildingSize;
            _buildingAreasInPlume = buildingAreasInPlume;
            _loading = loading;
            _indoorContaminationBreakout = indoorContaminationBreakout;
            _indoorSurfaceTypeBreakout = indoorSurfaceTypeBreakout;
            _outdoorSurfaceTypeBreakout = outdoorSurfaceTypeBreakout;
            _undergroundSurfaceTypeBreakout = undergroundSurfaceTypeBreakout;
            _definitionMode = definitionMode;
        }

        public ScenarioRealization CreateRealizationScenario()
        {
            var indoorBuildings = CreateIndoorBuildings();
            var outdoorAreas = CreateOutdoorAreas();
            var undergroundAreas = CreateUndergroundAreas(outdoorAreas);

            return new ScenarioRealization(
                indoorBuildings,
                outdoorAreas.outdoorAreaSegments,
                undergroundAreas);
        }

        private Dictionary<BuildingCategory, List<Dictionary<SurfaceType, ContaminationInformation>>> CreateIndoorBuildings()
        {
            // If the job was a manual scenario definition, we will draw building areas and create the buildings based on those draws
            if (_definitionMode == ScenarioDefinitionMode.Manual)
            {
                // Drawing an area and loading for indoor
                var areaContaminated = _areaContaminated.Values[DecontaminationElement.Indoor].CreateDistribution().Draw();
                var loading = _loading.Values[DecontaminationElement.Indoor].CreateDistribution().Draw();

                // Setting the area and loading for all building categories
                var contaminationBreakout = _indoorContaminationBreakout.Values.ToDictionary((v) => v.Key, (v) => new ContaminationInformation(areaContaminated * v.Value.Value.Value, loading));

                // Storage for the list of building categories for indoor
                var buildings = new Dictionary<BuildingCategory, List<Dictionary<SurfaceType, ContaminationInformation>>>();

                // Define a list of buildings for each building category we have
                foreach (var buildingCategory in contaminationBreakout.Keys)
                {
                    // Combine the building lists for each building category into one single dictionary
                    buildings.Add(buildingCategory, DefineManualBuildings(buildingCategory, contaminationBreakout[buildingCategory]));
                }

                // Return the list of building categories information
                return buildings;
            }
            // If the job was a geospatial definition, we will use the building data that got sent with the job
            else if (_definitionMode == ScenarioDefinitionMode.Geospatial)
            {
                return DefineGeospatialBuildings();
            }
            // We will add other scenario definitions in the future but for now, if the definition is none of 
            // the above, we'll throw an error
            else
            {
                throw new ApplicationException($"{_definitionMode} is not a defined scenario definition mode. Please choose a valid scenario definition mode.");
            }
        }

        private List<Dictionary<SurfaceType, ContaminationInformation>> DefineManualBuildings(BuildingCategory category, ContaminationInformation categoryContaminationInformation)
        {
            // Total area for that category of buildings
            double totalCategoryArea = categoryContaminationInformation.AreaContaminated;

            // This list will hold all of the drawn building areas
            var buildingAreas = new List<double>();

            if (totalCategoryArea > 0)
            {
                // Start drawing building sizes and reduce the overall contaminated area for that building category by those building sizes
                Stats.IDistribution buildingAreaDist = _buildingSize.Values[category].CreateDistribution();

                while (totalCategoryArea > 0)
                {
                    double buildingArea = buildingAreaDist.Draw();
                    buildingAreas.Add(buildingArea);

                    totalCategoryArea -= buildingArea;
                }

                var overflow = totalCategoryArea / buildingAreas.Count();

                for (var i = 0; i < buildingAreas.Count(); i++)
                {
                    buildingAreas[i] += overflow;
                }
            }

            // We now have a list of building areas for the building category
            // We want to take those areas and split them up fractionally by surface
            // Storing the area and loading for all building categories with the correct fraction breakdowns
            // Return the list of buildings for that category
            return ConvertToBuilding(buildingAreas, categoryContaminationInformation);
        }

        private Dictionary<BuildingCategory, List<Dictionary<SurfaceType, ContaminationInformation>>> DefineGeospatialBuildings()
        {
            // Create a list of the buildings within the plume
            // This is simply a list of areas with no other information attached
            List<double> plumeBuildings = _buildingAreasInPlume.ToList();

            var loading = _loading.Values[DecontaminationElement.Indoor].CreateDistribution().Draw();

            // Dictionary of building category fractions so the buildings can be split out by category
            var buildingCategoryFractions = _indoorContaminationBreakout.Values.ToDictionary((v) => v.Key, (v) => v.Value.CreateDistribution().Draw());

            // Get the total number of buildings
            var totalNumberOfBuildings = plumeBuildings.Count();

            // this dictionary will hold the number of buildings associated with each building category
            var categoryBuildingCounts = new Dictionary<BuildingCategory, int>();

            var categoryBuildingBreakouts = new Dictionary<BuildingCategory, List<Dictionary<SurfaceType, ContaminationInformation>>>();

            // Loop through the building categories to begin getting category-specific building counts
            foreach (BuildingCategory category in buildingCategoryFractions.Keys.ToList())
            {
                // Calculate the number of buildings in that building category based on the number of
                // total buildings within the plume and the building category fraction
                var numberOfBuildingsInCategory = (int)Math.Round(totalNumberOfBuildings * buildingCategoryFractions[category]);
                categoryBuildingCounts.Add(category, numberOfBuildingsInCategory);
            }

            var categoryBuildingCountsSum = categoryBuildingCounts.Values.Sum();
            // Correct the total number of buildings distributed to all categories if we're off based on rounding
            if (categoryBuildingCountsSum > totalNumberOfBuildings || categoryBuildingCountsSum < totalNumberOfBuildings)
            {
                RemoveDifferenceBetweenDrawnAndTotalBuildings(totalNumberOfBuildings, categoryBuildingCounts, buildingCategoryFractions);
            }

            foreach (BuildingCategory category in buildingCategoryFractions.Keys.ToList())
            {
                // get buliding areas for category
                var buildingAreas = new List<double>();
                for (int i = 0; i < categoryBuildingCounts[category]; i++)
                {
                    int randomIndex = plumeBuildings.Count > 1
                        ? (int)new Stats.UniformDistribution(0, plumeBuildings.Count() - 1).Draw()
                        : 0;
                    buildingAreas.Add(plumeBuildings[randomIndex]);
                    // prevent buildings from being drawn again
                    plumeBuildings.RemoveAt(randomIndex);

                }

                var categoryContaminationInformation = new ContaminationInformation(buildingAreas.Sum(), loading);
                categoryBuildingBreakouts.Add(category, ConvertToBuilding(buildingAreas, categoryContaminationInformation));
            }

            return categoryBuildingBreakouts;
        }

        private List<Dictionary<SurfaceType, ContaminationInformation>> ConvertToBuilding(
            List<double> buildings, ContaminationInformation buildingInformation)
        {
            // This is where we will store the surface-specific information for each building 
            // in the building category we are looking at
            var buildingBreakdown = new List<Dictionary<SurfaceType, ContaminationInformation>>();

            // When we have an indoor area contaminated, apply the total building category contamination to
            // each building and apply the surface types to the building area
            if (buildings.Count() > 0)
            {
                // Split surfaces one building at a time for the category
                foreach (var building in buildings)
                {
                    // Create a new dictionary for each building that will hold the area broken out
                    // for each surface as well as the loading
                    var buildingSurfaces = new Dictionary<SurfaceType, ContaminationInformation>();

                    // Store the area and laoding for each individual surface for that one building
                    foreach ((SurfaceType surfaceType, ConstantDistribution surfaceDist) in _indoorSurfaceTypeBreakout.Values)
                    {
                        // Draw a surface fraction from the distribution
                        var surfaceFraction = surfaceDist.CreateDistribution().Draw();

                        // Store the surface fraction times the building area as well as the loading in
                        // the ContaminationInformation object
                        var info = new ContaminationInformation(building * surfaceFraction, buildingInformation.Loading);

                        // Add the surface to the dictionary of surfaces for the building
                        buildingSurfaces.Add(surfaceType, info);
                    }

                    // Add the dictionary off building surfaces to the list of all building information
                    buildingBreakdown.Add(buildingSurfaces);
                }
            }

            // Return the list of all building information for one building category
            return buildingBreakdown;
        }

        private OutdoorAreaInformation CreateOutdoorAreas()
        {
            // Drawing an area, city block size, and loading for outdoor
            var totalOutdoorAreaContaminated = _areaContaminated.Values[DecontaminationElement.Outdoor].CreateDistribution().Draw();
            var cityBlockSize = _cityBlockSize.Values[DecontaminationElement.Outdoor].CreateDistribution().Draw();
            var loading = _loading.Values[DecontaminationElement.Outdoor].CreateDistribution().Draw();

            // Segmenting outdoor areas
            return new OutdoorAreaInformation()
            {
                outdoorAreaSegments = SegmentOutdoorAreas(totalOutdoorAreaContaminated, cityBlockSize, loading),
                drawnCityblockSize = cityBlockSize
            };
        }

        private List<Dictionary<SurfaceType, ContaminationInformation>> CreateUndergroundAreas(OutdoorAreaInformation outdoorSegments)
        {
            // Drawing an area and loading for underground
            var totalUndergroundAreaContaminated = _areaContaminated.Values[DecontaminationElement.Underground].CreateDistribution().Draw();
            var loading = _loading.Values[DecontaminationElement.Underground].CreateDistribution().Draw();

            // Segmenting underground areas
            return SegmentUndergroundAreas(outdoorSegments, totalUndergroundAreaContaminated, loading);
        }

        private List<Dictionary<SurfaceType, ContaminationInformation>> SegmentOutdoorAreas(double totalAreaContaminated, double cityBlockSize, double loading)
        {
            if (totalAreaContaminated.Equals(0))
            {
                return new List<Dictionary<SurfaceType, ContaminationInformation>>();
            }

            int numberOfSegments;

            // Calculating the number of segments based on the size of the area and the size of the city block drawn
            // If the drawn city block size is greater than the total area, we only have one segment
            if (cityBlockSize > totalAreaContaminated)
            {
                numberOfSegments = 1;
                cityBlockSize = totalAreaContaminated;
            }
            else
            {
                // Otherwise the number of segments is equal to the number of times the area divides into the city block size
                // With any overhang evenly spread across all segments
                numberOfSegments = (int)Math.Floor(totalAreaContaminated / cityBlockSize);
                var segmentOverhang = (totalAreaContaminated % cityBlockSize) / numberOfSegments;
                cityBlockSize += segmentOverhang;
            }

            // Storage for the list of outdoor segments
            var segments = new List<Dictionary<SurfaceType, ContaminationInformation>>(new Dictionary<SurfaceType, ContaminationInformation>[numberOfSegments]);

            // Store the outdoor segments along with the loadings for each area
            for (int i = 0; i < numberOfSegments; i++)
            {
                segments[i] = _outdoorSurfaceTypeBreakout.Values.ToDictionary(v => v.Key, v => new ContaminationInformation(cityBlockSize * v.Value.Value.Value, loading));
            }

            // Return the list of outdoor segments
            return segments;
        }

        private List<Dictionary<SurfaceType, ContaminationInformation>> SegmentUndergroundAreas(OutdoorAreaInformation outdoorSegments, double totalAreaContaminated, double loading)
        {
            if (totalAreaContaminated.Equals(0))
            {
                return new List<Dictionary<SurfaceType, ContaminationInformation>>();
            }

            // Get the total outdoor area so we can compare it to the underground area to determine how segments should be built
            var outdoorArea = 0.0;

            foreach (var outdoorSegment in outdoorSegments.outdoorAreaSegments)
            {
                outdoorArea += outdoorSegment.Sum(x => x.Value.AreaContaminated);
            }

            // Underground area is evenly distributed throughout the entire outdoor area if the underground area 
            // is smaller than the outdoor area
            // So the size of "city blocks" or the underground segments should be adjusted to account for this
            if (totalAreaContaminated < outdoorArea)
            {
                // Storage for the list of underground segments
                var segments = new List<Dictionary<SurfaceType, ContaminationInformation>>(new Dictionary<SurfaceType, ContaminationInformation>[outdoorSegments.outdoorAreaSegments.Count()]);

                var undergroundSegmentArea = totalAreaContaminated / outdoorSegments.outdoorAreaSegments.Count();

                // Store the underground segments along with the loadings for each area
                for (int i = 0; i < outdoorSegments.outdoorAreaSegments.Count(); i++)
                {
                    segments[i] = _undergroundSurfaceTypeBreakout.Values.ToDictionary(v => v.Key, v => new ContaminationInformation(undergroundSegmentArea * v.Value.Value.Value, loading));
                }

                return segments;
            }
            else if (totalAreaContaminated >= outdoorArea)
            {
                // Segments should be calculated the same as outdoor segments if the underground area is larger than
                // or equal to the outdoor area
                var numberOfSegments = (int)Math.Floor(totalAreaContaminated / outdoorSegments.drawnCityblockSize);
                var segmentOverhang = (totalAreaContaminated % outdoorSegments.drawnCityblockSize) / numberOfSegments;
                var newCityBlockSize = outdoorSegments.drawnCityblockSize + segmentOverhang;

                // Storage for the list of underground segments
                var segments = new List<Dictionary<SurfaceType, ContaminationInformation>>(new Dictionary<SurfaceType, ContaminationInformation>[numberOfSegments]);

                // Store the underground segments along with the loadings for each area
                for (int i = 0; i < numberOfSegments; i++)
                {
                    segments[i] = _undergroundSurfaceTypeBreakout.Values.ToDictionary(v => v.Key, v => new ContaminationInformation(newCityBlockSize * v.Value.Value.Value, loading));
                }

                return segments;
            }
            else
            {
                throw new ApplicationException("Invalid underground or outdoor area");
            }
        }

        private void RemoveDifferenceBetweenDrawnAndTotalBuildings(
            int totalBuildingCount,
            Dictionary<BuildingCategory, int> buildingCategoryCounts,
            Dictionary<BuildingCategory, double> buildingCategoryFractions)
        {
            int difference = totalBuildingCount - buildingCategoryCounts.Values.Sum();

            // Increase or decrease # of drawn buildings based on difference
            Func<int, int> modifyCount = difference > 0
                ? (Func<int, int>)(count => count + 1)
                : (Func<int, int>)(count => count - 1);

            difference = Math.Abs(difference);

            var dist = new Stats.UniformDistribution(0, buildingCategoryFractions.Count() - 1);

            for (int i = 0; i < difference; i++)
            {
                int drawnIndex = 0;
                BuildingCategory categoryAtIndex;
                double categoryFraction;
                do
                {
                    drawnIndex = (int)dist.Draw();
                    categoryAtIndex = buildingCategoryFractions.ElementAt(drawnIndex).Key;
                    buildingCategoryFractions.TryGetValue(categoryAtIndex, out categoryFraction);
                }
                while (categoryFraction.Equals(0));

                buildingCategoryCounts[categoryAtIndex] = modifyCount(buildingCategoryCounts[categoryAtIndex]);
            }
        }
    }
}