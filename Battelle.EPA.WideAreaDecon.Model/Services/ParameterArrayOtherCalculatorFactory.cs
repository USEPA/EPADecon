using Battelle.EPA.WideAreaDecon.Model.Other;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using System;
using System.Collections.Generic;
namespace Battelle.EPA.WideAreaDecon.Model.Services
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// 
    /// Contains information on how to take dictionary and obtain correct parameters
    /// </summary>
    class ParameterArrayOtherCalculatorFactory : IOtherCalculatorFactory
    {
        private readonly Dictionary<string, IParameter> _parameters;
        private TransportationCostCalculator Calculator { get; set; }

        public ParameterArrayOtherCalculatorFactory(Dictionary<string, IParameter> parameters)
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
