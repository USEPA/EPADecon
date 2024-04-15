using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _deconAgentCostPerVolume;
        private readonly double _deconAgentVolume;
        private readonly Dictionary<SurfaceType, double> _deconAgentVolumeBySurface;
        private readonly double _deconMaterialsCost;
        private readonly Dictionary<SurfaceType, ApplicationMethod> _appMethodBySurfaceType;

        public SuppliesCostCalculator(
            double deconAgentCostPerVolume,
            double deconMaterialsCost,
            double deconAgentVolume,
            Dictionary<SurfaceType, double> deconAgentVolumeBySurface,
            Dictionary<SurfaceType, ApplicationMethod> appMethodBySurfaceType)
        {
            _deconAgentCostPerVolume = deconAgentCostPerVolume;
            _deconMaterialsCost = deconMaterialsCost;
            _deconAgentVolume = deconAgentVolume;
            _deconAgentVolumeBySurface = deconAgentVolumeBySurface;
            _appMethodBySurfaceType = appMethodBySurfaceType;
        }

        public DecontaminationResourceAndCostResults CalculateSuppliesCost(Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
            Dictionary<SurfaceType, ApplicationMethod> treatmentMethods, Dictionary<SurfaceType, int> surfaceTreatments,
            List<Dictionary<ApplicationMethod, double>> decontaminationWorkDays)
        {
            // Calculating the total contaminated area
            var totalContaminationArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            // Invoking the calculations specific to non-fogging/fumigation treatment methods and the calculations specific 
            // to the fogging/fumigation treatment methods
            var nonFoggingSupplies = NonFoggingSuppliesCostCalculator(areaContaminated, treatmentMethods, surfaceTreatments);
            var foggingSupplies = FoggingSuppliesCostCalculator(areaContaminated, treatmentMethods, surfaceTreatments, decontaminationWorkDays);

            // Combining the agent volume values for non-fogging/fumigation and fogging/fumigation treatment methods
            // i.e., decon agent volumes for all treatment methods in one dictionary
            var deconAgentVolumes = SetDeconAgentVolumes(nonFoggingSupplies.TotalDeconAgentVolume, foggingSupplies.TotalDeconAgentVolume);

            // Calculating the decon materials cost
            var materialsCost = _deconMaterialsCost * totalContaminationArea;

            // Returning results object
            return new DecontaminationResourceAndCostResults()
            {
                DecontaminationCost = nonFoggingSupplies.DecontaminationCost + foggingSupplies.DecontaminationCost + materialsCost,
                TotalDeconAgentVolume = deconAgentVolumes,
                TotalPpeUnits = new Dictionary<PpeLevel, int>()
            };
        }

        private DecontaminationResourceAndCostResults NonFoggingSuppliesCostCalculator(Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
            Dictionary<SurfaceType, ApplicationMethod> treatmentMethods, Dictionary<SurfaceType, int> surfaceTreatments)
        {
            var surfaceContamination = new Dictionary<SurfaceType, double>();

            // Iterating through each contaminated surface that we have
            foreach (SurfaceType surface in areaContaminated.Keys.ToList())
            {
                // If the treatment method for that surface isn't fogging or fumigation, adding the surface to our 
                // dictionary along with the corresponding area associated with that surface type
                // Otherwise, adding 0.0 as the area so we don't account for it
                if (treatmentMethods[surface] != ApplicationMethod.Fogging && treatmentMethods[surface] != ApplicationMethod.Fumigation)
                {
                    surfaceContamination.Add(surface, areaContaminated[surface].AreaContaminated);
                }
                else
                {
                    surfaceContamination.Add(surface, 0.0);
                }
            }

            // Declaring an object to hold the agent volumes by application method and 
            // initializing all values to 0
            var agentVolumesByApplicationMethod = new Dictionary<ApplicationMethod, double>();

            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                agentVolumesByApplicationMethod.Add(method, 0.0);
            }

            // Calculate the volume of agent used for each surface for all decon treatment rounds
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                if (surfaceContamination.TryGetValue(surface, out var surfaceArea))
                {
                    // Get the application method used for the surface
                    var method = _appMethodBySurfaceType[surface];

                    // Add the amount of agent needed for that surface to the corresponding value for the application method
                    agentVolumesByApplicationMethod[method] += _deconAgentVolumeBySurface[surface] * surfaceArea * surfaceTreatments[surface];
                }
            }

            return new DecontaminationResourceAndCostResults()
            {
                DecontaminationCost = agentVolumesByApplicationMethod.Sum(x => x.Value) * _deconAgentCostPerVolume,
                TotalDeconAgentVolume = agentVolumesByApplicationMethod,
                TotalPpeUnits = new Dictionary<PpeLevel, int>()
            };
        }

        private DecontaminationResourceAndCostResults FoggingSuppliesCostCalculator(Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
            Dictionary<SurfaceType, ApplicationMethod> treatmentMethods, Dictionary<SurfaceType, int> surfaceTreatments,
            List<Dictionary<ApplicationMethod, double>> decontaminationWorkDays)
        {
            // Declaring an object to hold the agent volumes by application method and 
            // initializing all values to 0
            var agentVolumesByApplicationMethod = new Dictionary<ApplicationMethod, double>();

            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                agentVolumesByApplicationMethod.Add(method, 0.0);
            }

            int foggingRounds = 0;
            int fumigationRounds = 0;

            // If fogging is used, we'll add agent volumes to the Dictionary created above
            if (treatmentMethods.ContainsValue(ApplicationMethod.Fogging))
            {
                foggingRounds += decontaminationWorkDays.Count;

                // Calculating the amount of agent used for all fogging rounds
                agentVolumesByApplicationMethod[ApplicationMethod.Fogging] += areaContaminated.Sum(x => x.Value.AreaContaminated) *
                    GlobalConstants.RoomHeight * _deconAgentVolume * foggingRounds;
            }

            // If fumigation is used, we'll add agent volumes to the Dictionary created above
            if (treatmentMethods.ContainsValue(ApplicationMethod.Fumigation))
            {
                fumigationRounds += decontaminationWorkDays.Count;

                // Calculating the amount of agent used for all fumigation rounds
                agentVolumesByApplicationMethod[ApplicationMethod.Fumigation] += areaContaminated.Sum(x => x.Value.AreaContaminated) *
                    GlobalConstants.RoomHeight * _deconAgentVolume * fumigationRounds;
            }

            return new DecontaminationResourceAndCostResults()
            {
                DecontaminationCost = agentVolumesByApplicationMethod.Sum(x => x.Value) * _deconAgentCostPerVolume,
                TotalDeconAgentVolume = agentVolumesByApplicationMethod,
                TotalPpeUnits = new Dictionary<PpeLevel, int>()
            };
        }

        private Dictionary<ApplicationMethod, double> SetDeconAgentVolumes(Dictionary<ApplicationMethod, double> nonFoggingAgentVolumes, Dictionary<ApplicationMethod, double> foggingAgentVolumes)
        {
            // Creating the object to hold the agent volumes for all application methods
            var deconAgentVolumes = new Dictionary<ApplicationMethod, double>();

            // Filling in the correct volumes for the correct application methods based on the pieces created above
            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                if (nonFoggingAgentVolumes[method] > 0 && foggingAgentVolumes[method].Equals(0))
                {
                    deconAgentVolumes.Add(method, nonFoggingAgentVolumes[method]);
                }
                else if (foggingAgentVolumes[method] > 0 && nonFoggingAgentVolumes[method].Equals(0))
                {
                    deconAgentVolumes.Add(method, foggingAgentVolumes[method]);
                }
                else if (foggingAgentVolumes[method] > 0 && nonFoggingAgentVolumes[method] > 0)
                {
                    throw new ApplicationException($"{method} cannot be both a fogging/fumigation and non-fogging/non-fumigation application method");
                }
                else
                {
                    deconAgentVolumes.Add(method, 0.0);
                }
            }

            // Returning the Dictionary of volumes by application method
            return deconAgentVolumes;
        }
    }
}