using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class SuppliesCostCalculator : ISuppliesCostCalculator
	{
		private readonly double DeconAgentCostPerVolume;
		private readonly double DeconMaterialsCost;
		private readonly double DeconAgentVolume;
		private readonly double[] DeconAgentVolumeBySurface;

		public SuppliesCostCalculator(
			double deconAgentCostPerVolume, 
			double deconMaterialsCost, 
			double deconAgentVolume, 
			double[] deconAgentVolumeBySurface)
		{
			DeconAgentCostPerVolume = deconAgentCostPerVolume;
			DeconMaterialsCost = deconMaterialsCost;
			DeconAgentVolume = deconAgentVolume;
			DeconAgentVolumeBySurface = deconAgentVolumeBySurface;
		}

		//If bool is true, cost is calculated for fogging using volume instead of surface size and breakdown
		public double CalculateSuppliesCost(double RoomVolume, double[] PercentOfRoomBySurface, bool Fogging)
        {
			if (Fogging)
            {
				return (DeconMaterialsCost + (RoomVolume * DeconAgentVolume * DeconAgentCostPerVolume));
            }
			else
            {
				var AgentNeededPerTreatment = DeconAgentVolumeBySurface.Zip(PercentOfRoomBySurface, (x, y) => x * y).Sum();
				return (DeconMaterialsCost + (AgentNeededPerTreatment * DeconAgentCostPerVolume));

			}
        }
	}
}
