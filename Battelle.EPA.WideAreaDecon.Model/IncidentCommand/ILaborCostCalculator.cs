using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public interface ILaborCostCalculator
    {
        public double CalculateOnSiteDays(double workDaysCS, double workDaysSR, double workDaysDC, double _numberTeams, 
            double surfaceAreaToBeSourceReduced, double personnelRoundTripDays, double _fractionSampledWipe, 
            double _fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> _areaContaminated, int numberLabs, 
            double sampleTimeTransmitted);
        public double CalculateLaborCost(double onSiteDays, double _numberTeams, double surfaceAreaToBeSourceReduced, 
            double personnelRoundTripDays, double _fractionSampledWipe, double _fractionSampledHepa, 
            Dictionary<SurfaceType, ContaminationInformation> _areaContaminated, int numberLabs, double sampleTimeTransmitted);
    }
}