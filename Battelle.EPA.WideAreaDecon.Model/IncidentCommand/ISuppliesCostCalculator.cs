using System.Collections.Generic;
using System.Runtime.Serialization.Formatters;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public interface ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays, double _surfaceAreaToBeHepa
            , double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted, Dictionary<SurfaceType, double> _initialSporeLoading);
    }
}