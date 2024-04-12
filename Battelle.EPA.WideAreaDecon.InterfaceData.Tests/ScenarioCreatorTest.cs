using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Scenario;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;
using Battelle.RiskAssessment.Common.Statistics;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Tests
{
    public class ScenarioCreatorTests
    {
        private (int BuildingCount, double TotalBuildingArea) GetBuildingCountAndArea(
            List<Dictionary<SurfaceType, ContaminationInformation>> categoryContaminationBreakout)
        {
            int buildingCount = categoryContaminationBreakout.Count();
            double totalArea = categoryContaminationBreakout
                .SelectMany(dict => dict.Values.Select(contaminationInfo => contaminationInfo.AreaContaminated))
                .Sum();

            return (buildingCount, totalArea);
        }

        private ScenarioCreator GetScenarioCreatorForMode(ScenarioDefinitionMode mode)
        {
            string TestFileName1 = @"InputFiles\DefineScenarioTest.xlsx";
            var defineScenario = new ExcelDefineScenarioParameterListProvider
            {
                FileName = TestFileName1
            };

            var scenarioDefinition = defineScenario.GetParameterList();

            var extentOfContaminationParameters = scenarioDefinition.Filters.First(f => f.Name == ExtentOfContamination.SheetName).Parameters;
            var contaminationDefinition = extentOfContaminationParameters.First(p => p.MetaData.Name == ParameterNames.ContaminationDefinition) as ContaminationDefinition
                ?? throw new NullReferenceException($"{ParameterNames.ContaminationDefinition} parameter is null");

            IEnumerable<double> plumeBuildings = new List<double>() { 100.5, 200.58 };

            return new ScenarioCreator(
                contaminationDefinition.AreaContaminated,
                extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.CityBlockSizeName) as EnumeratedParameter<DecontaminationElement>,
                extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.BuildingSizeName) as EnumeratedParameter<BuildingCategory>,
                plumeBuildings,
                contaminationDefinition.Loading,
                extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.IndoorBuildingBreakoutName) as EnumeratedFraction<BuildingCategory>,
                extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.IndoorSurfaceBreakoutName) as EnumeratedFraction<SurfaceType>,
                extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.OutdoorSurfaceBreakoutName) as EnumeratedFraction<SurfaceType>,
                extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.UndergroundSurfaceBreakoutName) as EnumeratedFraction<SurfaceType>,
                mode);
        }

        [SetUp]
        public void Setup()
        {
            LibraryInfo.SetSeed(12345, 54321);
        }

        [Test]
        public void CreateGeospatialScenario_CorrectValuesGenerated()
        {
            // Setup
            var creator = GetScenarioCreatorForMode(ScenarioDefinitionMode.Geospatial);

            // SUT
            var scenarioDetails = creator.CreateRealizationScenario();

            // Assert
            var indoorBuildingBreakout = scenarioDetails.IndoorBuildingsContaminated;
            var (commercialBuildings, commercialBuildingSize) = GetBuildingCountAndArea(indoorBuildingBreakout[BuildingCategory.Commercial]);
            var (industrialBuildings, industrialBuildingSize) = GetBuildingCountAndArea(indoorBuildingBreakout[BuildingCategory.Industrial]);

            var outdoorSegments = scenarioDetails.OutdoorAreasContaminated.Count();
            var outdoorSegmentSize = scenarioDetails.OutdoorAreasContaminated[1].Values.Sum(x => x.AreaContaminated);

            var undergroundSegments = scenarioDetails.UndergroundBuildingsContaminated.Count();
            var undergroundSegmentSize = scenarioDetails.UndergroundBuildingsContaminated[1].Values.Sum(x => x.AreaContaminated);

            Assert.AreEqual(1, commercialBuildings, 1e-6, "Incorrect number of commercial buildings calculated");
            Assert.AreEqual(100.5, commercialBuildingSize, 1e-6, "Incorrect commercial building size calculated");

            Assert.AreEqual(1, industrialBuildings, 1e-6, "Incorrect number of industrial buildings calculated");
            Assert.AreEqual(200.58, industrialBuildingSize, 1e-6, "Incorrect industrial building size calculated");

            Assert.AreEqual(333, outdoorSegments, 1e-6, "Incorrect number of outdoor segments calculated");
            Assert.AreEqual(900.900900900901, outdoorSegmentSize, 1e-6, "Incorrect outdoor segment size calculated");

            Assert.AreEqual(333, undergroundSegments, 1e-6, "Incorrect number of underground segments calculated");
            Assert.AreEqual(75.0750750750751, undergroundSegmentSize, 1e-6, "Incorrect underground segment size calculated");
        }

        [Test]
        public void CreatetManualScenario_CorrectValuesGenerated()
        {
            // Setup
            var creator = GetScenarioCreatorForMode(ScenarioDefinitionMode.Manual);

            // SUT
            var scenarioDetails = creator.CreateRealizationScenario();

            // Assert
            var indoorBuildingBreakout = scenarioDetails.IndoorBuildingsContaminated;
            var (commercialBuildings, commercialBuildingSize) = GetBuildingCountAndArea(indoorBuildingBreakout[BuildingCategory.Commercial]);
            var (industrialBuildings, industrialBuildingSize) = GetBuildingCountAndArea(indoorBuildingBreakout[BuildingCategory.Industrial]);

            var outdoorSegments = scenarioDetails.OutdoorAreasContaminated.Count();
            var outdoorSegmentSize = scenarioDetails.OutdoorAreasContaminated[1].Values.Sum(x => x.AreaContaminated);

            var undergroundSegments = scenarioDetails.UndergroundBuildingsContaminated.Count();
            var undergroundSegmentSize = scenarioDetails.UndergroundBuildingsContaminated[1].Values.Sum(x => x.AreaContaminated);

            Assert.AreEqual(8, commercialBuildings, 1e-6, "Incorrect number of commercial buildings calculated");
            Assert.AreEqual(1500, commercialBuildingSize, 1e-6, "Incorrect commercial building size calculated");

            Assert.AreEqual(7, industrialBuildings, 1e-6, "Incorrect number of industrial buildings calculated");
            Assert.AreEqual(1500, industrialBuildingSize, 1e-6, "Incorrect industrial building size calculated");

            Assert.AreEqual(333, outdoorSegments, 1e-6, "Incorrect number of outdoor segments calculated");
            Assert.AreEqual(900.900900900901, outdoorSegmentSize, 1e-6, "Incorrect outdoor segment size calculated");

            Assert.AreEqual(333, undergroundSegments, 1e-6, "Incorrect number of underground segments calculated");
            Assert.AreEqual(75.0750750750751, undergroundSegmentSize, 1e-6, "Incorrect underground segment size calculated");
        }
    }
}
