using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _equipmentRentalCostPerDay;

        private readonly ILaborCostCalculator _laborCostCalculator;
        private readonly double _suppliesCostPerDay;

        public SuppliesCostCalculator(
            double equipmentRentalCostPerDay,
            double suppliesCostPerDay,
            ILaborCostCalculator laborCostCalculator)
        {
            _equipmentRentalCostPerDay = equipmentRentalCostPerDay;
            _suppliesCostPerDay = suppliesCostPerDay;
            _laborCostCalculator = laborCostCalculator;
        }

        public double CalculateSuppliesCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays, double _fractionSampledWipe, double _fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> _areaContaminated, int numberLabs, double sampleTimeTransmitted)
        {
            var onSiteDays = _laborCostCalculator.CalculateOnSiteDays( _numberTeams, surfaceAreaToBeSourceReduced, personnelRoundTripDays,
             _fractionSampledWipe, _fractionSampledHepa, _areaContaminated,  numberLabs,  sampleTimeTransmitted);

            return onSiteDays * (_equipmentRentalCostPerDay + _suppliesCostPerDay);
        }
    }
}