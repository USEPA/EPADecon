using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Time
{
    public class EfficacyCalculator : IEfficacyCalculator
    {
        private readonly IParameter[] _efficacyParameters;

        public EfficacyCalculator(IParameter[] efficacyParameters)
        {
            _efficacyParameters = efficacyParameters;
        }

        public Dictionary<SurfaceType, double> CalculateEfficacy(
            Dictionary<SurfaceType, double> surfaceSporeLoading,
            Dictionary<SurfaceType, ApplicationMethod> treatmentMethods)
        {
            // Draw new efficacy values for each round of decontamination
            EfficacyParameterManager efficacyParameterManager = new EfficacyParameterManager(treatmentMethods, _efficacyParameters);
            var efficacyValues = efficacyParameterManager.DrawEfficacyValues();

            foreach (SurfaceType surface in surfaceSporeLoading.Keys.ToList())
            {
                surfaceSporeLoading[surface] = surfaceSporeLoading[surface] > efficacyValues[surface] ? 
                    surfaceSporeLoading[surface] -= efficacyValues[surface] : 0.0;
            }

            return surfaceSporeLoading;
        }
    }
}