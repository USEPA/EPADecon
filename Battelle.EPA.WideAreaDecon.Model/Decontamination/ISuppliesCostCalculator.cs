using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface ISuppliesCostCalculator
    {
        public double NonFoggingSuppliesCostCalculator(Dictionary<SurfaceType, double> percentOfRoomBySurface);

        public double FoggingSuppliesCostCalculator(double roomVolume);
        
    }
}