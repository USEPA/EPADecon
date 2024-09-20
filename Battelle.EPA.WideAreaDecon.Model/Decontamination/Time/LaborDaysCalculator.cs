using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Scenario;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Time
{
    public class LaborDaysCalculator : ILaborDaysCalculator
    {
        private readonly Dictionary<SurfaceType, ApplicationMethod> _appMethodBySurfaceType;
        private readonly Dictionary<ApplicationMethod, double> _treatmentDaysPerAm;
        private readonly IEfficacyCalculator _efficacyCalculator;

        private Dictionary<SurfaceType, double> _surfaceSporeLoading;

        public LaborDaysCalculator(
            Dictionary<SurfaceType, ApplicationMethod> applicationMethods,
            Dictionary<SurfaceType, double> initialSporeLoading,
            Dictionary<ApplicationMethod, double> treatmentDaysPerAm,
            IEfficacyCalculator efficacyCalculator)
        {
            _appMethodBySurfaceType = applicationMethods;
            _treatmentDaysPerAm = treatmentDaysPerAm;
            _efficacyCalculator = efficacyCalculator;
            _surfaceSporeLoading = initialSporeLoading;

            // remove surfaces with "None" as application method
            foreach (var (surface, _) in _appMethodBySurfaceType.Where(surfaceMethodPair => surfaceMethodPair.Value == ApplicationMethod.None))
            {
                _surfaceSporeLoading.Remove(surface);
            }
        }

        public DecontaminationTreatmentInformation CalculateLaborDays()
        {
            var deconTreatments = new List<Dictionary<ApplicationMethod, double>>();
            var surfaceTreatments = new Dictionary<SurfaceType, int>();

            // Initialize all needed decon rounds for each surface to 0
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                surfaceTreatments.Add(surface, 0);
            }

            // Loop through surfaces until they all meet the desired post-decon threshold
            while (_surfaceSporeLoading.Values.Any(loading => loading > GlobalConstants.DesiredSporeThreshold))
            {
                var surfaces = _surfaceSporeLoading.Where(pair => pair.Value > GlobalConstants.DesiredSporeThreshold).Select(pair => pair.Key).ToList();

                var laborDays = new Dictionary<ApplicationMethod, double>();

                foreach (var surface in surfaces)
                {

                    // Increment the number of decon treatments needed for each contaminated surface
                    surfaceTreatments[surface] += 1;

                    // Get the treatment method for each contaminated surface
                    var method = _appMethodBySurfaceType[surface];

                    if (!laborDays.ContainsKey(method))
                    {
                        laborDays.Add(method, _treatmentDaysPerAm[method]);
                    }
                }

                deconTreatments.Add(laborDays);

                _surfaceSporeLoading = _efficacyCalculator.CalculateEfficacy(_surfaceSporeLoading, _appMethodBySurfaceType);
            }

            // Return the resulting list of decon round descriptions
            // and surface round descriptions
            return new DecontaminationTreatmentInformation()
            {
                DecontaminationTreatments = deconTreatments,
                SurfaceTreatments = surfaceTreatments
            };
        }
    }
}
