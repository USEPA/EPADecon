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
/*            for (int i = 0; i < _surfaceTypes.Length(); i++)
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
*/
            double totalDeconDays = 0;

            double[] _numberOfTreatmentsBySurfaceType;

            for (int i = 0; i < _surfaceTypes.Length(); i++)
            {
                double treatmentCount = 0;
                string currentMethod = Karta._appMethodBySurfaceType.ElementAt(i);
                double sporeLoadingAfterTreatment = Karta._initialSporeLoading.ElementAt(i);
                while (sporeLoadingAfterTreatment > _desiredSporeThreshold)
                {
                    sporeLoadingAfterTreatment -= Karta.efficacyValues.ElementAt(i);
                    totalDeconDays += _treatmentDaysPerAm.currentMethod;
                    treatmentCount += 1;
                }

                _numberOfTreatmentsBySurfaceType.ElementAt(i) = treatmentCount;

                for (int j = 0; j < _surfaceTypes.Values.Length(); j++)
                {
                    if ((i != j) & (Karta._appMethodBySurfaceType.ElementAt(i) == Karta._appMethodBySurfaceType.ElementAt(j)))
                    {
                        totalDeconDays -= (_treatmentDaysPerAm.currentMethod * _numberOfTreatmentsBySurfaceType[j]);
                    }
                }
            }
            throw new NotImplementedException();
        }
    }
}