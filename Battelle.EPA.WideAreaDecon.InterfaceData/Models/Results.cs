using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models
{
    public class Results
    {
        public double characterizationSamplingWorkDays { get; set; }
        public double characterizationSamplingOnSiteDays { get; set; }
        public double characterizationSamplingPhaseCost { get; set; }
        public double sourceReductionWorkDays { get; set; }
        public double sourceReductionOnSiteDays { get; set; }
        public double sourceReductionPhaseCost { get; set; }
        public double decontaminationWorkDays { get; set; }
        public double decontaminationOnSiteDays { get; set; }
        public double decontaminationPhaseCost { get; set; }
        public double incidentCommandOnSiteDays { get; set; }
        public double incidentCommandPhaseCost { get; set; }
        public double otherCosts { get; set; }
        public double totalCost { get; set; }
    }
}
