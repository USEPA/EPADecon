using Battelle.EPA.WideAreaDecon.Model.Domain;

namespace Battelle.EPA.WideAreaDecon.Model.Interface
{
    public interface ICalculatorManager
    {
        CalculatorCreator CreateScenarioCalculatorFactories(ScenarioParameters parameters);

        CalculatorCreator CreateEventCalculatorFactories(EventParameters parameters);
    }
}
