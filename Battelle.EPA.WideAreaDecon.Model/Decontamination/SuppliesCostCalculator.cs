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

		public double CalculateSuppliesCost(double RoomVolume, double[] PercentOfRoomBySurface, bool Fogging)
        {
			if (Fogging)
            {
				return (DeconMaterialsCost + (RoomVolume * DeconAgentVolume * DeconAgentCostPerGallon));
            }
			else
            {
				double AgentNeededPerTreatment = 0;
				for(int i = 0; i < DeconAgentVolumeBySurface.Length; i++)
                {
					AgentNeededPerTreatment += (DeconAgentVolumeBySurface[i] * PercentOfRoomBySurface[i]);
                }
				return (DeconMaterialsCost + (AgentNeededPerTreatment * DeconAgentCostPerGallon));

			}
        }
	}
}
