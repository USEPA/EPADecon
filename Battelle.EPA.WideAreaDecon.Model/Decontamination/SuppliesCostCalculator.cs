using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

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

        public double NonFoggingSuppliesCostCalculator(Dictionary<SurfaceType, double> percentOfRoomBySurface, double roomSurfaceArea)
        {
            var agentNeededPerTreatment = _deconAgentVolumeBySurface.Values.Zip(percentOfRoomBySurface.Values, (x, y) => x * y).Sum();
            return (_deconMaterialsCost * roomSurfaceArea) + ((agentNeededPerTreatment) * _deconAgentCostPerVolume);
        }

        public double FoggingSuppliesCostCalculator(Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var totalContaminationArea = areaContaminated.Skip(1).Sum(x => x.Value.AreaContaminated);
            var roomHeight = 9.0; //THIS NEEDS TO BE REMOVED IN THE FUTURE
            return _deconMaterialsCost + (totalContaminationArea * roomHeight * _deconAgentVolume * _deconAgentCostPerVolume);
        }
    }
}