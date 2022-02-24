using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Newtonsoft.Json;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;

namespace Battelle.EPA.WideAreaDecon.API.Models.City
{
    /// <summary>
    /// Contains all the information related to a job
    /// </summary>
    public class City
    {

        [JsonProperty(Required = Required.Always)]
        public string Name { get; set; }

        [JsonProperty(Required = Required.Always)]
        public string BuildingLink { get; set; }

        [JsonProperty(Required = Required.Always)]
        public string SubwayLink { get; set; }

    }
}