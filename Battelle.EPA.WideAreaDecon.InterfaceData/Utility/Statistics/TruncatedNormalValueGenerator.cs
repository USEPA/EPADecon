using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Statistics
{
    public class TruncatedNormalValueGenerator
    {
        public double Min { get; set; }
        public double Max { get; set; }
        public double Mean { get; set; }
        public double StdDev { get; set; }

        public TruncatedNormalValueGenerator(double min, double max, double mean, double stdev)
        {
            Min = min;
            Max = max;
            Mean = mean;
            StdDev = stdev;
        }

        public double DrawValue()
        {
            throw new NotImplementedException();
        }
    }
}
