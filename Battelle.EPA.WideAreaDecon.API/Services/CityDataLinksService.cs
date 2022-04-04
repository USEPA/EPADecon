using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Providers;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Providers;
using Battelle.EPA.WideAreaDecon.API.Models.City;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Json;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Net;
using System.Text.RegularExpressions;
using System.Linq;
using HtmlAgilityPack;

namespace Battelle.EPA.WideAreaDecon.API.Services
{
    public class CityDataLinksService
    {
        public CityLinks cl { get; set; }

        public CityDataLinksService()
        {
            cl = new CityLinks();
            cl.cities = new List<City>();
            cl.cities.Add(new City { Name = "New York City", BuildingLink = NYCBuildingLink(), SubwayLink = "https://data.cityofnewyork.us/resource/s7zz-qmyz.json" });
            cl.cities.Add(new City { Name = "Boston", BuildingLink = "https://gis.cityofboston.gov/arcgis/rest/services/SAM/FinalImprovements/MapServer/0", SubwayLink = ""});
            cl.cities.Add(new City { Name = "Washington DC", BuildingLink = "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Facility_and_Structure/MapServer/1", SubwayLink = "" });
            cl.cities.Add(new City { Name = "New Orleans", BuildingLink = "https://data.nola.gov/resource/wx44-n52t.json", SubwayLink = "" });
            cl.cities.Add(new City { Name = "Philadelphia", BuildingLink = "https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/LI_BUILDING_FOOTPRINTS/FeatureServer/0", SubwayLink = "" });
            cl.cities.Add(new City { Name = "San Francisco", BuildingLink = "https://data.sfgov.org/resource/ynuv-fyni.json", SubwayLink = "" });
        }

        private string NYCBuildingLink()
        {
            try
            {
                var link = "";
                string fullUrl = "https://data.cityofnewyork.us/Housing-Development/Building-Footprints/nqwf-w8eh";
                HttpClient client = new HttpClient();
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls13;
                client.DefaultRequestHeaders.Accept.Clear();
                var response = client.GetStringAsync(fullUrl).Result;
                Regex rx = new Regex(
                    "\\<h3\\>building\\<\\/h3\\>[\\S\\s]*?\\<div class=\"apiEndpointWrapper\"\\>[\\S\\s]*?\\<\\/div\\>",
                    RegexOptions.Compiled);
                MatchCollection matches = rx.Matches(response);

                var text = matches.FirstOrDefault().Value;

                HtmlDocument htmlDoc = new HtmlDocument();
                htmlDoc.LoadHtml(text);

                var links = htmlDoc.DocumentNode.Descendants("input");

                link = links.FirstOrDefault().GetAttributeValue("value", "");

                return link;
            }
            catch (Exception ex)
            {
                return "";
            }
        }
    }
}