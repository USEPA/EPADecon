using System;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    internal class EfficacyCalculator : IEfficacyCalculator
    {
        private readonly string[] _appMethodBySurfaceType;
        private readonly double[] _desiredSporeThreshold;
        private readonly double[] _initialSporeLoading;
        private readonly string[] _surfaceTypes;
        private readonly double[] _treatmentDaysPerAm;

        public EfficacyCalculator(
            double[] initialSporeLoading,
            string[] surfaceTypes,
            string[] applicationMethods,
            double[] desiredSporeThreshold,
            double[] treatmentDaysPerAm)
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