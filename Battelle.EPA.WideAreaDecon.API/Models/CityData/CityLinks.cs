using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Newtonsoft.Json;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;

namespace Battelle.EPA.WideAreaDecon.API.Models.City
{
    /// <summary>
    /// Contains all the information related to cities
    /// </summary>
    public class CityLinks
    {
        [JsonProperty]
        public List<City> cities { get; set; }
    }
}