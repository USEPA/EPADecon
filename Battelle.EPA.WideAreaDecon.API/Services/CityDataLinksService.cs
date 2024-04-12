using Battelle.EPA.WideAreaDecon.API.Models.City;
using HtmlAgilityPack;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;

namespace Battelle.EPA.WideAreaDecon.API.Services
{
    public class CityDataLinksService
    {
        public CityLinks cl { get; set; }

        public CityDataLinksService()
        {
            cl = new CityLinks
            {
                Cities = new List<City>
                {
                    new City { Name = "New York City", BuildingLink = NYCBuildingLink(), SubwayLink = "https://data.cityofnewyork.us/resource/s7zz-qmyz.json" },
                    new City { Name = "Boston", BuildingLink = "https://gis.bostonplans.org/hosting/rest/services/Boston_Buildings/FeatureServer/9", SubwayLink = "" },
                    new City { Name = "Washington DC", BuildingLink = "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Facility_and_Structure/MapServer/1", SubwayLink = "" },
                    new City { Name = "New Orleans", BuildingLink = "https://data.nola.gov/resource/wx44-n52t.json", SubwayLink = "" },
                    new City { Name = "Philadelphia", BuildingLink = "https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/LI_BUILDING_FOOTPRINTS/FeatureServer/0", SubwayLink = "" },
                    new City { Name = "San Francisco", BuildingLink = "https://data.sfgov.org/resource/ynuv-fyni.json", SubwayLink = "" }
                },

                General = "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/MSBFP2/FeatureServer/0"
            };
        }

        private string NYCBuildingLink()
        {
            try
            {
                var link = "";
                var fullUrl = "https://data.cityofnewyork.us/Housing-Development/Building-Footprints/nqwf-w8eh";
                using var client = new HttpClient();
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls13;
                client.DefaultRequestHeaders.Accept.Clear();
                var response = client.GetStringAsync(fullUrl).Result;
                var rx = new Regex(
                    "\\<h3\\>building\\<\\/h3\\>[\\S\\s]*?\\<div class=\"apiEndpointWrapper\"\\>[\\S\\s]*?\\<\\/div\\>",
                    RegexOptions.Compiled);
                var matches = rx.Matches(response);

                var text = matches.FirstOrDefault().Value;

                var htmlDoc = new HtmlDocument();
                htmlDoc.LoadHtml(text);

                var links = htmlDoc.DocumentNode.Descendants("input");

                link = links.FirstOrDefault().GetAttributeValue("value", "");

                return link;
            }
            catch (HttpRequestException)
            {
                return "";
            }
        }
    }
}