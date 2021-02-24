using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class EfficacyCalculator : IEfficacyCalculator
    {
        private readonly Dictionary<SurfaceType, double> _efficacyValues;

        public EfficacyCalculator(
            Dictionary<SurfaceType, double> efficacyValues)
        {
            _efficacyValues = efficacyValues;
        }

        public Dictionary<SurfaceType, double> CalculateEfficacy(Dictionary<SurfaceType, double> surfaceSporeLoading)
        {
            foreach (SurfaceType surface in surfaceSporeLoading.Keys)
            {
                surfaceSporeLoading[surface] = surfaceSporeLoading[surface] > _efficacyValues[surface] ? 
                    surfaceSporeLoading[surface] -= _efficacyValues[surface] : 0.0;
            }

            return surfaceSporeLoading;
        }
    }
}