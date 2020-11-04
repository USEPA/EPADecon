using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    internal class WorkDaysCalculator : IWorkDaysCalculator 
    {
        private readonly Dictionary<SurfaceType, ApplicationMethod> _appMethodBySurfaceType;
        private readonly double _desiredSporeThreshold;
        private readonly Dictionary<SurfaceType, string> _surfaceTypes;
        private readonly Dictionary<ApplicationMethod, double> _treatmentDaysPerAm;
        private readonly EfficacyCalculator _efficacyCalculator;

        public WorkDaysCalculator(
            Dictionary<SurfaceType, string> surfaceTypes,
            Dictionary<SurfaceType, ApplicationMethod> applicationMethods,
            double desiredSporeThreshold,
            Dictionary<ApplicationMethod, double> treatmentDaysPerAm,
            EfficacyCalculator efficacyCalculator)
        {
            _surfaceTypes = surfaceTypes;
            _appMethodBySurfaceType = applicationMethods;
            _desiredSporeThreshold = desiredSporeThreshold;
            _treatmentDaysPerAm = treatmentDaysPerAm;
            _efficacyCalculator = efficacyCalculator;
        }

        public double CalculateWorkDays(Dictionary<SurfaceType, double> _initialSporeLoading)
        {
            double[] _numberOfTreatmentDaysBySurfaceType = new double [_surfaceTypes.Count];

            Dictionary<SurfaceType, double> _newSporeLoading;

            //mark surfaces that are already below threshold, -99 marks types with an undefined treatment number
            for (int i = 0; i < _surfaceTypes.Count(); i++)
            {
                if (_initialSporeLoading.ElementAt(i).Value < _desiredSporeThreshold)
                {
                    _numberOfTreatmentDaysBySurfaceType[i] = -1.0;
                }
                else
                {
                    _numberOfTreatmentDaysBySurfaceType[i] = -99.0;
                }
            }

            _newSporeLoading = _efficacyCalculator.CalculateEfficacy(_initialSporeLoading);

            double treatmentCount = 0.0;

            //while spore loading is below threshold, treatments are counted by surface type
            while (_newSporeLoading.Values.Max() < _desiredSporeThreshold)
            {
                treatmentCount += 1;
                for (int i = 0; i < _surfaceTypes.Count(); i++)
                {
                    double currentTreatmentDays = 0;

                    foreach (KeyValuePair<SurfaceType, ApplicationMethod> entry in _appMethodBySurfaceType)
                    {
                        currentTreatmentDays = _treatmentDaysPerAm[entry.Value];
                    }

                    if ((_initialSporeLoading.ElementAt(i).Value < _desiredSporeThreshold) && (_numberOfTreatmentDaysBySurfaceType[i] != -99))
                    {
                        _numberOfTreatmentDaysBySurfaceType[i] = treatmentCount * currentTreatmentDays;
                    }
                }

                _newSporeLoading = _efficacyCalculator.CalculateEfficacy(_initialSporeLoading);
            }

            return _numberOfTreatmentDaysBySurfaceType.Max();




            /*
            for (int i = 0; i < _surfaceTypes.Count(); i++)
            {
                treatmentCount = 0;

                double currentTreatmentDays = 0;

                var currentMethod = _appMethodBySurfaceType.ElementAt(i).Value;
              
                foreach(KeyValuePair<SurfaceType, ApplicationMethod> entry in _appMethodBySurfaceType)
                {
                    currentTreatmentDays = _treatmentDaysPerAm[entry.Value];
                }


                //counts number of treatments for spore loading to be before threshold
                double sporeLoadingAfterTreatment = _initialSporeLoading.ElementAt(i).Value;
                while (sporeLoadingAfterTreatment > _desiredSporeThreshold)
                {
                    sporeLoadingAfterTreatment -= _efficacyValues.ElementAt(i).Value;
                    totalDeconDays += currentTreatmentDays;
                    treatmentCount += 1;
                }
                

                _numberOfTreatmentsBySurfaceType[i] = treatmentCount;

            }
            

            //subtracts count for overlapping methods
            for (int i = 0; i < _surfaceTypes.Count(); i++)
            {
                double treatmentDays = 0;
                for (int j = 0; j < _surfaceTypes.Values.Count; j++)
                {
                    if ((i != j) & (_appMethodBySurfaceType.ElementAt(i).Value == _appMethodBySurfaceType.ElementAt(j).Value))
                    {
                        foreach(KeyValuePair<SurfaceType, ApplicationMethod> entry in _appMethodBySurfaceType)
                        {
                            treatmentDays = _treatmentDaysPerAm[entry.Value];
                        }

                        if (_numberOfTreatmentDaysBySurfaceType[j] < _numberOfTreatmentDaysBySurfaceType[i])
                        {
                            totalDeconDays -= (treatmentDays * _numberOfTreatmentDaysBySurfaceType[j]);
                        }
                        else
                        {
                            totalDeconDays -= (treatmentDays * _numberOfTreatmentDaysBySurfaceType[i]);
                        }
                    }
                }
            }
            
            return totalDeconDays;
            */
        }
    }
}