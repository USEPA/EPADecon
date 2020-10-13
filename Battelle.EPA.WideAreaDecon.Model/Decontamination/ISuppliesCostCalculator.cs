using System.Collections.Generic;
using static Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface ISuppliesCostCalculator
    {
        public double NonFoggingSuppliesCostCalculator(Dictionary<SurfaceType, double> percentOfRoomBySurface);

        public double FoggingSuppliesCostCalculator(double roomVolume);
        
    }
}