using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface ISuppliesCostCalculator
    {
        public double NonFoggingSuppliesCostCalculator(Dictionary<SurfaceType, double> percentOfRoomBySurface, double roomSurfaceArea);

        public double FoggingSuppliesCostCalculator(double roomVolume);
        
    }
}