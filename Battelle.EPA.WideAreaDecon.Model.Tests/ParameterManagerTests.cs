using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;
using Battelle.EPA.WideAreaDecon.Model.Interface;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Tests
{
    public class ParameterManagerTests
    {
        private ScenarioParameterManager _sut;

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
                    ParameterNames.IncidentCommand,
                    ParameterNames.CharacterizationSampling,
                    ParameterNames.SourceReduction,
                    ParameterNames.Decontamination,
                    ParameterNames.VerificationSampling,
                    ParameterNames.ClearanceSampling,
                    ParameterNames.WasteSampling,
                    ParameterNames.Other,
                    ParameterNames.Cost
                }
            };
            var scenarioParameters = modifyParameters.GetParameterList();

            _sut = new ScenarioParameterManager(
                Mock.Of<ICalculatorManager>(),
                scenarioParameters);
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

            _ = _sut.RedrawParameters(scenarioDefinitionDetails, DecontaminationElement.Indoor);
            _ = _sut.RedrawParameters(scenarioDefinitionDetails, DecontaminationElement.Outdoor);
            _ = _sut.RedrawParameters(scenarioDefinitionDetails, DecontaminationElement.Underground);

            Assert.Pass();
        }
    }
}
