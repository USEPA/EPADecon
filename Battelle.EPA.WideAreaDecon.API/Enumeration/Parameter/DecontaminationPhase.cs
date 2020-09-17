using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum DecontaminationPhase
    {
        Indoor,
        Underground,
        Outdoor
    }
}