using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.Statistics;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Statistics
{
    public class BimodalTruncatedNormalValueGenerator
    {
        public double Mean1 { get; set; }
        public double StdDev1 { get; set; }
        public double Mean2 { get; set; }
        public double StdDev2 { get; set; }
        public double Min { get; set; }
        public double Max { get; set; }

        public BimodalTruncatedNormalValueGenerator(double mean1, double stdev1, double mean2, double stdev2, double min, double max)
        {
            Mean1 = mean1;
            StdDev1 = stdev1;
            Mean2 = mean2;
            StdDev2 = stdev2;
            Min = min;
            Max = max;
        }

        public double DrawValue()
        {
            throw new NotImplementedException();
        }
    }
}
