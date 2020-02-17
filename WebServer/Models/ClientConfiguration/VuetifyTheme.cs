using System.Collections.Generic;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace WebServer.Models.ClientConfiguration
{
    public class VuetifyTheme
    {
        [JsonProperty("dark", NullValueHandling = NullValueHandling.Ignore)]
        public bool? DarkModeEnabled { get; set; }
        [JsonProperty("disable", NullValueHandling = NullValueHandling.Ignore)]
        public bool? DisableThemes { get; set; }
        [JsonProperty("themes", NullValueHandling = NullValueHandling.Ignore)]
        public Dictionary<string, VuetifyColorScheme> ColorSchemes { get; set; }
    }
}