﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.Model.Services
{
    public interface IWasteSamplingCalculatorFactory
    {
        WasteSampling.WasteSamplingCostCalculator GetCalculator();
    }
}
