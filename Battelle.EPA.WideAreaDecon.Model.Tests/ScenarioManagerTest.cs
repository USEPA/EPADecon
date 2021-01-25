using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests
{
    public class ScenarioManagerTest
    {
        private ScenarioManager Manager { get; set; }

        [SetUp]
        public void Setup()
        {
            //string TestFileName1 = @"InputFiles\DefineScenario.xlsx";
            /*var defineScenario = new ExcelDefineScenarioParameterListProvider
            {
                FileName = TestFileName1
            };*/

            //var scenarioDefinition = defineScenario.GetParameterList();
            ParameterList scenarioDefinition = new ParameterList();
            
            string TestFileName2 = @"InputFiles\ModifyParameters.xlsx";
            var modifyParameter = new ExcelModifyParameterParameterListProvider
            {
                FileName = TestFileName2,
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

            var scenarioParameters = modifyParameter.GetParameterList();

            Manager = new ScenarioManager(scenarioDefinition, scenarioParameters);
        }

        [Test]
        public void ScenarioExecution()
        {
            object results = Manager.ExecuteScenario();
        }
    }
}
