using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Domain
{
    public class Assignment
    {
        public ElementCategory ElementCategory { get; set; }
        public double DaysToCompletion { get; set; }
        public double LagPrecedingSubsequentAssignments { get; set; }
        public List<Assignment> SubsequentAssignments { get; set; }
    }
}
