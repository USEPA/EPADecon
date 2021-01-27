using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface ISuppliesCostCalculator
    {
        public double NonFoggingSuppliesCostCalculator(Dictionary<SurfaceType, ContaminationInformation> areaContaminated);

        public double FoggingSuppliesCostCalculator(Dictionary<SurfaceType, ContaminationInformation> areaContaminated);
        
    }
}