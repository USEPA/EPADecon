using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class SuppliesCostCalculator : ISuppliesCostCalculator
	{
		private readonly double _deconAgentCostPerVolume;
		private readonly double _deconMaterialsCost;
		private readonly double _totalRoomSa;
		private readonly double _deconAgentVolume;
		private readonly double[] _deconAgentVolumeBySurface;

		public SuppliesCostCalculator(
			double deconAgentCostPerVolume, 
			double deconMaterialsCost, 
			double totalRoomSa,
			double deconAgentVolume, 
			double[] deconAgentVolumeBySurface)
		{
			_deconAgentCostPerVolume = deconAgentCostPerVolume;
			_deconMaterialsCost = deconMaterialsCost;
			_totalRoomSa = totalRoomSa;
			_deconAgentVolume = deconAgentVolume;
			_deconAgentVolumeBySurface = deconAgentVolumeBySurface;
		}

		//If bool is true, cost is calculated for fogging using volume instead of surface size and breakdown
		public double CalculateSuppliesCost(double roomVolume, double[] percentOfRoomBySurface, bool fogging)
        {
			if (fogging)
            {
				return ((_deconMaterialsCost * _totalRoomSa) + (roomVolume * _deconAgentVolume * _deconAgentCostPerVolume));
            }
			else
            {
				var agentNeededPerTreatment = _deconAgentVolumeBySurface.Zip(percentOfRoomBySurface, (x, y) => x * y).Sum();
				return ((_deconMaterialsCost * _totalRoomSa) + (agentNeededPerTreatment * _deconAgentCostPerVolume));

			}
        }
	}
}
