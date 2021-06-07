﻿using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Event
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayDecontaminationCalculatorFactory : IDecontaminationCalculatorFactory
    {
        public TravelCostCalculator Calculator_travel { get; set; }

        public ParameterArrayDecontaminationCalculatorFactory(
            OtherParameters otParameters,
            CostParameters costParameters)
        {
            Calculator_travel = new TravelCostCalculator(
                costParameters.rentalCarCostPerDay,
                costParameters.roundtripTicketCostPerPerson,
                costParameters.perDiem,
                otParameters.personnelPerRentalCar
            );
        }
        public DecontaminationCostCalculator GetCalculator()
        {
            return new DecontaminationCostCalculator
            {
                Calculator_travel = Calculator_travel
            };
        }
    }
}
