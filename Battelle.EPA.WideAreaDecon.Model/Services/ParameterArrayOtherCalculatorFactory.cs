using Battelle.EPA.WideAreaDecon.Model.Other;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// 
    /// Contains information on how to take dictionary and obtain correct parameters
    /// </summary>
    class ParameterArrayOtherCalculatorFactory : IOtherCalculatorFactory
    {
        private readonly ParameterList _parameters;
        private TransportationCostCalculator Calculator { get; set; }

        public ParameterArrayOtherCalculatorFactory(ParameterList parameters)
        {
            _parameters = parameters;
        }
        public OtherCostCalculator GetCalculator()
        {
            //values temp until index of _parameters dictionary is set
            var personnelPerRentalCar = 3.0;
            var rentalCarCostPerDay = 225.0;
            var perDiemCostPerDay = 250.0;

            Calculator = new TransportationCostCalculator(
                personnelPerRentalCar,
                rentalCarCostPerDay,
                perDiemCostPerDay
            );

            return new OtherCostCalculator();
        }
    }
}
