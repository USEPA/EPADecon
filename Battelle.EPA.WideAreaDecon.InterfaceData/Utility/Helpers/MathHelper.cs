using System;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Helpers
{
    public static class MathHelper
    {
        public static double? ConvertToLog10(double? value) => 
            value.HasValue && value.Value > 0 ? Math.Log10(value.Value) : null as double?;
    }
}
