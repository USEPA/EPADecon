using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class TempCSResults
    {
        public double workDays { get; set; }
        public double onSiteDays { get; set; }
        public double labDays { get; set; }
        public double phaseCost { get; set; }
    }
}
