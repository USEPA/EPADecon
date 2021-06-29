using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Time
{
    public interface IWorkDaysCalculator
    {
        public List<Dictionary<ApplicationMethod, double>> CalculateWorkDays(List<Dictionary<ApplicationMethod, double>> laborDays);
    }
}