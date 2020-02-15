using System.Drawing;
using Newtonsoft.Json;
using WebServer.Utility.Json;

namespace WebServer.Models.ClientConfiguration
{
    public class VuetifyColorScheme
    {
        [JsonConverter(typeof(NewtonsoftJsonColorConverter))]
        [JsonProperty("primary", NullValueHandling = NullValueHandling.Ignore)]
        public Color? Primary { get; set; }
        [JsonConverter(typeof(NewtonsoftJsonColorConverter))]
        [JsonProperty("secondary", NullValueHandling = NullValueHandling.Ignore)]
        public Color? Secondary { get; set; }
        [JsonConverter(typeof(NewtonsoftJsonColorConverter))]
        [JsonProperty("accent", NullValueHandling = NullValueHandling.Ignore)]
        public Color? Accent { get; set; }
        [JsonConverter(typeof(NewtonsoftJsonColorConverter))]
        [JsonProperty("info", NullValueHandling = NullValueHandling.Ignore)]
        public Color? Info { get; set; }
        [JsonConverter(typeof(NewtonsoftJsonColorConverter))]
        [JsonProperty("warning", NullValueHandling = NullValueHandling.Ignore)]
        public Color? Warning { get; set; }
        [JsonConverter(typeof(NewtonsoftJsonColorConverter))]
        [JsonProperty("error", NullValueHandling = NullValueHandling.Ignore)]
        public Color? Error { get; set; }
        [JsonConverter(typeof(NewtonsoftJsonColorConverter))]
        [JsonProperty("success", NullValueHandling = NullValueHandling.Ignore)]
        public Color? Success { get; set; }
        [JsonConverter(typeof(NewtonsoftJsonColorConverter))]
        [JsonProperty("anchor", NullValueHandling = NullValueHandling.Ignore)]
        public Color? Anchor { get; set; }
    }
}