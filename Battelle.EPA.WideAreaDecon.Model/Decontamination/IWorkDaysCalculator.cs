using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface IWorkDaysCalculator
    {
        public List<Dictionary<ApplicationMethod, double>> CalculateWorkDays();
    }
}