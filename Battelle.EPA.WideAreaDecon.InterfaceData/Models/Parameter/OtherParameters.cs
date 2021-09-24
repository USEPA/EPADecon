using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class OtherParameters
    {
        public double personnelPerRentalCar;

        public OtherParameters(double _personnelPerRentalCar)
        {
            personnelPerRentalCar = _personnelPerRentalCar;
        }
    }
}
