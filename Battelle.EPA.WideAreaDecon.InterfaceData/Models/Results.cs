using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models
{
    public class Results
    {
        public Dictionary<PhaseCategory, double> workDays { get; set; }
        public Dictionary<PhaseCategory, double> onSiteDays { get; set; }
        public Dictionary<PhaseCategory, double> phaseCost { get; set; }
        public double totalCost { get; set; }
    }
}
