using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class OtherResults
    {
        public double characterizationSamplingTravelCost { get; set; }
        public double sourceReductionTravelCost { get; set; }
        public double decontaminationTravelCost { get; set; }
        public double clearanceSamplingTravelCost { get; set; }
        public double wasteSamplingTravelCost { get; set; }
        public double incidentCommandTravelCost { get; set; }
        public double totalTravelCost { get; set; }
    }
}
