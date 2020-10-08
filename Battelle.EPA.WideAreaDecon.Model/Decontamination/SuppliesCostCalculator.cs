using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _deconAgentCostPerVolume;
        private readonly double _deconAgentVolume;
        private readonly Dictionary<SurfaceType, double> _deconAgentVolumeBySurface;
        private readonly double _deconMaterialsCost;
        private readonly double _totalRoomSurfaceArea;

        public SuppliesCostCalculator(
            double deconAgentCostPerVolume,
            double deconMaterialsCost,
            double totalRoomSurfaceArea,
            double deconAgentVolume,
            Dictionary<SurfaceType, double> deconAgentVolumeBySurface)
        {
            _deconAgentCostPerVolume = deconAgentCostPerVolume;
            _deconMaterialsCost = deconMaterialsCost;
            _totalRoomSurfaceArea = totalRoomSurfaceArea;
            _deconAgentVolume = deconAgentVolume;
            _deconAgentVolumeBySurface = deconAgentVolumeBySurface;
        }

        public double NonFoggingSuppliesCostCalculator (Dictionary<SurfaceType, double> percentOfRoomBySurface)
        {
            var agentNeededPerTreatment = _deconAgentVolumeBySurface.Values.Zip(percentOfRoomBySurface.Values, (x, y) => x * y).Sum();
            return _deconMaterialsCost * _totalRoomSurfaceArea + agentNeededPerTreatment * _deconAgentCostPerVolume;
        }

        public double FoggingSuppliesCostCalculator (double roomVolume)
        {
            return _deconMaterialsCost * _totalRoomSurfaceArea + roomVolume * _deconAgentVolume * _deconAgentCostPerVolume;
        }
    }
}