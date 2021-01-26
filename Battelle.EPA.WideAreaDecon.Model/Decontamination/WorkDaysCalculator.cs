using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class WorkDaysCalculator : IWorkDaysCalculator 
    {
        private readonly Dictionary<SurfaceType, ApplicationMethod> _appMethodBySurfaceType;
        private readonly double _desiredSporeThreshold;
        private readonly Dictionary<ApplicationMethod, double> _treatmentDaysPerAm;
        private readonly IEfficacyCalculator _efficacyCalculator;
        private readonly Dictionary<SurfaceType, double> _initialSporeLoading;

        public WorkDaysCalculator(
            Dictionary<SurfaceType, ApplicationMethod> applicationMethods,
            Dictionary<SurfaceType, double> initialSporeLoading,
            double desiredSporeThreshold,
            Dictionary<ApplicationMethod, double> treatmentDaysPerAm,
            IEfficacyCalculator efficacyCalculator)
        {
            _appMethodBySurfaceType = applicationMethods;
            _desiredSporeThreshold = desiredSporeThreshold;
            _treatmentDaysPerAm = treatmentDaysPerAm;
            _efficacyCalculator = efficacyCalculator;
            _initialSporeLoading = initialSporeLoading;
        }

        public double CalculateWorkDays()
        {
            Dictionary<SurfaceType, double> _numberOfTreatmentDaysBySurfaceType = new Dictionary<SurfaceType, double>();

            Dictionary<SurfaceType, double> _newSporeLoading = new Dictionary<SurfaceType, double>();

            //mark surfaces that are already below threshold, -99 marks types with an undefined treatment number
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                if (_initialSporeLoading[surface] <= _desiredSporeThreshold)
                {
                    _numberOfTreatmentDaysBySurfaceType[surface] = -1.0;
                }
                else
                {
                    _numberOfTreatmentDaysBySurfaceType[surface] = -99.0;
                }
                _newSporeLoading[surface] = _initialSporeLoading[surface];
            }

            _newSporeLoading = _efficacyCalculator.CalculateEfficacy(_newSporeLoading);

            double treatmentCount = 0.0;

            //while spore loading is below threshold, treatments are counted by surface type
            do
            {
                treatmentCount += 1;
                foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
                {
                    double currentTreatmentDays = 0;

                    foreach (KeyValuePair<SurfaceType, ApplicationMethod> entry in _appMethodBySurfaceType)
                    {
                        currentTreatmentDays = _treatmentDaysPerAm[entry.Value];
                    }

                    if ((_newSporeLoading[surface] < _desiredSporeThreshold) && (_numberOfTreatmentDaysBySurfaceType[surface] == -99))
                    {
                        _numberOfTreatmentDaysBySurfaceType[surface] = treatmentCount * currentTreatmentDays;
                    }
                }

                _newSporeLoading = _efficacyCalculator.CalculateEfficacy(_newSporeLoading);
            } while (_newSporeLoading.Values.Max() > _desiredSporeThreshold) ;

            return _numberOfTreatmentDaysBySurfaceType.Values.Max();




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