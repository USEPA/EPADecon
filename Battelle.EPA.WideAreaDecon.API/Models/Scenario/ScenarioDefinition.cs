using Battelle.EPA.WideAreaDecon.API.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.API.Models.Scenario
{
    public class ScenarioDefinition
    {
        public ExtentOfContamination Contamination { get; set; }

        public ParameterList GetParameterList()
        {
            return new ParameterList()
            {
                Filters = new[]
                {
                    Contamination.GetParameterFilter()
                }
            };
        }
    }
}