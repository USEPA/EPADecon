﻿using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{internal class EfficacyCalculator : IEfficacyCalculator
    {
        private readonly Dictionary<SurfaceType, string> _appMethodBySurfaceType;
        private readonly double _desiredSporeThreshold;
        private readonly double _initialSporeLoading;
        private readonly Dictionary<SurfaceType, string> _surfaceTypes;
        private readonly Dictionary<ApplicationMethod, double> _treatmentDaysPerAm;

        public EfficacyCalculator(
            double initialSporeLoading,
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
            throw new NotImplementedException();
        }
    }
}