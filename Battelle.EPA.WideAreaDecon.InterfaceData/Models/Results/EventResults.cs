using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class EventResults
    {
        public OtherResults otherResults { get; set; }
        public double totalEventCost { get; set; }
        public double totalEventDuration { get; set; }
        public double totalContaminationArea { get; set; }
        public double totalSolidWasteProduced { get; set; }
        public double totalAqueousWasteProduced { get; set; }
    }
}
