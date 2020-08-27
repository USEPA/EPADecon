using Battelle.EPA.WideAreaDecon.API.Enumeration.Providers;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.API.Interfaces.Providers
{
    public interface IParameterListProvider
    {
        ParameterListProviderType Type { get; }
        ParameterList GetParameterList();
    }
}