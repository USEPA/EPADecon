using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost
{
    public interface ISuppliesCostCalculator
    {
        public DecontaminationResourceAndCostResults CalculateSuppliesCost(Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
            Dictionary<SurfaceType, ApplicationMethod> treatmentMethods, Dictionary<SurfaceType, int> surfaceTreatments, List<Dictionary<ApplicationMethod, double>> decontaminationWorkDays);
    }
}