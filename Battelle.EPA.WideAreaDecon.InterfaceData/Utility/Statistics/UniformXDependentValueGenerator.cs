using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Statistics
{
    public class UniformXDependentValueGenerator
    {
        public double Min { get; set; }
        public double Max { get; set; }

        // Theoretically this could just call the uniform generator
        public UniformXDependentValueGenerator(double min, double max)
        {
            Min = min;
            Max = max;
        }

        public double DrawValue()
        {
            throw new NotImplementedException();
        }
    }
}
