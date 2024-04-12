using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter
{
    /// <summary>
    /// Common sampling parameters that apply to elements that occur after decon has taken place
    /// </summary>
    public interface IPostDeconSamplingParameters : ISiteSamplingParameters
    {
        public FrequencyValueType SamplingFrequency { get; set; }
    }
}
