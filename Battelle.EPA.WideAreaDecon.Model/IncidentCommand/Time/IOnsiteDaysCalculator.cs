using Battelle.EPA.WideAreaDecon.Model.Domain;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Time
{
    public interface IOnsiteDaysCalculator
    {
        public double CalculateOnSiteDays(List<Assignment> assignments);
    }
}
