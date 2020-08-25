using Battelle.EPA.WideAreaDecon.API.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.API.Interfaces.Providers
{
    public interface IParameterListProvider
    {
        ParameterList GetParameterList();
    }
}