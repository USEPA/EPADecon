using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;

namespace Battelle.EPA.WideAreaDecon.Model.Tests
{
    public class ParameterManagerTests
    {
        private ParameterManager Manager { get; set; }

        [SetUp]
        public void Setup()
        {
            // Setting parameters
            string TestFileName1 = @"InputFiles\ModifyParameters.xlsx";
            var modifyParameters = new ExcelModifyParameterParameterListProvider
            {
                FileName = TestFileName1,
                GenericSheetNames = new[]
                {
                    "Incident Command",
                    "Characterization Sampling",
                    "Source Reduction",
                    "Decontamination",
                    "Other",
                    "Cost per Parameter"
                }
            };
            var scenarioDetails = modifyParameters.GetParameterList();

            Manager = new ParameterManager(
                scenarioDetails.Filters.First(f => f.Name == "Characterization Sampling").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Source Reduction").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Decontamination").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Efficacy").Parameters,
                scenarioDetails.Filters.First(f => f.Name == "Other").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Incident Command").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Cost per Parameter").Filters);
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

            var indoorParameters = Manager.RedrawParameters(scenarioDefinitionDetails, DecontaminationPhase.Indoor);
            var outdoorParameters = Manager.RedrawParameters(scenarioDefinitionDetails, DecontaminationPhase.Outdoor);
            var undergroundParameters = Manager.RedrawParameters(scenarioDefinitionDetails, DecontaminationPhase.Underground);

            Assert.Pass();
        }
    }
}
