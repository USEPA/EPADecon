using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Time
{
    public interface ILaborDaysCalculator
    {
        public List<Dictionary<ApplicationMethod, double>> CalculateLaborDays();
    }
}
