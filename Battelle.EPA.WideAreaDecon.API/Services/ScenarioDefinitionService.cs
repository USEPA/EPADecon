using Battelle.EPA.WideAreaDecon.API.Interfaces.Providers;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Utility.Json;
using Newtonsoft.Json;

namespace Battelle.EPA.WideAreaDecon.API.Services
{
    public class ScenarioDefinitionService
    {
        [JsonConverter(typeof(ParameterListProviderConverter))]
        public IParameterListProvider Provider { get; set; }


        public ParameterList GetParameterList()
        {
            return Provider.GetParameterList();
        }
    }
}