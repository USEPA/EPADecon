using System;
namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class SuppliesCostCalculator
	{
		private double DeconAgentCostPerGallon { get; set; }
		private double DeconMaterialsCost { get; set; }
		private double DeconAgentVolume { get; set; }
		private double[] DeconAgentVolumeBySurface{ get; set; }

		public SuppliesCostCalculator()
        {

        }

		public SuppliesCostCalculator(double deconAgentCostPerGallon, double deconMaterialsCost, double deconAgentVolume, double[] deconAgentVolumeBySurface)
		{
			DeconAgentCostPerGallon = deconAgentCostPerGallon;
			DeconMaterialsCost = deconMaterialsCost;
			DeconAgentVolume = deconAgentVolume;
			DeconAgentVolumeBySurface = deconAgentVolumeBySurface;
		}

		//If bool is true, cost is calculated for fogging using volume instead of surface size and breakdown
		public double CalculateSuppliesCost(double RoomVolume, double[] PercentOfRoomBySurface, bool Fogging)
        {
			if (Fogging)
            {
				return (DeconMaterialsCost + (RoomVolume * DeconAgentVolume * DeconAgentCostPerGallon));
            }
			else
            {
				var AgentNeededPerTreatment = DeconAgentVolumeBySurface.Zip(PercentOfRoomBySurface, (x, y) => x * y).Sum();
				return (DeconMaterialsCost + (AgentNeededPerTreatment * DeconAgentCostPerGallon));

			}
        }
	}
}
