using Newtonsoft.Json;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.API.Models.City
{
    /// <summary>
    /// Contains all the information related to cities
    /// </summary>
    public class CityLinks
    {
        [JsonProperty]
        public List<City> Cities { get; set; }
        public string General { get; set; }
    }
}