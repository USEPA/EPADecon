﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class EfficacyCalculator : IEfficacyCalculator
    {
        /*private readonly Dictionary<SurfaceType, ApplicationMethod> _appMethodBySurfaceType;
        private readonly double _desiredSporeThreshold;
        private readonly Dictionary<SurfaceType, string> _surfaceTypes;
        private readonly Dictionary<ApplicationMethod, double> _treatmentDaysPerAm; */
        private readonly Dictionary<SurfaceType, double> _efficacyValues;

        public EfficacyCalculator(
            /*Dictionary<SurfaceType, string> surfaceTypes,
            Dictionary<SurfaceType, ApplicationMethod> applicationMethods,
            double desiredSporeThreshold,
            Dictionary<ApplicationMethod, double> treatmentDaysPerAm, */
            Dictionary<SurfaceType, double> efficacyValues)
        {
            /*_surfaceTypes = surfaceTypes;
            _appMethodBySurfaceType = applicationMethods;
            _desiredSporeThreshold = desiredSporeThreshold;
            _treatmentDaysPerAm = treatmentDaysPerAm;*/
            _efficacyValues = efficacyValues;
        }

        public Dictionary<SurfaceType, double> CalculateEfficacy(Dictionary<SurfaceType, double> _initialSporeLoading)
        {
            Dictionary<SurfaceType, double> _newSporeLoading = new Dictionary<SurfaceType, double>();

            //Dictionary<SurfaceType,double> _newSporeLoading;
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                if ((_initialSporeLoading[surface] - _efficacyValues[surface]) > 0)
                {
                    _newSporeLoading[surface] = (_initialSporeLoading[surface] - _efficacyValues[surface]);
                }
                else
                {
                    _newSporeLoading[surface] = 0.0;
                }
            }
            //_newSporeLoading.Values = _initialSporeLoading.Values.Zip(_efficacyValues.Values, (x, y) => x - y);

            return _newSporeLoading;
        }
            /*
            double totalDeconDays = 0;

            double[] _numberOfTreatmentsBySurfaceType = new double [_surfaceTypes.Count];

            double[] _newSporeLoading = new double [_surfaceTypes.Count];

            double treatmentCount;

            
            for (int i = 0; i < _surfaceTypes.Count(); i++)
            {
                treatmentCount = 0;

                double currentTreatmentDays = 0;

                var currentMethod = _appMethodBySurfaceType.ElementAt(i).Value;
              
                foreach(KeyValuePair<SurfaceType, ApplicationMethod> entry in _appMethodBySurfaceType)
                {
                    currentTreatmentDays = _treatmentDaysPerAm[entry.Value];
                }
                */

                //counts number of treatments for spore loading to be before threshold
                /*double sporeLoadingAfterTreatment = _initialSporeLoading.ElementAt(i).Value;
                while (sporeLoadingAfterTreatment > _desiredSporeThreshold)
                {
                    sporeLoadingAfterTreatment -= _efficacyValues.ElementAt(i).Value;
                    totalDeconDays += currentTreatmentDays;
                    treatmentCount += 1;
                }
                
                _numberOfTreatmentsBySurfaceType[i] = treatmentCount;
                
            }
                */
            //subtracts count for overlapping methods
            /*for (int i = 0; i < _surfaceTypes.Count(); i++)
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

                        if (_numberOfTreatmentsBySurfaceType[j] < _numberOfTreatmentsBySurfaceType[i])
                        {
                            totalDeconDays -= (treatmentDays * _numberOfTreatmentsBySurfaceType[j]);
                        }
                        else
                        {
                            totalDeconDays -= (treatmentDays * _numberOfTreatmentsBySurfaceType[i]);
                        }
                    }
                }
            }
            
            return totalDeconDays;
            */
    }
}