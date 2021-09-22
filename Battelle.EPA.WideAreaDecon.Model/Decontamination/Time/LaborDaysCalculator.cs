using System.Linq;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

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
        }

        public List<Dictionary<ApplicationMethod, double>> CalculateLaborDays()
        {
            var deconRounds = new List<Dictionary<ApplicationMethod, double>>();

            while (_surfaceSporeLoading.Values.Any(loading => loading > GlobalConstants.DesiredSporeThreshold))
            {
                var surfaces = _surfaceSporeLoading.Where(pair => pair.Value > GlobalConstants.DesiredSporeThreshold).Select(pair => pair.Key).ToList();

                var laborDays = new Dictionary<ApplicationMethod, double>();

                foreach (var surface in surfaces)
                {
                    var method = _appMethodBySurfaceType[surface];

                    if (!laborDays.ContainsKey(method))
                    {
                        laborDays.Add(method, _treatmentDaysPerAm[method]);
                    }
                }

                deconRounds.Add(laborDays);

                _surfaceSporeLoading = _efficacyCalculator.CalculateEfficacy(_surfaceSporeLoading, _appMethodBySurfaceType);
            }

            return deconRounds;
        }
    }
}
