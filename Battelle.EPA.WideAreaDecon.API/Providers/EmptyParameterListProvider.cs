using Battelle.EPA.WideAreaDecon.API.Interfaces.Providers;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.API.Providers
{
    public class EmptyParameterListProvider : IParameterListProvider
    {
        public ParameterList GetParameterList()
        {
            return new ParameterList(){Version = 1, Filters = new ParameterFilter[0]};
        }
    }
}