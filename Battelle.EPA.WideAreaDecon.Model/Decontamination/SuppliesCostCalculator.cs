using System.Collections.Generic;
using System.Linq;
using static Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _deconAgentCostPerVolume;
        private readonly double _deconAgentVolume;
        private readonly Dictionary<SurfaceType, double> _deconAgentVolumeBySurface;
        private readonly double _deconMaterialsCost;

        public SuppliesCostCalculator(
            double deconAgentCostPerVolume,
            double deconMaterialsCost,
            double deconAgentVolume,
            Dictionary<SurfaceType, double> deconAgentVolumeBySurface)
        {
            _deconAgentCostPerVolume = deconAgentCostPerVolume;
            _deconMaterialsCost = deconMaterialsCost;
            _deconAgentVolume = deconAgentVolume;
            _deconAgentVolumeBySurface = deconAgentVolumeBySurface;
        }

        public double NonFoggingSuppliesCostCalculator (Dictionary<SurfaceType, double> percentOfRoomBySurface)
        {
            var agentNeededPerTreatment = _deconAgentVolumeBySurface.Values.Zip(percentOfRoomBySurface.Values, (x, y) => x * y).Sum();
            return _deconMaterialsCost + ((agentNeededPerTreatment) * _deconAgentCostPerVolume);
        }

        public double FoggingSuppliesCostCalculator (double roomVolume)
        {
            return _deconMaterialsCost + (roomVolume * _deconAgentVolume * _deconAgentCostPerVolume);
        }
    }
}