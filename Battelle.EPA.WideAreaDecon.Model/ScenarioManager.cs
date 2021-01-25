using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Scenario;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Model;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.Statistics;

namespace Battelle.EPA.WideAreaDecon.Model
{
    /// <summary>
    /// Sets up and manages scenario execution
    /// </summary>
    public class ScenarioManager
    {
        private readonly ParameterList _scenarioDefinition;
        private readonly ParameterList _scenarioParameters;

        public ScenarioManager(ParameterList scenarioDefinition, ParameterList scenarioParameters)
        {
            _scenarioDefinition = scenarioDefinition;
            _scenarioParameters = scenarioParameters;
        }


        public object ExecuteScenario()
        {
            // Take scenario definition and construct scenario
            // draw values for all scenario definitions as this will determine number of scenarios

            /*if (_scenarioDefinition.Filters[0].Name == "Extent of Contamination")
            {
                var param = _scenarioDefinition.Filters[0].Parameters;
            }*/

            // number of buildings will be determined by scenario definition
            int numBuildings = 1;

            BuildingData[] buildingArray = new BuildingData[numBuildings];

            BuildingData building = new BuildingData();

            foreach (PhaseCategory phase in Enum.GetValues(typeof(PhaseCategory)))
            {
                if (phase == PhaseCategory.IncidentCommand)
                {
                    foreach (IncidentCommandParameters parameter in Enum.GetValues(typeof(IncidentCommandParameters)))
                    {
                        var distType = Array.Find(_scenarioParameters.Filters, item => item.Name == "Incident Command");
                        //building.IncidentCommand[parameter].SetDistributionData(distType);
                    }
                }
                else if (phase == PhaseCategory.CharacterizationSampling)
                {
                    var csFilter = Array.Find(_scenarioParameters.Filters, item => item.Name == "Characterization Sampling");
                    var personnelCS = Array.Find(csFilter.Filters, param => param.Name == "Personnel");
                    //ConstantDistribution cDistParams = Array.Find(personnelCS.Parameters, param => param.Type == "Constant");

                    //building.CharacterizationSampling[parameter].SetDistributionData(distType);
                    
                    foreach (var personnel in personnelCS.Parameters)
                    {
                        if (personnel.GetType() == typeof(UniformDistribution))
                        {
                            //building.CharacterizationSampling[0].SetDistributionData(personnel.Type, Convert.ToDouble(personnel.Min));
                            Console.WriteLine("true");
                        }
                        Type t = personnel.GetType();
                        
                        var distType = personnel.Type;
                        //MyEnum myEnum = (MyEnum)Enum.Parse(typeof(MyEnum), myString);

                        switch (distType)
                        {
                            case ParameterType.Constant:
                                //ConstantDistribution parameters = personnelCS.Parameters[Array.IndexOf(personnelCS.Parameters, personnel)];
                                //building.CharacterizationSampling[0].SetDistributionData(parameters.Type, Convert.ToDouble(parameters.Value));
                                break;
                        }
                        var name = personnel.MetaData.Name;
                        
                    }
                }
                else if (phase == PhaseCategory.SourceReduction)
                {

                }
                else if (phase == PhaseCategory.Decontamination)
                {

                }
                else if (phase == PhaseCategory.Efficacy)
                {

                }
                else if (phase == PhaseCategory.CostPerParameter)
                {

                }
            }

            // need to draw unique values for all scenario parameters for each building
            for (int i = 0; i < numBuildings; i++)
            {
                
            }


            Services.ParameterArrayCharacterizationSamplingCalculatorFactory _characterizationSamplingFactory = new Services.ParameterArrayCharacterizationSamplingCalculatorFactory(_scenarioParameters);
            Services.ISourceReductionCalculatorFactory _sourceReductionFactory = new Services.ParameterArraySourceReductionCalculatorFactory(_scenarioParameters);
            Services.IDecontaminationCalculatorFactory _decontaminationFactory = new Services.ParameterArrayDecontaminationCalculatorFactory(_scenarioParameters);
            Services.IOtherCalculatorFactory _otherFactory = new Services.ParameterArrayOtherCalculatorFactory(_scenarioParameters);
            Services.IIncidentCommandCalculatorFactory _incidentCommandFactory = new Services.ParameterArrayIncidentCommandCalculatorFactory(_scenarioParameters);

            // Take scenario parameters and construct calculators
            var cs = _characterizationSamplingFactory.GetCalculator();
            var sr = _sourceReductionFactory.GetCalculator();
            var dc = _decontaminationFactory.GetCalculator();
            var ot = _otherFactory.GetCalculator();
            var ic = _incidentCommandFactory.GetCalculator();

            var cs2 = cs.GetCalculator();

            // Hook up and execute calculator to create results



            // Return results

            throw new NotImplementedException();
        }
    }
}
