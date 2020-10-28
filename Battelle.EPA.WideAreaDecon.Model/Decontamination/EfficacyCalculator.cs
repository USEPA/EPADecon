using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{internal class EfficacyCalculator : IEfficacyCalculator
    {
        private readonly Dictionary<SurfaceType, ApplicationMethod> _appMethodBySurfaceType;
        private readonly double _desiredSporeThreshold;
        private readonly Dictionary<SurfaceType, double> _initialSporeLoading;
        private readonly Dictionary<SurfaceType, string> _surfaceTypes;
        private readonly Dictionary<ApplicationMethod, double> _treatmentDaysPerAm;
        private readonly Dictionary<SurfaceType, double> efficacyValues;

        public EfficacyCalculator(
            Dictionary<SurfaceType, double> initialSporeLoading,
            Dictionary<SurfaceType, string> surfaceTypes,
            Dictionary<SurfaceType, ApplicationMethod> applicationMethods,
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
            double totalDeconDays = 0;

            var _numberOfTreatmentsBySurfaceType = new Dictionary<SurfaceType, double>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                double treatmentCount = 0;
                var currentMethod = _appMethodBySurfaceType[surface];

                var currentTreatmentDays = _treatmentDaysPerAm
                    .First(appMethod => appMethod.Key == currentMethod)
                    .Value;

                //counts number of treatments for spore loading to be before threshold
                double sporeLoadingAfterTreatment = _initialSporeLoading[surface];
                while (sporeLoadingAfterTreatment > _desiredSporeThreshold)
                {
                    sporeLoadingAfterTreatment -= efficacyValues[surface];
                    totalDeconDays += currentTreatmentDays;
                    treatmentCount += 1;
                }

                _numberOfTreatmentsBySurfaceType[surface] = treatmentCount;
                throw new NotImplementedException();
                //subtracts count for overlapping methods
                //for (int j = 0; j < _surfaceTypes.Values.Count; j++)
                //{
                //    if ((i != j) && (_appMethodBySurfaceType.ElementAt(i).Value == _appMethodBySurfaceType.ElementAt(j).Value))
                //    {
                //        if (_numberOfTreatmentsBySurfaceType[j] < _numberOfTreatmentsBySurfaceType[i])
                //        {
                //            totalDeconDays -= (currentTreatmentDays * _numberOfTreatmentsBySurfaceType[j]);
                //        }
                //        else
                //        {
                //            totalDeconDays -= (currentTreatmentDays * _numberOfTreatmentsBySurfaceType[i]);
                //        }
                //    }
                //}
            }
            return totalDeconDays;
        }
    }
}