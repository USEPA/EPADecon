using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Statistics
{
    public class WeibullValueGenerator
    {
        public double K { get; set; }
        public double Lambda { get; set; }

        public WeibullValueGenerator(double k, double lambda)
        {
            K = k;
            Lambda = lambda;
        }

        public double DrawValue()
        {
            throw new NotImplementedException();
        }
    }
}
