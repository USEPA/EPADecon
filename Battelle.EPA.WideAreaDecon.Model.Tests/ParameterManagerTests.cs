using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests
{
    public class ParameterManagerTests
    {
        private ScenarioParameterManager Manager { get; set; }

        [SetUp]
        public void Setup()
        {
            // Setting parameters
            string TestFileName1 = @"InputFiles\ModifyParametersTest.xlsx";
            var modifyParameters = new ExcelModifyParameterParameterListProvider
            {
                FileName = TestFileName1,
                GenericSheetNames = new[]
                {
                    "Incident Command",
                    "Characterization Sampling",
                    "Source Reduction",
                    "Decontamination",
                    "Clearance Sampling",
                    "Waste Sampling",
                    "Other",
                    "Cost per Parameter"
                }
            };
            var scenarioDetails = modifyParameters.GetParameterList();

            Manager = new ScenarioParameterManager(
                scenarioDetails.Filters.First(f => f.Name == "Characterization Sampling").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Source Reduction").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Decontamination").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Clearance Sampling").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Waste Sampling").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Efficacy").Parameters,
                scenarioDetails.Filters.First(f => f.Name == "Incident Command").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Cost per Parameter").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Decontamination Treatment Methods by Surface").Parameters);
        }

        [Test]
        public void SetParameters()
        {
            var scenarioDefinitionDetails = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                var info = new ContaminationInformation(100.0, 20.0);
                scenarioDefinitionDetails.Add(surface, info);
            }

            var indoorParameters = Manager.RedrawParameters(scenarioDefinitionDetails, DecontaminationElement.Indoor);
            var outdoorParameters = Manager.RedrawParameters(scenarioDefinitionDetails, DecontaminationElement.Outdoor);
            var undergroundParameters = Manager.RedrawParameters(scenarioDefinitionDetails, DecontaminationElement.Underground);

            Assert.Pass();
        }
    }
}
