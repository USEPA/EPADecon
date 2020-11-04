using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays, Dictionary<SurfaceType, double> _initialSporeLoading);
        public double CalculateLaborDays(double personnelRoundTripDays, Dictionary<SurfaceType, double> _initialSporeLoading);
    }
}