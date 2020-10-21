using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{internal class EfficacyCalculator : IEfficacyCalculator
    {
        private readonly Dictionary<SurfaceType, string> _appMethodBySurfaceType;
        private readonly double _desiredSporeThreshold;
        private readonly Dictionary<SurfaceType, double> _initialSporeLoading;
        private readonly Dictionary<SurfaceType, string> _surfaceTypes;
        private readonly Dictionary<ApplicationMethod, double> _treatmentDaysPerAm;
        private readonly Dictionary<SurfaceType, double> efficacyValues;
        private readonly Dictionary<SurfaceType, double> _numberOfTreatmentsBySurfaceType;
        private readonly double totalDeconDays;
        private readonly double sporeLoadingAfterTreatment;

        public EfficacyCalculator(
            Dictionary<SurfaceType, double> initialSporeLoading,
            Dictionary<SurfaceType, string> surfaceTypes,
            Dictionary<SurfaceType, string> applicationMethods,
            double desiredSporeThreshold,
            Dictionary<ApplicationMethod, double> treatmentDaysPerAm)
        {
            _initialSporeLoading = initialSporeLoading;
            _surfaceTypes = surfaceTypes;
            _appMethodBySurfaceType = applicationMethods;
            _desiredSporeThreshold = desiredSporeThreshold;
            _treatmentDaysPerAm = treatmentDaysPerAm;
        }

        public double CalculateEfficacy()
        {
            for (int i = 0; i < _surfaceTypes.Length(); i++)
            {
                double treatmentCount = 0;
                string currentMethod = _appMethodBySurfaceType.Values[i];
                sporeLoadingAfterTreatment = _initialSporeLoading.Values[i];
                while (sporeLoadingAfterTreatment > _desiredSporeThreshold)
                {
                    sporeLoadingAfterTreatment -= efficacyValues.Values[i];
                    totalDeconDays += _treatmentDaysPerAm.currentMethod;
                    treatmentCount += 1;
                }

                _numberOfTreatmentsBySurfaceType.Values[i] = treatmentCount;

                for (int j = 0; j < _surfaceTypes.Values.Length(); j++)
                {
                    if ((i != j) & (_appMethodBySurfaceType.Values[i] == _appMethodBySurfaceType.Values[j]))
                    {
                        totalDeconDays -= (_treatmentDaysPerAm.currentMethod * _numberOfTreatmentsBySurfaceType.Values[j]);
                    }
                }
            }
            throw new NotImplementedException();
        }
    }
}