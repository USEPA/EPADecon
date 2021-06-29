using System.Linq;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Time
{
    public class WorkDaysCalculator : IWorkDaysCalculator 
    {
        public double CalculateWorkDays(List<Dictionary<ApplicationMethod, double>> laborDays)
        {
            var workDays = 0.0;

            foreach (var item in laborDays)
            {
                workDays += item.Sum(x => x.Value);
            }

            return workDays;
        }
    }
}