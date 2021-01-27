using System.Collections.Generic;
using System.Linq;
using System;
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

        public double NonFoggingSuppliesCostCalculator(Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var surfaceContamination = new Dictionary<SurfaceType, double>();
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                surfaceContamination[surface] = areaContaminated[surface].AreaContaminated;
            }

            var totalContaminationArea = areaContaminated.Skip(1).Sum(x => x.Value.AreaContaminated);
            var agentNeededPerTreatment = _deconAgentVolumeBySurface.Values.Zip(surfaceContamination.Values, (x, y) => x * y).Sum();
            return (_deconMaterialsCost * totalContaminationArea) + ((agentNeededPerTreatment) * _deconAgentCostPerVolume);
        }

        public double FoggingSuppliesCostCalculator(Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var totalContaminationArea = areaContaminated.Skip(1).Sum(x => x.Value.AreaContaminated);
            var roomHeight = 9.0; //THIS NEEDS TO BE REMOVED IN THE FUTURE
            return _deconMaterialsCost + (totalContaminationArea * roomHeight * _deconAgentVolume * _deconAgentCostPerVolume);
        }
    }
}