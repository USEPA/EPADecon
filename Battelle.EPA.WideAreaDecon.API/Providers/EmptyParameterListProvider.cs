using Battelle.EPA.WideAreaDecon.API.Enumeration.Providers;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Providers;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Battelle.EPA.WideAreaDecon.API.Providers
{
    public class EmptyParameterListProvider : IParameterListProvider
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterListProviderType Type => ParameterListProviderType.Empty;

        public ParameterList GetParameterList()
        {
            return new ParameterList(){Filters = new ParameterFilter[0]};
        }
    }
}