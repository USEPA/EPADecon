using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Statistics
{
    public class LogUniformValueGenerator
    {
        public double Min { get; set; }
        public double Max { get; set; }

        public LogUniformValueGenerator(double min, double max)
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
