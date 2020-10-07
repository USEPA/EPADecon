using System;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public enum ApplicationMethodType
    {

    }

    public enum SporesLevel
    {

    }

    public enum SurfaceType
    {

    }

    internal class EfficacyCalculator : IEfficacyCalculator
    {
        private readonly Dictionary<ApplicationMethodType, string> _appMethodBySurfaceType;
        private readonly Dictionary<SporesLevel, double> _desiredSporeThreshold;
        private readonly Dictionary<SporesLevel, double> _initialSporeLoading;
        private readonly Dictionary<SurfaceType, string> _surfaceTypes;
        private readonly Dictionary<ApplicationMethodType, double> _treatmentDaysPerAm;

        public EfficacyCalculator(
            Dictionary<SporesLevel, double> initialSporeLoading,
            Dictionary<SurfaceType, string> surfaceTypes,
            Dictionary<ApplicationMethodType, string> applicationMethods,
            Dictionary<SporesLevel, double> desiredSporeThreshold,
            Dictionary<ApplicationMethodType, double> treatmentDaysPerAm)
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