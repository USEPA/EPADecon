﻿using Newtonsoft.Json;

namespace Battelle.EPA.WideAreaDecon.API.Models.ClientConfiguration
{
    /// <summary>
    /// The client configuration settings which are provided to the frontend on request
    /// </summary>
    public class ClientConfiguration
    {
        /// <summary>
        /// The vuetify theme settings (controls application colors)
        /// </summary>
        [JsonProperty("theme")]
        public VuetifyTheme VuetifySettings { get; set; }

        /// <summary>
        /// The version of the current application
        /// </summary>
        [JsonProperty("applicationVersion")]
        public string Version => GetType().Assembly.GetName().Version.ToString();

        /// <summary>
        /// The title of the current application
        /// </summary>
        [JsonProperty("applicationTitle")]
        public string Title => "Wide Area Decontamination";

        /// <summary>
        /// The publisher of the application
        /// </summary>
        [JsonProperty("publisherName")]
        public string PublisherName => "Battelle Memorial Institute";
    }
}