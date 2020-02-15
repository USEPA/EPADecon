using System.ComponentModel;
using Newtonsoft.Json;

namespace WebServer.Models.ClientConfiguration
{
    public class ClientConfiguration
    {
        [JsonProperty("theme")]
        public VuetifyTheme VuetifySettings { get; set; }

    }
}