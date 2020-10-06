using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    class EfficacyCalculator : IEfficacyCalculator
    {
        private readonly double[] InitialSporeLoading;
        private readonly string[] SurfaceTypes;
        private readonly string[] AppMethodBySurfaceType;
        private readonly double[] DesiredSporeThreshold;
        private readonly double[] TreatmentDaysPerAM;

        public EfficacyCalculator(
            double[] initialSporeLoading, 
            string[] surfaceTypes, 
            string[] applicationMethods, 
            double[] desiredSporeThreshold, 
            double[] treatmentDaysPerAM)
        {
            InitialSporeLoading = initialSporeLoading;
            SurfaceTypes = surfaceTypes;
            AppMethodBySurfaceType = applicationMethods;
            DesiredSporeThreshold = desiredSporeThreshold;
            TreatmentDaysPerAM = treatmentDaysPerAM;
        }

        public double CalculateEfficacy()
        {
            throw new NotImplementedException();
        }
    }
}
