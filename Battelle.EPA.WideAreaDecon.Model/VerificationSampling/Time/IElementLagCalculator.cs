using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.VerificationSampling.Time
{
    public interface IElementLagCalculator
    {
        public double CalculateElementLagTime(int numberLabs, double sampleTimeTransmitted, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated);
    }
}