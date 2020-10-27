using System;
using System.Collections.Generic;
using System.Linq;
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
            double totalDeconDays = 0;

            double[] _numberOfTreatmentsBySurfaceType;

            for (int i = 0; i < _surfaceTypes.Count(); i++)
            {
                double treatmentCount = 0;
                string currentMethod = _appMethodBySurfaceType.ElementAt(i).Value;
                double currentTreatmentDays;

                //geting days per treatment for app method for current surface type
                for (int k = 0; k < _treatmentDaysPerAm.Count; k++)
                {   
                    if (_treatmentDaysPerAm.ElementAt(k) == currentMethod)
                    {
                        currentTreatmentDays = _treatmentDaysPerAm.ElementAt(k).Value;
                    }
                }

                //counts number of treatments for spore loading to be before threshold
                double sporeLoadingAfterTreatment = _initialSporeLoading.ElementAt(i).Value;
                while (sporeLoadingAfterTreatment > _desiredSporeThreshold)
                {
                    sporeLoadingAfterTreatment -= efficacyValues.ElementAt(i).Value;
                    totalDeconDays += currentTreatmentDays;
                    treatmentCount += 1;
                }

                _numberOfTreatmentsBySurfaceType[i] = treatmentCount;

                //subtracts count for overlapping methods
                for (int j = 0; j < _surfaceTypes.Values.Count; j++)
                {
                    if ((i != j) & (_appMethodBySurfaceType.ElementAt(i).Value == _appMethodBySurfaceType.ElementAt(j).Value))
                    {
                        if (_numberOfTreatmentsBySurfaceType[j] < _numberOfTreatmentsBySurfaceType[i])
                        {
                            totalDeconDays -= (currentTreatmentDays * _numberOfTreatmentsBySurfaceType[j]);
                        }
                        else
                        {
                            totalDeconDays -= (currentTreatmentDays * _numberOfTreatmentsBySurfaceType[i]);
                        }
                    }
                }
            }
            return totalDeconDays;
        }
    }
}