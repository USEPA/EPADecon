using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class TempDeconResults
    {
        public double workDays { get; set; }
        public double onSiteDays { get; set; }
        public double suppliesCost { get; set; }
        public double otherCosts { get; set; }
    }
}
