using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Statistics
{
    public class LogNormalValueGenerator
    {
        public double Mean { get; set; }
        public double StdDev { get; set; }

        public LogNormalValueGenerator(double mean, double stdev)
        {
            Mean = mean;
            StdDev = stdev;
        }

        public double DrawValue()
        {
            throw new NotImplementedException();
        }
    }
}
