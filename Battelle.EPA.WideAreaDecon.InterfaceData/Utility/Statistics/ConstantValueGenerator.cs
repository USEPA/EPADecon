using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Statistics
{
    public class ConstantValueGenerator
    {
		public double Value { get; set; }

		public ConstantValueGenerator(double value)
		{
			Value = value;
		}

		public double DrawValue() {
			return Value; 
		}
    }
}
