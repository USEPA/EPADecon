using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.Statistics;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Statistics
{
    public class BetaPertValueGenerator
    {
        private const double Scale = 4.0;
        public double Mode { get; }
        public double Min { get; }
        public double Max { get; }
        public double Mean => (Min + Max + Scale * Mode) / (Scale + 2);

        public BetaPertValueGenerator(double mode, double min, double max)
        {
            Mode = mode;
            Min = min;
            Max = max;
        }

        public double DrawValue()
        {
            throw new NotImplementedException();
        }
    }
}
