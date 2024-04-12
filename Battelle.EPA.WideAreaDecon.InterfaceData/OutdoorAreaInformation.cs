using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData
{
    public class OutdoorAreaInformation
    {
        public List<Dictionary<SurfaceType, ContaminationInformation>> outdoorAreaSegments { get; set; }
        public double drawnCityblockSize { get; set; }
    }
}
