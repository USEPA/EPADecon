using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class IncidentCommandResults
    {
        public double OnSiteDays { get; set; }
        public double ElementCost { get; set; }

        public static IncidentCommandResults SumResults(List<IncidentCommandResults> segmentElementResults)
        {
            IncidentCommandResults summedElementResults = new()
            {
                OnSiteDays = segmentElementResults.Sum(segmentElement => segmentElement.OnSiteDays),
                ElementCost = segmentElementResults.Sum(segmentElement => segmentElement.ElementCost)
            };

            return summedElementResults;
        }
    }
}
