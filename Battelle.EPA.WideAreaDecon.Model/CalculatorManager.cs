using Battelle.EPA.WideAreaDecon.Model.Domain;
using Battelle.EPA.WideAreaDecon.Model.Interface;
using Event = Battelle.EPA.WideAreaDecon.Model.Services.Event;
using Scenario = Battelle.EPA.WideAreaDecon.Model.Services.Scenario;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class CalculatorManager : ICalculatorManager
    {
        public CalculatorCreator CreateScenarioCalculatorFactories(ScenarioParameters parameters)
        {
            var csCalculatorFactory = new Scenario.ParameterArrayCharacterizationSamplingCalculatorFactory(
                parameters.CharacterizationSamplingParameters,
                parameters.CostParameters);

            var srCalculatorFactory = new Scenario.ParameterArraySourceReductionCalculatorFactory(
                parameters.SourceReductionParameters,
                parameters.CostParameters);

            var dcCalculatorFactory = new Scenario.ParameterArrayDecontaminationCalculatorFactory(
                parameters.DecontaminationParameters,
                parameters.CostParameters);

            var vsCalculatorFactory = new Scenario.ParameterArrayVerificationSamplingCalculatorFactory(
                parameters.VerificationSamplingParameters,
                parameters.CostParameters);

            var clCalculatorFactory = new Scenario.ParameterArrayClearanceSamplingCalculatorFactory(
                parameters.ClearanceSamplingParameters,
                parameters.CostParameters);

            var wsCalculatorFactory = new Scenario.ParameterArrayWasteSamplingCalculatorFactory(
                parameters.WasteSamplingParameters,
                parameters.CostParameters);

            return new CalculatorCreator(
                csCalculatorFactory,
                srCalculatorFactory,
                dcCalculatorFactory,
                vsCalculatorFactory,
                clCalculatorFactory,
                wsCalculatorFactory);
        }

        public CalculatorCreator CreateEventCalculatorFactories(EventParameters parameters)
        {
            var csCalculatorFactory = new Event.ParameterArrayCharacterizationSamplingCalculatorFactory(
                parameters.OtherParameters,
                parameters.CostParameters);

            var srCalculatorFactory = new Event.ParameterArraySourceReductionCalculatorFactory(
                parameters.OtherParameters,
                parameters.CostParameters);

            var dcCalculatorFactory = new Event.ParameterArrayDecontaminationCalculatorFactory(
                parameters.OtherParameters,
                parameters.CostParameters);

            var vsCalculatorFactory = new Event.ParameterArrayVerificationSamplingCalculatorFactory(
                parameters.OtherParameters,
                parameters.CostParameters);

            var clCalculatorFactory = new Event.ParameterArrayClearanceSamplingCalculatorFactory(
                parameters.OtherParameters,
                parameters.CostParameters);

            var wsCalculatorFactory = new Event.ParameterArrayWasteSamplingCalculatorFactory(
                parameters.OtherParameters,
                parameters.CostParameters);

            var icCalculatorFactory = new Event.ParameterArrayIncidentCommandCalculatorFactory(
                parameters.IncidentCommandParameters,
                parameters.OtherParameters,
                parameters.CostParameters);

            return new CalculatorCreator(
                csCalculatorFactory,
                srCalculatorFactory,
                dcCalculatorFactory,
                vsCalculatorFactory,
                clCalculatorFactory,
                wsCalculatorFactory,
                icCalculatorFactory);
        }
    }
}
