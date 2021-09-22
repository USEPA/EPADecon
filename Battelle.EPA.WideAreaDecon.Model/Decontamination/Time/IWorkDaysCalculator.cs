using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Time
{
    public interface IWorkDaysCalculator
    {
        public double CalculateWorkDays(List<Dictionary<ApplicationMethod, double>> laborDays);
    }
}